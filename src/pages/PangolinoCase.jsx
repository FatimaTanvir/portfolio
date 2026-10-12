import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThreeDMarquee } from '../components/ThreeDMarquee'

const BRAND = '#3A4728'
const BRAND_LIGHT = '#4e5f34'

const BASE_IMAGES = [
  '/projects/Pangolino/1.webp',
  '/projects/Pangolino/4.webp',
  '/projects/Pangolino/5.jpg',
  '/projects/Pangolino/6.jpg',
  '/projects/Pangolino/7.webp',
  '/projects/Pangolino/pangolinslide.gif',
]
// Loop the 4 images 3× so each marquee column has enough to scroll seamlessly
const MARQUEE_IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES]

function Section({ children, className = '' }) {
  return (
    <section className={`px-6 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-20 max-w-6xl mx-auto w-full ${className}`}>
      {children}
    </section>
  )
}

function Label({ children }) {
  return <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">{children}</p>
}

function Heading({ children, className = '' }) {
  return <h2 className={`text-3xl sm:text-4xl font-montserrat leading-tight mb-6 ${className}`}>{children}</h2>
}

export default function PangolinoCase() {
  useEffect(() => {
    document.title = 'Pangolino Case Study | Fatima Tanvir'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <div className="relative w-full overflow-hidden" style={{ background: BRAND, minHeight: '560px' }}>
        {/* 3D Marquee — right half only */}
        <div className="absolute right-0 top-0 h-full w-[55%] opacity-60">
          <ThreeDMarquee images={MARQUEE_IMAGES} className="w-full h-full" />
        </div>

        {/* Gradient: solid brand on left, fades out toward marquee */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${BRAND} 45%, ${BRAND}99 60%, transparent 85%)` }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 sm:px-16 lg:px-24 py-24 max-w-2xl">
          <p className="text-white/50 text-[10px] uppercase tracking-widest mb-4 font-medium">UX Engineering · Non-profit · Summer 2025</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-montserrat text-white leading-tight mb-4">Pangolino</h1>
          <p className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
            Designing and building a secure, mobile-friendly donations page for a Nigerian pangolin conservation nonprofit — from zero to live.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://pangolino.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-medium bg-white text-gray-900 hover:bg-white/90 transition-colors"
            >
              Live Site →
            </a>
            <a
              href="https://www.figma.com/proto/XnLc7eTJGo3s1L0EDWHja2/Pangolino-Figma-Files?node-id=860-215&t=neVfi9ddD8mlGYdB-1&starting-point-node-id=860%3A215&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Figma Prototype
            </a>
          </div>
        </div>
      </div>

      {/* ── Meta ── */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-100 pb-16">
          {[
            { label: 'Role', value: 'UX Engineer — Design + Development' },
            { label: 'Team', value: '1 PM · 2 Developers · 2 Designers' },
            { label: 'Duration', value: '17 weeks (May – Aug, 2025)' },
            { label: 'Tools', value: 'Figma · React · TypeScript · Paystack API' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-1">{label}</p>
              <p className="text-sm text-gray-800 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Overview ── */}
      <Section className="pt-0">
        <Label>Overview</Label>
        <Heading>One nonprofit. One critical gap.</Heading>
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-gray-600 leading-relaxed">
            Pangolino — the Pangolin Protection Network — is a Nigerian wildlife conservation organization
            founded by Charles Emogor. They relied almost entirely on competitive grants for funding,
            leaving them financially vulnerable and with no direct way for supporters to contribute.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team designed and developed a secure, mobile-friendly donation page integrated directly
            into their existing React + TypeScript website — enabling international supporters to make
            one-time or recurring donations for the first time.
          </p>
        </div>
      </Section>

      <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

      {/* ── My contribution ── */}
      <Section>
        <Label>Contribution</Label>
        <Heading>What I worked on</Heading>
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-gray-600 leading-relaxed">
            I wore two hats: <strong className="text-gray-900">UX designer</strong> and{' '}
            <strong className="text-gray-900">front-end developer</strong>. On the design side I worked
            alongside our design lead on high-fidelity wireframes and the donation flow. On the dev side,
            I built out the donation page components, integrated Paystack, and ran the responsive audit
            that caught 7 bugs across 4 pages.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              'Donation page — React/TypeScript components from scratch',
              'Paystack Inline SDK integration (one-time + recurring)',
              'Confetti thank-you animation on successful donation',
              'Newsletter signup UI across 3 pages',
              'Annual Reports section redesign',
              'Mobile nav bug fix (Donate button drawer close)',
              'Animated border-beam hover on navbar Donate button',
              'Site-wide responsive audit — 7 bugs fixed across 4 pages',
              'Image compression: 4–14MB → ~200KB (no visible quality loss)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-base leading-none flex-shrink-0" style={{ color: BRAND }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Why it matters ── */}
      <div className="relative py-20 px-6 text-center overflow-hidden" style={{ background: BRAND }}>
        <div className="absolute left-0 top-0 h-full w-[18%]" style={{ backgroundColor: BRAND_LIGHT, clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }} />
        <div className="absolute right-0 top-0 h-full w-[18%]" style={{ backgroundColor: BRAND_LIGHT, clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-white/50 text-[10px] uppercase tracking-widest mb-4">The problem</p>
          <p className="text-white text-2xl sm:text-3xl font-montserrat leading-snug mb-4">
            Over <span className="font-bold">20,000 pangolins</span> are killed annually in Southeast Nigeria.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Pangolino needed a way for supporters worldwide to fund that fight directly —
            without relying on grant cycles that could dry up at any time.
          </p>
        </div>
      </div>

      {/* ── Process ── */}
      <Section>
        <Label>Process</Label>
        <Heading>17 weeks, two phases</Heading>
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="border border-gray-100 rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-widest font-medium mb-2" style={{ color: BRAND }}>Phase 1 — 5 weeks</p>
            <h3 className="text-xl font-montserrat mb-4">Project Scoping</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                '3 discovery sessions with Charles (Founder)',
                'Defined target audience, infrastructure, payment constraints',
                'Learned: 8k monthly visitors, concentrated in US, Europe & Nigeria',
                'Chose Paystack over Stripe (Nigeria incompatibility)',
                'Scoped features: donations, newsletter, Annual Reports section',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-100 rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-widest font-medium mb-2" style={{ color: BRAND }}>Phase 2 — 12 weeks</p>
            <h3 className="text-xl font-montserrat mb-4">Design + Development</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Competitive analysis of WWF, charity:water, Nat Geo',
                'Sketches → lo-fi → hi-fi in Figma, following Pangolino\'s design system',
                'Implementation in parallel with design (weeks 6–12)',
                'Discovered Stripe doesn\'t support Nigeria → pivoted to Paystack at week 11',
                'User testing with 8 participants across 3 groups',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Placeholder for process images */}
        <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
          <p className="text-xs text-gray-400">[ Add process screenshots / wireframes here ]</p>
        </div>
      </Section>

      <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

      {/* ── Design Highlights ── */}
      <Section>
        <Label>Design</Label>
        <Heading>Following Pangolino's identity — not reinventing it</Heading>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
          Pangolino's brand is grounded in art and community action. Maintaining visual coherence was non-negotiable —
          we matched their existing color scheme, font weights, and photography style throughout every screen.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: 'Competitive Analysis',
              desc: 'Benchmarked WWF, charity:water, and National Geographic. Client aligned with charity:water\'s donation flow as the reference.',
            },
            {
              title: 'Donation Flow',
              desc: 'One-time and monthly giving. Key steps moved into overlays to reduce page jumps and keep users in context.',
            },
            {
              title: 'Trust Signals',
              desc: 'Impact photography, annual reports, and project pages surfaced before the donation prompt — giving donors reasons to give.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-montserrat text-base mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="aspect-[4/3] bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-xs text-gray-400">[ Hi-fi donation page screen ]</p>
          </div>
          <div className="aspect-[4/3] bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-xs text-gray-400">[ Donation flow / payment modal ]</p>
          </div>
        </div>
      </Section>

      <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

      {/* ── Development ── */}
      <Section>
        <Label>Development</Label>
        <Heading>From Figma to a live, working payment flow</Heading>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              The existing site ran on React + TypeScript hosted on Cloudflare, with a Linux/Oracle Cloud backend.
              We built the entire donation page as a new set of components, replacing the old page from scratch.
            </p>
            <div>
              <p className="font-semibold text-gray-900 mb-4">Payment integration highlights</p>
              <div className="space-y-4">
                {[
                  { stat: 'Paystack', label: 'Chosen over Stripe — fully compatible with Nigerian business accounts' },
                  { stat: 'Inline SDK', label: 'In-page checkout, no redirects. Preset tiers plus custom amount.' },
                  { stat: 'Confetti', label: 'Celebratory animation fires on every successful donation — making giving feel rewarding.' },
                  { stat: '7 bugs', label: 'Fixed across 4 pages during the site-wide responsive audit.' },
                ].map(({ stat, label }) => (
                  <div key={stat} className="flex items-start gap-4">
                    <span className="text-2xl font-montserrat flex-shrink-0 w-28 text-right" style={{ color: BRAND }}>{stat}</span>
                    <p className="text-sm text-gray-600 leading-relaxed pt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-xs text-gray-400">[ Paystack demo / payment flow screenshot ]</p>
          </div>
        </div>
      </Section>

      {/* ── User Testing ── */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-40 max-w-6xl mx-auto w-full">
          <Label>User Testing</Label>
          <Heading>8 participants. 3 groups. Real friction.</Heading>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            We tested with designers and developers in our network, Pangolino team members, and unmoderated general users —
            to surface first-impression friction a more invested tester would miss.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { issue: 'Missing impact tracker', detail: 'No progress bar or stated destination for funds — donors felt disconnected from outcomes.' },
              { issue: 'No security cues', detail: 'No lock icon or "secure payment" messaging before entering card details.' },
              { issue: 'Duplicate CTAs', detail: 'Two buttons opening the same donation modal confused users — they expected different actions.' },
              { issue: 'Copy landed well', detail: 'Testers consistently described the page copy as compelling and a genuine motivator to give. ✓' },
            ].map(({ issue, detail }) => (
              <div key={issue} className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="font-montserrat text-sm mb-2">{issue}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonial ── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl text-gray-800 leading-relaxed mb-8 italic">
            "Going into this, it sounded like there was so much to tackle that we might not get it all done —
            but the team exhibited amazing cross-functional leadership to make it happen. Fantastic work."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-gray-300" />
            <p className="text-sm text-gray-500">Charles Emogor, Founder & Executive Director — Pangolin Protection Network</p>
            <div className="w-8 h-px bg-gray-300" />
          </div>
        </div>
      </Section>

      {/* ── Links ── */}
      <div className="py-16 border-t border-gray-100">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-40 max-w-6xl mx-auto w-full flex flex-wrap gap-4">
          <a
            href="https://pangolino.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: BRAND }}
          >
            View Live Site →
          </a>
          <a
            href="https://www.figma.com/proto/XnLc7eTJGo3s1L0EDWHja2/Pangolino-Figma-Files?node-id=860-215&t=neVfi9ddD8mlGYdB-1&starting-point-node-id=860%3A215&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Figma Prototype
          </a>
          <Link
            to="/designs"
            className="px-8 py-3 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ← Back to Designs
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
