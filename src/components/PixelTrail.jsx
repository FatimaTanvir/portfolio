import { useEffect, useRef } from 'react'

/**
 * PixelDisplace — WebGL pixel displacement on an image.
 *
 * Takes an image src, renders it on a WebGL canvas, and applies a
 * pixelated push-displacement shader around the cursor. Pixels near
 * the cursor get chunked into blocks and pushed outward.
 *
 * Props:
 *   src         — image path
 *   alt         — alt text
 *   className   — applied to the wrapper div
 *   pixelSize   — block size (normalised)
 *   strength    — displacement strength
 *   radius      — cursor effect radius
 *   followSpeed — cursor follow lerp speed
 */

const VERT = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    v_uv.y = 1.0 - v_uv.y;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const FRAG = `
  precision mediump float;
  varying vec2 v_uv;
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform float u_strength;
  uniform float u_radius;
  uniform float u_pixelSize;
  uniform vec2 u_resolution;
  uniform float u_active;

  void main() {
    vec2 uv = v_uv;

    if (u_active > 0.01) {
      vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
      vec2 diff = (uv - u_mouse) * aspect;
      // Chebyshev distance — gives a boxy/square displacement zone
      float dist = max(abs(diff.x), abs(diff.y));
      float falloff = smoothstep(u_radius, 0.0, dist);
      falloff *= u_active;

      if (falloff > 0.005) {
        float blockSize = u_pixelSize * (0.3 + 0.7 * falloff);
        blockSize = max(blockSize, 0.002);
        vec2 pixelUV = floor(uv / blockSize) * blockSize + blockSize * 0.5;
        vec2 dir = normalize(diff + vec2(0.0001));
        vec2 displacement = dir * u_strength * falloff / aspect;
        uv = mix(uv, pixelUV + displacement, falloff);
      }
    }

    vec4 color = texture2D(u_texture, clamp(uv, 0.0, 1.0));
    gl_FragColor = color;
  }
`

export default function PixelDisplace({
  src,
  alt = '',
  className = '',
  pixelSize = 0.055,
  strength = 0.10,
  radius = 0.10,
  followSpeed = 0.20,
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imgRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: -1, y: -1, tx: -1, ty: -1, active: 0 })

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768
    if (isMobile) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    // Compile shaders
    function makeShader(type, source) {
      const s = gl.createShader(type)
      gl.shaderSource(s, source)
      gl.compileShader(s)
      return s
    }

    const program = gl.createProgram()
    gl.attachShader(program, makeShader(gl.VERTEX_SHADER, VERT))
    gl.attachShader(program, makeShader(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(program)
    gl.useProgram(program)

    // Quad geometry
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    // Uniforms
    const u = {
      texture: gl.getUniformLocation(program, 'u_texture'),
      mouse: gl.getUniformLocation(program, 'u_mouse'),
      strength: gl.getUniformLocation(program, 'u_strength'),
      radius: gl.getUniformLocation(program, 'u_radius'),
      pixelSize: gl.getUniformLocation(program, 'u_pixelSize'),
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      active: gl.getUniformLocation(program, 'u_active'),
    }

    gl.uniform1i(u.texture, 0)
    gl.uniform1f(u.strength, strength)
    gl.uniform1f(u.radius, radius)
    gl.uniform1f(u.pixelSize, pixelSize)
    gl.uniform1f(u.active, 0)

    // Load image as texture
    const texture = gl.createTexture()
    const img = new Image()
    img.crossOrigin = 'anonymous'
    let loaded = false

    img.onload = () => {
      // Size canvas to match image's rendered size
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(u.resolution, canvas.width, canvas.height)

      // Upload image
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST) // keep pixel art crisp
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)

      // Enable blending for transparency
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

      loaded = true
      canvas.style.opacity = '1'
      // Hide fallback image so we don't see double
      if (imgRef.current) imgRef.current.style.visibility = 'hidden'
    }
    img.src = src

    // Mouse events — track relative to canvas
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.tx = (e.clientX - rect.left) / rect.width
      mouseRef.current.ty = (e.clientY - rect.top) / rect.height
    }

    const onMouseLeave = () => {
      mouseRef.current.tx = -1
      mouseRef.current.ty = -1
    }

    // Listen on window for mouse (so effect triggers even before entering canvas)
    window.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    // Render loop
    const render = () => {
      rafRef.current = requestAnimationFrame(render)
      if (!loaded) return

      const m = mouseRef.current

      // Check if mouse is near the canvas
      const inBounds = m.tx >= -0.3 && m.tx <= 1.3 && m.ty >= -0.3 && m.ty <= 1.3

      // Smooth active state (fade in/out)
      const targetActive = inBounds ? 1 : 0
      m.active += (targetActive - m.active) * 0.06

      // Smooth follow
      if (inBounds) {
        m.x += (m.tx - m.x) * followSpeed
        m.y += (m.ty - m.y) * followSpeed
      }

      gl.uniform2f(u.mouse, m.x, m.y)
      gl.uniform1f(u.active, m.active)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }
    rafRef.current = requestAnimationFrame(render)

    // Resize handling
    const onResize = () => {
      if (!loaded) return
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(u.resolution, canvas.width, canvas.height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [src, pixelSize, strength, radius, followSpeed])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Fallback image (visible on mobile / before WebGL loads) */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-auto object-contain block"
        style={{ imageRendering: 'pixelated' }}
      />
      {/* WebGL canvas overlays the image */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0, imageRendering: 'pixelated' }}
      />
    </div>
  )
}
