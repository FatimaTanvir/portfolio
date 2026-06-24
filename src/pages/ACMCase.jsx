import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BRAND   = '#E8743B'
const DARK    = '#0D0D0D'
const SITE_URL = 'https://uhdacm.org'

const SHOW_CASE_STUDY = true

function Label({ children, light = false }) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.2em] font-semibold mb-3 ${light ? 'text-white/40' : 'text-gray-400'}`}>
      {children}
    </p>
  )
}

function Wrap({ children, className = '' }) {
  return (
    <div className={`max-w-4xl mx-auto w-full px-6 sm:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

function Placeholder({ label, aspect = 'aspect-video', dark = false }) {
  if (dark) {
    return (
      <div className={`w-full ${aspect} rounded-2xl border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center gap-2 text-center px-6`}>
        <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
          <span className="text-white/20 text-lg">+</span>
        </div>
        <p className="text-xs font-medium text-white/30">{label}</p>
      </div>
    )
  }
  return (
    <div className={`w-full ${aspect} rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 text-center px-6`}>
      <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
        <span className="text-gray-300 text-lg">+</span>
      </div>
      <p className="text-xs font-medium text-gray-400">{label}</p>
    </div>
  )
}

export default function ACMCase() {
  useEffect(() => {
    document.title = 'UHD ACM Redesign | Fatima Tanvir'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {!SHOW_CASE_STUDY && (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Case Study</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
            Updating case study.
          </h2>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-10">
            Full write-up coming soon. In the meantime, visit the live site.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/designs" className="border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors">
              ← Back to Designs
            </Link>
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
              className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND }}>
              Visit Live Site
            </a>
          </div>
        </div>
      )}

      {SHOW_CASE_STUDY && (
        <>

          {/* ─── HERO — dark, ACM brand ────────────────────────────────────── */}
          <div className="w-full pt-20 pb-0" style={{ backgroundColor: DARK }}>
            <Wrap className="pb-16">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6">
                UX Engineering — Live Project
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight text-white mb-6">
                UHD ACM Site Redesign
              </h1>
              <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
                End-to-end redesign of UHD's ACM chapter website, a platform used by over 1,000 students weekly to discover events, explore tech opportunities, and decide whether to get involved.
              </p>
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-sm font-medium rounded-full px-6 py-2.5 transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND }}>
                Visit uhdacm.org →
              </a>
            </Wrap>

            {/* Metadata row */}
            <Wrap>
              <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 divide-x divide-white/10">
                {[
                  { label: 'Role',     value: 'UX Engineer · Designer + Backend Engineer' },
                  { label: 'Tools',    value: 'Figma · React · Typescript' },
                  { label: 'Team',     value: '10 members · 2 designers, 4 engineers, 1 PM, 1 critic' },
                  { label: 'Status',   value: 'Live at uhdacm.org' },
                ].map(({ label, value }) => (
                  <div key={label} className="px-5 py-5 first:pl-0 last:pr-0">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{label}</p>
                    <p className="text-sm text-white/70 leading-snug">{value}</p>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── OVERVIEW ─────────────────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>Overview</Label>
            <p className="text-gray-700 leading-relaxed text-base mb-5 max-w-2xl">
              uhdacm.org is the public face of UHD's ACM chapter, a student platform that serves as the primary discovery point for tech opportunities at the university. When I joined the project, the site was generic, completely static, and gave prospective members no real reason to stay. The organization had outgrown it.
            </p>
            <p className="text-gray-700 leading-relaxed text-base max-w-2xl">
              We went in with four goals: build a visual identity that actually felt like ACM, introduce interaction design that matched modern expectations, create an Events system students could genuinely use, and reshape the homepage into something that could turn a curious visitor into an active member.
            </p>
          </Wrap>

          {/* ─── STAKES CALLOUT — full-bleed warm ─────────────────────────── */}
          <div className="w-full py-20" style={{ backgroundColor: '#FFF7F3' }}>
            <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-8">The Stakes</p>
              <p className="text-2xl sm:text-3xl lg:text-[2rem] font-montserrat font-semibold leading-snug text-gray-900">
                Every design decision had a real audience.{' '}
                <span style={{ color: BRAND }}>Over 1,000 students</span>{' '}
                visit uhdacm.org every week to check for events, figure out what ACM is, and decide whether to show up. The site needed to work for all three.
              </p>
            </div>
          </div>

          {/* ─── MY ROLE ──────────────────────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>My Role</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
                Design ownership, with a hand in the build.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10 max-w-2xl">
                My role was design-first but not design-only. I led the full UX process from initial research through a handoff-ready prototype, while also contributing to backend development alongside the engineering team. Working across both disciplines shaped how I made design decisions: I already knew what was and wasn't feasible to build.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    area: 'Design',
                    items: [
                      'Conducted student interviews to inform IA and feature direction',
                      'Defined navigation structure and site-wide information architecture',
                      'Produced wireframes across three fidelity levels',
                      'Built and iterated on the Figma prototype throughout the project',
                      'Facilitated design reviews with the team, PM, and design critic',
                      'Incorporated usability findings into final UI decisions',
                    ],
                  },
                  {
                    area: 'Engineering Collaboration',
                    items: [
                      'Contributed to backend development alongside the engineering team',
                      'Oversaw design-to-dev handoff to maintain visual fidelity',
                      'Co-designed and co-implemented the ACM Assistant chatbot',
                      'Advocated for accessibility standards across the implementation',
                    ],
                  },
                ].map(({ area, items }) => (
                  <div key={area} className="bg-white rounded-2xl p-6 border border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: BRAND }}>{area}</p>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── RESEARCH & DISCOVERY ─────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>Research & Discovery</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
              Starting with students who already had opinions.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
              Before anything touched Figma, I interviewed students across the department. I wanted to understand how and whether they used the existing site, what would make an ACM web presence genuinely useful to them, and where the current experience was quietly falling short. What came back wasn't surprising in hindsight, but it was specific enough to act on.
            </p>

            <Label>What We Heard</Label>
            <div className="space-y-5 mb-16">
              {[
                '"I didn\'t even know ACM had a website. I just heard about events through my friends and Instagram."',
                '"The site doesn\'t really feel like ACM. It just looks like a generic school page."',
                '"I couldn\'t tell what ACM actually does or who it\'s for from the homepage."',
              ].map((quote) => (
                <p key={quote}
                  className="text-lg sm:text-xl font-montserrat font-semibold text-gray-900 leading-snug pl-5 border-l-2 italic"
                  style={{ borderColor: BRAND }}>
                  {quote}
                </p>
              ))}
            </div>

            <Label>Core Problems Identified</Label>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  problem: 'No distinctive identity',
                  detail: 'The old site ran on a generic grey-and-orange palette with no real visual character. It could have been any campus club. Nothing communicated that this was a tech organization.',
                },
                {
                  problem: 'Static, unpolished UX',
                  detail: 'No hover states, no transitions, no scroll behavior. Nothing indicated the site knew you were there. For an org that teaches people to build technology, the experience felt like an afterthought.',
                },
                {
                  problem: 'No path to membership',
                  detail: 'A student who landed on the homepage with no prior knowledge of ACM would leave with the same amount of information they arrived with. No value proposition, no join flow, no reason to stay.',
                },
              ].map(({ problem, detail }) => (
                <div key={problem} className="border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-colors">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: BRAND }} />
                  <p className="text-sm font-semibold text-gray-900 mb-2">{problem}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </Wrap>

          {/* ─── OLD SITE AUDIT ───────────────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>Old Site Audit</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
                Before we redesigned anything, we documented everything.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
                A heuristic audit of the existing site gave the team a shared, annotated record of where the experience was breaking down. It turned subjective frustration into something we could prioritize, reference in design reviews, and measure against in the final product.
              </p>

              <div className="space-y-8">
                {[
                  {
                    subheading: 'Homepage',
                    caption: 'Five findings. All fixable.',
                    image: '/projects/UHDACM/Homepage Audit.jpg',
                  },
                  {
                    subheading: 'Events Page',
                    caption: 'Plenty of room to grow.',
                    image: '/projects/UHDACM/Events Page Audit.jpg',
                    padTop: true,
                  },
                ].map(({ subheading, caption, placeholder, image, padTop }) => (
                  <div key={caption} className={padTop ? 'pt-10' : ''}>
                    {subheading && (
                      <p className="text-base font-semibold text-gray-900 text-center mb-3">{subheading}</p>
                    )}
                    {image
                      ? <img src={image} alt={caption} className="w-full rounded-2xl object-cover" />
                      : <Placeholder label={placeholder} aspect="aspect-[16/7]" />
                    }
                    <p className="text-xs text-gray-400 italic mt-3">{caption}</p>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── INFORMATION ARCHITECTURE ─────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>Information Architecture</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
              Navigation built around what students came to do.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
              The old navigation was organized around how the org thought about itself: officers, news, contact. Not what students came to the site to accomplish. I rebuilt the structure from the students' perspective outward.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Before — Flat, Unclear</p>
                <div className="space-y-2">
                  {['Home', 'About', 'News', 'Officers', 'Contact', '(Events scattered / inconsistent)'].map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      <p className="text-sm text-gray-500">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: BRAND }}>After — Purposeful & Clear</p>
                <div className="space-y-2">
                  {[
                    { item: 'About',   note: 'Who we are, what ACM offers, leadership' },
                    { item: 'Events',  note: 'Calendar + list view, filterable by date/name' },
                    { item: 'Media',   note: 'Gallery, highlights, documentation' },
                    { item: 'Contact', note: 'Get in touch, social links, chatbot entry point' },
                  ].map(({ item, note }) => (
                    <div key={item} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: BRAND }} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item}</p>
                        <p className="text-xs text-gray-400">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">The Principle</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Each label had to answer a question a student was already asking.{' '}
                <strong className="text-gray-900">"What is ACM?" goes to About. "What's happening?" goes to Events. "How do I reach someone?" goes to Contact.</strong>{' '}
                If a page couldn't be named with that kind of directness, it probably didn't need to exist.
              </p>
            </div>
          </Wrap>

        {false && (
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>Design Process</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
                Three rounds of fidelity, one standard for sign-off.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-12">
                Each fidelity stage had a specific question to answer before we moved forward. Low-fi validated structure. Mid-fi tested readability and hierarchy. High-fi was where the brand system had to prove itself. Nothing advanced until the current round held up in review.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-4">
                {[
                  { stage: '01 - Low-fi',  note: 'Layout structure + IA validation',          placeholder: 'Low-fi wireframe sketch' },
                  { stage: '02 - Mid-fi',  note: 'Typography, spacing, content placement',     placeholder: 'Mid-fi Events page wireframe' },
                  { stage: '03 - High-fi', note: 'Full brand system, dark UI, orange accents', placeholder: 'Hi-fi final Figma screen' },
                ].map(({ stage, note, placeholder }) => (
                  <div key={stage}>
                    <Placeholder label={placeholder} aspect="aspect-[3/4]" />
                    <p className="text-xs font-semibold text-gray-700 mt-3">{stage}</p>
                    <p className="text-xs text-gray-400">{note}</p>
                  </div>
                ))}
              </div>
              <Label>Events System: Key Feature</Label>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
                Students came to the site primarily to find events, and regularly left without finding them. The fix wasn't cosmetic. I designed a dedicated Events page with both a calendar and a list view, plus a Search By filter by date or event name. Two layouts for two different mental models.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Placeholder label="Events - List view hi-fi screen" aspect="aspect-[3/4]" />
                  <p className="text-xs text-gray-400 mt-2">List view</p>
                </div>
                <div>
                  <Placeholder label="Events - Calendar view hi-fi screen" aspect="aspect-[3/4]" />
                  <p className="text-xs text-gray-400 mt-2">Calendar view</p>
                </div>
              </div>
            </Wrap>
          </div>
        )}

          {/* ─── THE CHATBOT — dark brand callout ─────────────────────────── */}
          <div className="w-full py-24" style={{ backgroundColor: DARK }}>
            <div className="max-w-3xl mx-auto px-6 sm:px-10">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-6">New Feature</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-semibold text-white mb-6 leading-tight">
                The ACM Assistant.
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 max-w-xl">
                Scrolling is a passive way to learn about an organization. Most students won't make it far enough down the page to find the answer they're looking for, and the ones who are already uncertain about joining are the least likely to keep going. The ACM Assistant was designed to give those students an active path: ask a question, get an answer, decide.
              </p>

              <div className="grid sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-10">
                {[
                  {
                    cap: 'Active Club Discovery',
                    body: '"What does ACM do?" "How do I join?" "When\'s the next workshop?" These are questions students have but rarely find answers to on a club website. The chatbot handles all of them directly.',
                  },
                  {
                    cap: 'Always Available',
                    body: 'Officers can\'t be on call around the clock. After launch, the team reported a noticeable drop in repetitive DMs about events and how to join, questions the chatbot now handles directly.',
                  },
                  {
                    cap: 'Backend Collaboration',
                    body: 'I worked on the backend alongside the engineering team, designing the response structure and making sure the chatbot\'s answers stayed accurate to the org\'s real schedule and resources.',
                  },
                ].map(({ cap, body }) => (
                  <div key={cap} className="bg-white/5 px-6 py-6">
                    <p className="text-xs font-semibold text-white mb-2">{cap}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <img src="/projects/UHDACM/Chatbot.gif" alt="Chatbot" className="w-full rounded-2xl object-cover" />
            </div>
          </div>

          {/* ─── FINAL DESIGN ─────────────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>Final Design</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-12 leading-tight">
              The finished product.
            </h2>

            <div className="mb-16">
              <Label>Homepage Redesign</Label>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">
                The homepage needed to do two things at once: look unmistakably like ACM, and give a student who'd never heard of the org a reason to care. Bold display type, dark background, orange accents, geometric decorative elements, and an expanded lower section that makes the value of joining explicit.
              </p>
              <img src="/projects/UHDACM/HomePage.gif" alt="Homepage" className="w-full rounded-2xl object-cover" />
            </div>

            <div className="space-y-16">
              {[
                {
                  screen: 'Events Page — Calendar + List Views',
                  note: 'A student planning their week thinks in dates. A student exploring what ACM offers scans by topic. The Events page supports both: calendar for time-based planning, list for browsing by name, with a Search By filter that works in either mode.',
                  image: '/projects/UHDACM/Events Page 2.gif',
                },
                {
                  screen: '"Why Join UHD ACM?" — Value Proposition Section',
                  note: 'An interactive card carousel on the homepage that breaks down what ACM actually offers: Events, Opportunity, Mentorship, and Technical Skills. Designed to answer the question a prospective student is silently asking before they leave the page.',
                  image: '/projects/UHDACM/Why Join Us.jpg',
                },
                {
                  screen: 'About Page — Mission, History & Leadership',
                  note: 'The old About page was a blank slate: no story, no personality, no reason to care. The redesign introduced three net-new sections. A four-pillar mission breakdown (Growth, Community, Innovation, Support) communicates what ACM stands for at a glance. The "Our Journey" timeline documents the chapter from its founding in 2012 to today. And a redesigned Leadership section puts real faces and names to the org. Prospective members now land on a page that actually tells them who ACM is.',
                  image: '/projects/UHDACM/About Page.gif',
                },
                {
                  screen: 'ACM Assistant — Chatbot',
                  note: 'Accessible from anywhere on the site. Students don\'t need to know where to look or how to navigate. They can ask in plain language and get a useful answer. Designed to lower the barrier for the student who\'s curious but not yet committed.',
                  image: '/projects/UHDACM/Chatbot.gif',
                },
              ].map(({ screen, note, placeholder, image }) => (
                <div key={screen}>
                  <Label>{screen}</Label>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">{note}</p>
                  {image
                    ? <img src={image} alt={screen} className="w-full rounded-2xl object-cover" />
                    : <Placeholder label={placeholder} aspect="aspect-video" />
                  }
                </div>
              ))}
            </div>
          </Wrap>

          {/* ─── RESULTS / IMPACT ─────────────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>Results & Impact</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
                What changed for students.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
                These aren't metrics from a test environment. The redesign shipped to a real audience, with real expectations, and with features that didn't exist before.
              </p>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border border-gray-100 rounded-2xl overflow-hidden mb-10">
                {[
                  { stat: '3',        label: 'net-new features — Events, Why Join, Chatbot' },
                  { stat: '2',        label: 'Events view modes — calendar & list' },
                  { stat: '10',       label: 'person cross-functional team' },
                  { stat: '0 → 1',    label: 'chatbot designed & built from scratch' },
                ].map(({ stat, label }) => (
                  <div key={label} className="px-6 py-6 border-r border-b sm:border-b-0 border-gray-100 last:border-r-0">
                    <p className="text-4xl font-montserrat font-extrabold mb-1 tracking-tight" style={{ color: BRAND }}>{stat}</p>
                    <p className="text-xs text-gray-500 leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: 'A Site That Looks Like ACM',
                    body: 'Black background, bold orange accents, strong display type. A student who\'s seen ACM at a campus event will recognize the site immediately. It stopped looking like a template and started looking like the org.',
                  },
                  {
                    label: 'Interaction Where There Was None',
                    body: 'Hover states, scroll animations, transitions throughout. Small details that add up to a site that responds to you, rather than one that just sits there waiting to be read.',
                  },
                  {
                    label: 'Events Students Can Actually Find',
                    body: 'A dedicated Events page with calendar and list views, plus a Search By filter. The path from "I want to know what\'s happening" to "I know what\'s happening" is now a single page, not a scavenger hunt.',
                  },
                  {
                    label: 'A Lower Bar for Joining',
                    body: 'Students who wouldn\'t scroll far enough to find an answer can now ask for it directly. The homepage makes the case for joining. The chatbot closes the loop.',
                  },
                ].map(({ label, body }) => (
                  <div key={label} className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: BRAND }} />
                    <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── REFLECTION ───────────────────────────────────────────────── */}
          <Wrap className="py-20">
            <hr className="border-gray-100 mb-16" />
            <Label>Reflection</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-8 leading-tight">
              What I learned working with a real user base.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <p className="text-gray-600 leading-relaxed text-sm">
                Working on a live product changes how you make decisions. With a concept project, you can afford to have strong opinions that go untested. Here, students were already forming habits around the old site, most of them avoidant ones, and every design choice had to be justified against actual behavior. That accountability made me a more honest design reviewer. I stopped protecting decisions and started pressure-testing them.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                There are things I'd do differently. I'd push for usability testing at the wireframe stage. I got feedback on the prototype, but by then the structural decisions were already baked in. I'd also establish a component library earlier; the handoff would have been cleaner and the implementation faster. Working across design and engineering gave me an instinct for feasibility that's hard to get any other way. I'm a better collaborator for it.
              </p>
            </div>
          </Wrap>

          {/* ─── CTA ──────────────────────────────────────────────────────── */}
          <div className="w-full py-16 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">See it live</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-gray-900 mb-10">
              Visit the site.
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
                className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND }}>
                Visit uhdacm.org →
              </a>
              <Link to="/designs"
                className="border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors">
                ← Back to Designs
              </Link>
            </div>
          </div>

        </>
      )}

      <Footer />
    </div>
  )
}
