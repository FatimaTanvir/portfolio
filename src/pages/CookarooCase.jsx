import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BRAND = '#D2551E'
const BRAND_DARK = '#A0501F'

// ── Set to true when the case study is ready to publish ──────────────────────
const SHOW_CASE_STUDY = false

// ─── Reusable placeholder ────────────────────────────────────────────────────
function MediaSlot({ label, aspect = 'aspect-video', className = '' }) {
  return (
    <div className={`${aspect} ${className} bg-gray-100 rounded-2xl flex items-center justify-center border border-dashed border-gray-300`}>
      <p className="text-xs text-gray-400 text-center px-4">[ {label} ]</p>
    </div>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({ children, className = '' }) {
  return (
    <section className={`px-6 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-20 max-w-6xl mx-auto w-full ${className}`}>
      {children}
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">{children}</p>
  )
}

function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-montserrat leading-tight mb-6 ${className}`}>{children}</h2>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function CookarooCase() {
  useEffect(() => {
    document.title = 'Cookaroo Case Study | Fatima Tanvir'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Hero (shown only when case study is live) ── */}
      {SHOW_CASE_STUDY && (
        <>
          {/* Mobile hero — fully orange, gif blends into it */}
          <div className="md:hidden w-full flex flex-col items-center pb-10" style={{ backgroundColor: BRAND }} data-cursor="dark">
            <div className="flex justify-center pt-8">
              <img
                src="/projects/Cookaroo/Landing.gif"
                alt="Cookaroo splash screen"
                className="h-72 w-auto object-contain"
              />
            </div>
            <div className="w-full px-8 pt-4 text-center">
              <h1 className="text-4xl font-montserrat text-white mb-1 leading-tight">Cookaroo</h1>
              <p className="text-white/60 text-xs mb-8">CodePath x AmazonNext Design Challenge 2025</p>
              <div className="text-left space-y-4">
                <div>
                  <p className="font-semibold text-white text-sm mb-1">Overview</p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    A mobile-first cooking companion designed to make meal planning and recipe
                    discovery feel structured, calm, and accessible. Its flagship assistant,{' '}
                    <strong className="text-white">Chef Sue</strong>, guides users step-by-step through meals.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">Role</p>
                    <p className="text-white/80 text-xs">UX Designer | Visual Design & Wireframes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">Duration</p>
                    <p className="text-white/80 text-xs">May – June, 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">Tools</p>
                    <p className="text-white/80 text-xs">Figma Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop hero: white strip top + orange band, phone left / content right */}
          <div className="relative hidden md:block w-full bg-white overflow-hidden" data-cursor="dark" style={{ height: '520px' }}>
            <div className="absolute inset-x-0" style={{ top: '100px', bottom: '40px', backgroundColor: BRAND }} />
            <div className="relative z-10 h-full grid" style={{ gridTemplateColumns: '580px 1fr' }}>
              <div className="flex items-start justify-center pt-8 pl-4 sm:pl-10">
                <img
                  src="/projects/Cookaroo/Landing.gif"
                  alt="Cookaroo splash screen"
                  className="h-[490px] w-auto object-contain"
                />
              </div>
              <div
                className="flex flex-col justify-center text-white pr-10 sm:pr-16 lg:pr-24"
                style={{ paddingTop: '100px', paddingBottom: '40px' }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat text-center mb-1 leading-tight">Cookaroo</h1>
                <p className="text-center text-white/60 text-xs mb-8">CodePath x AmazonNext Design Challenge 2025</p>
                <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                  <div>
                    <p className="font-semibold text-white text-sm mb-2">Overview</p>
                    <p className="text-white/80 text-xs leading-relaxed">
                      A mobile-first cooking companion designed to make meal planning and recipe
                      discovery feel structured, calm, and accessible. Its flagship assistant,{' '}
                      <strong className="text-white">Chef Sue</strong>, guides users step-by-step through meals.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">Role</p>
                      <p className="text-white/80 text-xs">UX Designer | Visual Design & Wireframes</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">Duration</p>
                      <p className="text-white/80 text-xs">May – June, 2025</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">Tools</p>
                      <p className="text-white/80 text-xs">Figma Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Updating notice (shown while case study is being written) ── */}
      {!SHOW_CASE_STUDY && (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Case Study</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat text-gray-900 mb-4 leading-tight">
            Updating case study.
          </h2>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-10">
            Full write-up coming soon. In the meantime, take a look at the prototype.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/designs"
              className="border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors"
            >
              ← Back to Designs
            </Link>
            <a
              href="https://www.figma.com/proto/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-200&t=jnSyfce8LuHwoBOB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=152%3A193"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              View Figma Prototype
            </a>
          </div>
        </div>
      )}

      {/* ── Full case study (toggled by SHOW_CASE_STUDY) ── */}
      {SHOW_CASE_STUDY && (
        <>
          {/* My Role */}
          <Section>
            <SectionLabel>Contribution</SectionLabel>
            <SectionTitle>What I worked on</SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-gray-600 leading-relaxed">
                I was the <strong className="text-gray-900">UI designer</strong> on a team of four. My teammates led
                user research, competitive analysis, and UX strategy. I owned the visual design system,
                high-fidelity wireframes, and the interactive Figma prototype.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Visual identity — color, type, and spacing system',
                  'Low-fi to high-fi wireframe progression',
                  'Light & dark mode UI',
                  'Sign-up flow and onboarding screens',
                  'User profile and personalization interface',
                  'Accessibility: contrast, hierarchy, touch targets',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: BRAND }} className="mt-0.5 text-base leading-none">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* The Challenge */}
          <section className="py-16 sm:py-20 text-center px-6">
            <SectionTitle>The Challenge</SectionTitle>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Design an app, website, or experience that improves food access and inclusivity for an underserved audience.
            </p>
          </section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* The Problem */}
          <Section>
            <SectionTitle>The Problem</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-gray-600 leading-relaxed">
                  Many college students struggle to cook at home due to academic demands, limited budgets,
                  lack of confidence, and difficulty finding safe substitutions for dietary needs.
                </p>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">The Problem in Numbers</p>
                  <p className="text-xs text-gray-400 mb-6">Why are students not cooking?</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-montserrat flex-shrink-0 w-20 text-right" style={{ color: BRAND }}>25%</span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        In 2022, a poll of over <strong>6,000 U.S. college students</strong> found fewer than 1 in 4
                        were cooking even seven healthy meals a week. <span className="text-gray-400">(Yugo, 2022)</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-montserrat flex-shrink-0 w-20 text-right" style={{ color: BRAND }}>3/4</span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        3 out of 4 didn't feel confident in their cooking abilities.{' '}
                        <span className="text-gray-400">(National Library of Medicine, 2018)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.img
                src="/projects/Cookaroo/Stressted Student.png"
                alt="stressed student illustration"
                className="w-48 sm:w-56 object-contain mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </Section>

          {/* Why It Matters */}
          <div className="w-full relative py-16 sm:py-20 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full w-[18%]"
              data-cursor="dark"
              style={{ backgroundColor: BRAND, clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }}
            />
            <div
              className="absolute right-0 top-0 h-full w-[18%]"
              data-cursor="dark"
              style={{ backgroundColor: BRAND, clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)' }}
            />
            <div className="relative max-w-xl mx-auto px-[22%] sm:px-6 text-center">
              <p className="text-lg sm:text-xl font-montserrat mb-4 leading-snug">
                <strong>Why</strong> it Matters?
              </p>
              <p className="text-gray-600 text-sm mb-4">That lack of home cooking isn't just a lifestyle choice.</p>
              <p className="text-gray-600 text-sm mb-4">Students who cook regularly are at lower risk of:</p>
              <ul className="text-sm text-left inline-block mb-4 space-y-1">
                {['Obesity', 'High blood pressure', 'Diabetes', 'Depression'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm">They also spend less on food over time.</p>
            </div>
          </div>

          {/* User Research */}
          <Section>
            <SectionLabel>Team Research</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-montserrat leading-tight mb-6">
              User <span style={{ color: BRAND }}>Research</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
              As our primary source, the team conducted{' '}
              <strong className="text-gray-900">24 first-hand in-depth interviews</strong> with students across
              multiple campuses to better understand cooking habits and challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {[
                {
                  label: 'Demographics',
                  items: ['College Students', 'Aged 18-35'],
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto mb-3">
                      <circle cx="20" cy="20" r="20" fill={BRAND} />
                    </svg>
                  ),
                },
                {
                  label: 'Psychographics',
                  items: ['Financially Aware', 'Health-Conscious', 'Culturally Connected'],
                  icon: (
                    <svg viewBox="0 0 40 24" className="w-10 h-6 mx-auto mb-3">
                      <ellipse cx="12" cy="12" rx="12" ry="12" fill={BRAND} />
                      <ellipse cx="28" cy="12" rx="12" ry="12" fill={BRAND} />
                    </svg>
                  ),
                },
                {
                  label: 'Behavioral traits',
                  items: ['Time Starved', 'Burnt-Out'],
                  icon: (
                    <svg viewBox="0 0 40 28" className="w-10 h-7 mx-auto mb-3">
                      <polygon points="0,0 18,14 0,28" fill={BRAND} />
                      <polygon points="40,0 22,14 40,28" fill={BRAND} />
                    </svg>
                  ),
                },
              ].map(({ label, items, icon }) => (
                <div key={label} className="py-6 px-4">
                  {icon}
                  <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
                  {items.map((item) => (
                    <p key={item} className="text-xs text-gray-500 leading-relaxed">{item}</p>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto mb-8">
              Through these conversations, we identified key patterns in who our participants are, how they think, and how they behave. The following breakdown highlights the key patterns we noticed in students.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Meal prepping is a survival strategy.',
                'Nutrition is a growing priority.',
                'Most gave up on new recipes due to the time and effort it takes to research them.',
              ].map((insight) => (
                <span
                  key={insight}
                  className="border rounded-full px-5 py-2.5 text-sm text-gray-700 text-center max-w-xs"
                  style={{ borderColor: BRAND }}
                >
                  {insight}
                </span>
              ))}
            </div>
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* How Might We */}
          <Section>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold mb-10">
              How might <span style={{ color: BRAND }}>we</span>...
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              Create a <span style={{ color: BRAND }} className="font-semibold">solution</span> that caters to the needs of
              students by suggesting affordable, personalized meals using what students already have?
            </p>
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* Competitive Analysis */}
          <Section>
            <SectionLabel>Team Research</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold mb-8">
              Let's take a look at what's <span style={{ color: BRAND }}>already out there</span>
            </h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  name: 'Yummly',
                  logo: '/projects/Cookaroo/Yummly Logo.png',
                  focus: 'Discovering, saving and planning recipes.',
                  strength: 'Personalized user recommendations, ability to add dietary preferences.',
                  weakness: 'Lacks real-time guidance, budget awareness, and personalized support based on pantry items or cultural preferences.',
                },
                {
                  name: 'Mealime',
                  logo: '/projects/Cookaroo/Mealime Logo.png',
                  focus: 'Simple meal planning.',
                  strength: 'Clean UI, beginner-friendly.',
                  weakness: 'No cultural or pantry-based suggestions. Missing personalization, grocery price awareness.',
                },
                {
                  name: 'Instacart',
                  logo: '/projects/Cookaroo/InstaCart Logo.png',
                  focus: 'Online grocery shopping delivered to your door.',
                  strength: 'Streamlined, simple UI, personalized recommendations.',
                  weakness: 'Higher prices than in-store products.',
                },
              ].map(({ name, logo, focus, strength, weakness }) => (
                <div key={name} className="flex items-start gap-6 border border-gray-200 rounded-2xl p-5">
                  <div className="flex-shrink-0 flex flex-col items-center gap-1 w-16 text-center">
                    <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain rounded-xl" />
                    <p className="text-xs font-medium text-gray-700">{name}</p>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><span className="font-semibold text-gray-900">Focus:</span> {focus}</p>
                    <p><span className="font-semibold text-gray-900">Strength:</span> {strength}</p>
                    <p><span className="font-semibold text-gray-900">Weakness:</span> {weakness}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
              Every existing solution solves part of the problem. But none of them start from where a college student actually is: broke, busy, and standing in front of a half-empty fridge at 10pm.{' '}
              <strong className="text-gray-900">That's the gap our solution was built to fill.</strong>
            </p>
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* Our Solution */}
          <Section>
            <SectionLabel>Our Solution</SectionLabel>
            <SectionTitle>Meet Cookaroo</SectionTitle>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">
              Many college students struggle to cook at home due to the demands of academic life, limited budgets, lack of cooking experience and confidence, and difficulty finding safe substitutions for their allergies.
            </p>
            <img
              src="/projects/Cookaroo/Dark Mode.gif"
              alt="Cookaroo app overview"
              className="w-full rounded-2xl object-cover"
            />
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* Design Process */}
          <Section>
            <SectionLabel>Design Process</SectionLabel>
            <SectionTitle>From sketch to prototype</SectionTitle>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
              I moved through three rounds of fidelity, validating visual decisions at each stage
              before building the full Figma prototype.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stage: '01 — Low-fi', note: 'Structure and flow, no styling' },
                { stage: '02 — Mid-fi', note: 'Layout refined, typography introduced' },
                { stage: '03 — High-fi', note: 'Full visual system applied' },
              ].map(({ stage, note }) => (
                <div key={stage}>
                  <MediaSlot label={`${stage} wireframes`} aspect="aspect-[9/16]" />
                  <p className="text-xs font-medium text-gray-700 mt-3">{stage}</p>
                  <p className="text-xs text-gray-400">{note}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* Key Screens */}
          <Section>
            <SectionLabel>UI Design</SectionLabel>
            <SectionTitle>Screens I designed</SectionTitle>
            <div className="space-y-16">
              {[
                {
                  screen: 'Onboarding & Sign-up',
                  note: 'Designed to feel welcoming and reduce friction. Kept input fields minimal, used warm orange as a trust signal on the first impression.',
                  slot: 'onboarding screens (light + dark)',
                  wide: true,
                },
                {
                  screen: 'Home & Recipe Discovery',
                  note: "Card-based layout to support quick scanning. Chef Sue's recommendations appear contextually based on pantry and preferences.",
                  slot: 'home screen screenshots',
                  wide: false,
                },
                {
                  screen: 'User Profile',
                  note: 'Designed to feel personal, not clinical. Dietary restrictions and preferences surface here to personalise the Chef Sue experience.',
                  slot: 'profile screen screenshots',
                  wide: false,
                },
                {
                  screen: 'Light & Dark Mode',
                  note: 'Both modes designed from the ground up — not just an inverted palette. Contrast ratios were validated for WCAG AA compliance.',
                  src: '/projects/Cookaroo/Dark Mode.gif',
                  alt: 'Cookaroo light and dark mode side by side',
                  wide: true,
                },
              ].map(({ screen, note, slot, src, alt, wide }) => (
                <div key={screen} className={`grid ${wide ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-8 items-center`}>
                  <div className={wide ? 'max-w-lg' : ''}>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{screen}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{note}</p>
                  </div>
                  {src ? (
                    <img src={src} alt={alt} className="w-full rounded-2xl object-cover" />
                  ) : (
                    <MediaSlot label={slot} aspect={wide ? 'aspect-video' : 'aspect-[4/3]'} />
                  )}
                </div>
              ))}
            </div>
          </Section>

          <hr className="border-gray-100 max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-24 xl:px-40" />

          {/* Reflection */}
          <Section>
            <SectionLabel>Reflection</SectionLabel>
            <SectionTitle>What I'd do differently</SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-gray-600 leading-relaxed">
                This was my first team-based design challenge under a real deadline. Looking back, I'd push for
                more rounds of user testing on the high-fi prototype before finalising — some interaction patterns
                I felt confident about haven't been validated with real users yet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'd also invest earlier in a shared component library so handoff between wireframe stages was
                cleaner. The design system grew organically which caused some inconsistency in spacing tokens
                between screens.
              </p>
            </div>
          </Section>

          {/* CTA */}
          <div className="w-full py-16 sm:py-20 flex flex-col items-center gap-6 px-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">See it for yourself</p>
            <h2 className="text-4xl sm:text-5xl font-montserrat text-center">Ready to cook?</h2>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                to="/designs"
                className="border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors"
              >
                ← Back to Designs
              </Link>
              <a
                href="https://www.figma.com/proto/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-200&t=jnSyfce8LuHwoBOB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=152%3A193"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND }}
              >
                View Figma Prototype
              </a>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}
