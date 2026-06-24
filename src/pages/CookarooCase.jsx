import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BRAND = '#D2551E'
const PROTO = 'https://www.figma.com/proto/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-193&t=jnSyfce8LuHwoBOB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=152%3A193'
const FILE  = 'https://www.figma.com/design/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo'

// ── Set to true when the case study is ready to publish ──────────────────────
const SHOW_CASE_STUDY = false

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

// Placeholder block for images/wireframes not yet added
function Placeholder({ label, aspect = 'aspect-video' }) {
  return (
    <div className={`w-full ${aspect} rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 text-center px-6`}>
      <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
        <span className="text-gray-300 text-lg">+</span>
      </div>
      <p className="text-xs font-medium text-gray-400">{label}</p>
    </div>
  )
}

export default function CookarooCase() {
  useEffect(() => {
    document.title = 'Cookaroo Case Study | Fatima Tanvir'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Updating notice ── */}
      {!SHOW_CASE_STUDY && (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Case Study</p>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
            Updating case study.
          </h2>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-10">
            Full write-up coming soon. In the meantime, take a look at the prototype.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/designs" className="border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors">
              ← Back to Designs
            </Link>
            <a href={PROTO} target="_blank" rel="noopener noreferrer"
              className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND }}>
              View Figma Prototype
            </a>
          </div>
        </div>
      )}

      {/* ── Full case study ── */}
      {SHOW_CASE_STUDY && (
        <>

          {/* ─── HERO GIF ─────────────────────────────────────────────────── */}
          <Wrap className="pt-8 sm:pt-12 pb-6">
            <img src="/gifs/Cookaroo-Demo.gif" alt="Cookaroo app demo" className="w-full rounded-2xl" />
          </Wrap>

          {/* ─── HEADER ───────────────────────────────────────────────────── */}
          <Wrap className="py-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                  AmazonNext × CodePath Design Challenge: Summer 2025
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight text-gray-900">
                  Cookaroo
                </h1>
                <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-xl leading-relaxed">
                  Helping college students cook at home, starting from where they actually are.
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a href={PROTO} target="_blank" rel="noopener noreferrer"
                  className="text-white text-sm font-medium rounded-full px-6 py-2.5 transition-opacity hover:opacity-90 whitespace-nowrap text-center"
                  style={{ backgroundColor: BRAND }}>
                  View Prototype →
                </a>
                <a href={FILE} target="_blank" rel="noopener noreferrer"
                  className="text-gray-700 text-sm font-medium rounded-full px-6 py-2.5 border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap text-center">
                  View Figma File
                </a>
              </div>
            </div>

            {/* Metadata row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-gray-100 divide-x divide-gray-100">
              {[
                { label: 'Role',     value: 'UX Designer: Visual Design & Wireframes' },
                { label: 'Tools',    value: 'Figma' },
                { label: 'Team',     value: '5 Members' },
                { label: 'Duration', value: 'May – June, 2025' },
              ].map(({ label, value }) => (
                <div key={label} className="px-5 py-4 first:pl-0 last:pr-0">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                  <p className="text-sm text-gray-800 leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </Wrap>

          {/* ─── BACKGROUND ───────────────────────────────────────────────── */}
          <Wrap className="pb-0">
            <Label>Background</Label>
            <p className="text-gray-700 leading-relaxed text-base mb-5">
              This was a month-long design challenge run by <strong>AmazonNext × CodePath</strong>, and my first real introduction to UX. Our team of five was given a broad prompt and had to go from zero to a tested, presented concept in four weeks.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              I was the <strong>visual designer</strong> on the team. My teammates led research and strategy while I owned the design system, high-fidelity wireframes, and the interactive Figma prototype. I contributed to design decisions throughout and used this project to learn UX process by doing it under a real constraint.
            </p>
          </Wrap>

          {/* ─── CHALLENGE CALLOUT — full-bleed warm ──────────────────────── */}
          <div className="w-full py-20 mt-14" style={{ backgroundColor: '#FFF3EE' }}>
            <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-8">The Prompt</p>
              <p className="text-2xl sm:text-3xl lg:text-[2rem] font-montserrat font-semibold leading-snug text-gray-900 mb-14">
                "Design an app, website, or experience that improves{' '}
                <span style={{ color: BRAND }}>food access</span> and{' '}
                <span style={{ color: BRAND }}>inclusivity</span> for an underserved audience."
              </p>
              <div className="flex items-center justify-center gap-12">
                <div style={{ transform: 'rotate(-4deg)' }}>
                  <img src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png"
                    alt="Amazon" className="h-8 w-auto object-contain" />
                </div>
                <div style={{ transform: 'rotate(4deg)' }}>
                  <img src="https://ml4t.org/wp-content/uploads/2018/09/codepath-1x1_solid-transparent.png"
                    alt="CodePath" className="h-20 w-20 object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* ─── THE PROBLEM ──────────────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>The Problem</Label>

            {/* Problem statement pull quote */}
            <blockquote className="border-l-2 pl-6 mb-12" style={{ borderColor: BRAND }}>
              <p className="text-xl sm:text-2xl font-montserrat font-semibold text-gray-900 leading-snug">
                "Students report feeling <span style={{ color: BRAND }}>crushed</span> by the time, cost, and complexity involved in cooking, often defaulting to fast food despite the long-term health and financial tradeoffs."
              </p>
            </blockquote>

            <p className="text-gray-500 text-base leading-relaxed mb-16 max-w-2xl">
              The barrier isn't motivation. Students want to eat better. The barrier is that cooking feels like a research project on top of everything else they're already managing.
            </p>

            {/* Big stats */}
            <div className="grid grid-cols-2 gap-8 sm:gap-16 mb-16">
              {[
                { stat: '25%',    copy: 'of college students cook 7 healthy meals a week.',           source: 'Yugo, 2022' },
                { stat: '3 in 4', copy: "students didn't feel confident in their cooking abilities.", source: 'National Library of Medicine, 2018' },
              ].map(({ stat, copy, source }) => (
                <div key={stat} className="border-t border-gray-200 pt-8">
                  <p className="text-6xl sm:text-8xl font-display leading-none mb-4" style={{ color: BRAND }}>{stat}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-1">{copy}</p>
                  <p className="text-xs text-gray-400">{source}</p>
                </div>
              ))}
            </div>

            {/* Why it matters */}
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">
              Students who cook regularly are at lower risk of
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Obesity', 'High blood pressure', 'Diabetes', 'Depression'].map((item) => (
                <span key={item} className="text-xs rounded-full px-4 py-1.5 text-gray-600 border border-gray-300">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400">They also spend less on food over time.</p>
          </Wrap>

          {/* ─── USER RESEARCH ────────────────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>User Research</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
                24 interviews. One clear picture.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
                We conducted 24 first-hand in-depth interviews with students across multiple campuses to understand their cooking habits, frustrations, and what they actually wanted from a solution. We also used these conversations to test early concepts, including the idea of Chef Sue, and the response was consistently positive.
              </p>

              {/* Demographics grid */}
              <div className="grid sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-14">
                {[
                  { label: 'Demographics',   items: ['College Students', 'Aged 18–35'] },
                  { label: 'Psychographics', items: ['Financially Aware', 'Health-Conscious', 'Culturally Connected'] },
                  { label: 'Behavioral',     items: ['Time Starved', 'Burnt-Out'] },
                ].map(({ label, items }) => (
                  <div key={label} className="bg-white px-6 py-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{label}</p>
                    {items.map((item) => (
                      <p key={item} className="text-sm text-gray-800 leading-relaxed">{item}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Key insights */}
              <Label>Key Insights</Label>
              <div className="space-y-5">
                {[
                  'Meal prepping is a survival strategy.',
                  'Nutrition is a growing priority.',
                  'Most gave up on new recipes due to the time and effort it takes to research them.',
                ].map((insight) => (
                  <p key={insight}
                    className="text-lg sm:text-xl font-montserrat font-semibold text-gray-900 leading-snug pl-5 border-l-2"
                    style={{ borderColor: BRAND }}>
                    {insight}
                  </p>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── INSIGHT → FEATURE MAPPING ────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>From Research to Design</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
              Every feature started with something we heard.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12">
              We didn't guess what to build. Each core feature maps directly to a pattern we heard in the interviews.
            </p>

            <div className="space-y-px rounded-2xl overflow-hidden border border-gray-100">
              {[
                {
                  insight: '"Most gave up on new recipes because of research time."',
                  arrow: 'Smart Recipe Search by pantry ingredients',
                  why:   'Removes the research step entirely: suggest meals based on what\'s already in the fridge.',
                },
                {
                  insight: '"Meal prepping is a survival strategy."',
                  arrow: 'Cook Mode: step-by-step guided instructions',
                  why:   'Turns an overwhelming task into a manageable, structured process.',
                },
                {
                  insight: '"Nutrition is a growing priority."',
                  arrow: 'Chef Sue\'s dietary filter + smart ingredient swaps',
                  why:   'Recipes adapt to food sensitivities automatically. No manual hunting for safe alternatives.',
                },
              ].map(({ insight, arrow, why }, i) => (
                <div key={i} className="grid sm:grid-cols-[1fr_auto_1fr] gap-0 bg-white">
                  <div className="p-6 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Insight</p>
                    <p className="text-sm text-gray-700 italic leading-relaxed">{insight}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center px-4 text-gray-300">
                    →
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Design Decision</p>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{arrow}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </Wrap>

          {/* ─── MEET STEPHEN ─────────────────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>User Persona</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-10 leading-tight">
                Meet Stephen.
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Profile</p>
                    <div className="space-y-2">
                      {[
                        { k: 'Type',   v: 'Health-conscious college student' },
                        { k: 'Needs',  v: 'Safe, allergy-aware recipes' },
                        { k: 'Constraints', v: 'Allergic to peanuts · Lactose intolerant' },
                        { k: 'Motivation',  v: 'Wants to recreate a dish he loved at The Red Ladle' },
                      ].map(({ k, v }) => (
                        <div key={k} className="flex gap-3">
                          <span className="text-xs text-gray-400 w-24 flex-shrink-0 pt-0.5">{k}</span>
                          <span className="text-sm text-gray-800">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-2 pl-5" style={{ borderColor: BRAND }}>
                    <p className="text-base font-montserrat font-semibold text-gray-900 leading-snug italic">
                      "I want to cook healthier meals, but I never know if the ingredients are safe for me, or even where to start."
                    </p>
                  </blockquote>
                </div>

                {/* Stephen's journey */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-5">His Journey with Cookaroo</p>
                  <div className="space-y-4">
                    {[
                      { n: '01', step: 'Searches for the Red Ladle dish', detail: 'Cookaroo finds it by recipe name and suggests a home version.' },
                      { n: '02', step: 'Chef Sue flags allergy risks', detail: 'Peanut oil in the original recipe; Chef Sue immediately suggests a safe swap.' },
                      { n: '03', step: 'Enters Cook Mode', detail: 'Step-by-step guided instructions. No overwhelm, no tab-switching.' },
                      { n: '04', step: '"I\'ve never felt this confident cooking on my own."', detail: 'Stephen finishes the meal. Chef Sue made it easy.' },
                    ].map(({ n, step, detail }) => (
                      <div key={n} className="flex gap-4">
                        <span className="text-xs font-semibold text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: BRAND }}>{n}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{step}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Wrap>
          </div>

          {/* ─── HOW MIGHT WE — brand orange full-bleed ───────────────────── */}
          <div className="w-full py-24" style={{ backgroundColor: BRAND }}>
            <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-6">How Might We</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-semibold text-white leading-snug">
                Create a solution that suggests affordable, personalized meals using what students{' '}
                <span className="text-white/60 italic">already have?</span>
              </p>
            </div>
          </div>

          {/* ─── COMPETITIVE ANALYSIS ─────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>Competitive Analysis</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
              What's already out there.
            </h2>

            <div className="space-y-3 mb-10">
              {[
                { name: 'Yummly',    logo: '/projects/Cookaroo/Yummly Logo.png',    focus: 'Discovering, saving and planning recipes.',            strength: 'Pantry-based search, personalized recommendations.',       weakness: 'No real-time cooking guidance or allergy-aware swaps. Dietary filters exist but don\'t adapt mid-recipe.' },
                { name: 'Mealime',   logo: '/projects/Cookaroo/Mealime Logo.png',   focus: 'Simple meal planning.',                                strength: 'Clean UI, beginner-friendly.',                             weakness: 'No pantry-based suggestions or real-time help. Meal plans are static, not adaptive.' },
                { name: 'Instacart', logo: '/projects/Cookaroo/InstaCart Logo.png', focus: 'Online grocery delivery.',                             strength: 'Streamlined UI, personalized recommendations.',           weakness: 'Solves shopping, not cooking. No guidance once you\'re in the kitchen.' },
              ].map(({ name, logo, focus, strength, weakness }) => (
                <div key={name} className="flex items-start gap-5 border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-colors">
                  <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain rounded-xl flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{name}</p>
                    <p className="text-xs text-gray-500 mb-1"><span className="font-medium text-gray-700">Focus:</span> {focus}</p>
                    <p className="text-xs text-gray-500 mb-1"><span className="font-medium text-gray-700">Strength:</span> {strength}</p>
                    <p className="text-xs text-gray-500"><span className="font-medium text-gray-700">Gap:</span> {weakness}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Synthesis */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">The gap</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                None of these apps start from where a student actually is: standing in front of a half-empty fridge at 10pm, unsure what's safe to eat, with no time to research.{' '}
                <strong className="text-gray-900">Cookaroo is built for that exact moment.</strong>
              </p>
            </div>
          </Wrap>

          {/* ─── OUR SOLUTION / CHEF SUE ──────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>Our Solution</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
                Meet Cookaroo.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-3 max-w-2xl">
                We're a student team doing our first UX project. We didn't set out to solve every problem in the food space. We set out to solve one problem properly.
              </p>
              <p className="text-gray-700 font-medium leading-relaxed mb-12 max-w-2xl">
                Cookaroo does two things: helps you find something to cook with what you already have, and walks you through it with an AI that already knows your dietary needs.
              </p>

              {/* 2 core jobs */}
              <div className="grid sm:grid-cols-2 gap-4 mb-16">
                {[
                  {
                    num: '01',
                    title: 'Find what to cook',
                    body: 'Search by ingredients already in your fridge. Your dietary restrictions are set once during onboarding; every result is already filtered for you. No research, no guessing.',
                  },
                  {
                    num: '02',
                    title: 'Cook it with help',
                    body: 'Enter Cook Mode for step-by-step guidance. Mid-recipe, Chef Sue is one tap away: real-time answers, allergy flags, and ingredient swaps without leaving the cooking flow.',
                  },
                ].map(({ num, title, body }) => (
                  <div key={title} className="bg-white rounded-2xl p-7 border border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: BRAND }}>{num}</p>
                    <p className="text-base font-semibold text-gray-900 mb-2">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Chef Sue deep dive */}
              <Label>Chef Sue: What she actually does</Label>
              <div className="grid sm:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
                {[
                  {
                    cap: 'Interactive Cooking Help',
                    body: 'Real-time answers and visual explanations mid-recipe. Ask a question while your hands are covered in flour; Chef Sue answers.',
                  },
                  {
                    cap: 'Smart Nutrition Tweaks',
                    body: 'Recipes adapt automatically to your food sensitivities. Peanut oil? Swapped. Dairy? Gone. Suggestions are intelligent, not just filtered.',
                  },
                  {
                    cap: 'Cook Mode',
                    body: 'Step-by-step guided instructions designed to turn any first-time cook into a confident one. No skipping steps, no confusion.',
                  },
                ].map(({ cap, body }) => (
                  <div key={cap} className="bg-white px-6 py-6">
                    <p className="text-xs font-semibold text-gray-900 mb-2">{cap}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── DESIGN PROCESS ───────────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>Design Process</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-6 leading-tight">
              From sketch to prototype.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-12">
              I moved through three rounds of fidelity, using each stage to validate layout decisions before committing to high-fidelity components.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              {[
                { stage: '01: Low-fi',  note: 'Structure and flow, no styling',          placeholder: 'Paper wireframe sketch: upload photo here' },
                { stage: '02: Mid-fi',  note: 'Layout refined, typography introduced',    placeholder: 'Mid-fidelity wireframe: screenshot from Figma' },
                { stage: '03: High-fi', note: 'Full visual system applied',               placeholder: 'High-fidelity screen: export from Figma' },
              ].map(({ stage, note, placeholder }) => (
                <div key={stage}>
                  <Placeholder label={placeholder} aspect="aspect-[9/16]" />
                  <p className="text-xs font-semibold text-gray-700 mt-3">{stage}</p>
                  <p className="text-xs text-gray-400">{note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic">↑ Add your paper wireframe photos and Figma screenshots here</p>
          </Wrap>

          {/* ─── KEY SCREENS ──────────────────────────────────────────────── */}
          <div className="w-full bg-gray-50 py-20">
            <Wrap>
              <Label>UI Design</Label>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-12 leading-tight">
                Screens I designed.
              </h2>

              <div className="space-y-16">
                {[
                  {
                    screen: 'Onboarding & Preferences',
                    note: 'Designed to collect dietary restrictions and allergies upfront, so Chef Sue can be useful immediately. Kept it to a single preferences screen to reduce friction.',
                    placeholder: 'Onboarding screen screenshots: export from Figma',
                  },
                  {
                    screen: 'Home & Recipe Discovery',
                    note: 'Card-based layout for quick scanning. Recipes are surfaced based on pantry items and user preferences, not just trending content.',
                    placeholder: 'Home screen and recipe card screenshots: export from Figma',
                  },
                  {
                    screen: 'Chef Sue: Mid-Recipe',
                    note: 'The most critical screen. A "Discuss with Chef Sue" button appears mid-recipe, letting users ask questions, flag concerns, or request substitutions without leaving the cooking flow.',
                    placeholder: 'Chef Sue chat / discussion screen: export from Figma',
                  },
                  {
                    screen: 'Cook Mode',
                    note: 'Step-by-step instructions with large text, single action per screen. Designed to be usable with one hand, mid-cooking.',
                    placeholder: 'Cook Mode screen: export from Figma',
                  },
                  {
                    screen: 'Light & Dark Mode',
                    note: 'Both modes built from the ground up. Dark mode especially useful while cooking in low-light kitchens at night.',
                    src: '/projects/Cookaroo/Dark Mode.gif',
                  },
                ].map(({ screen, note, placeholder, src }) => (
                  <div key={screen}>
                    <Label>{screen}</Label>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">{note}</p>
                    {src ? (
                      <img src={src} alt={screen} className="w-full rounded-2xl" />
                    ) : (
                      <Placeholder label={placeholder} aspect="aspect-video" />
                    )}
                  </div>
                ))}
              </div>
            </Wrap>
          </div>

          {/* ─── VISION / NEXT STEPS ──────────────────────────────────────── */}
          <Wrap className="py-20">
            <Label>What's Out of Scope: For Now</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-4 leading-tight">
              We focused on one problem. Here's what we left for later.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-3 max-w-2xl">
              There are real problems adjacent to cooking that we deliberately didn't try to solve in this MVP. Knowing your scope is part of good design.
            </p>
            <p className="text-gray-500 leading-relaxed mb-12 max-w-2xl">
              The core question we kept coming back to was: <em>"Can we help a student go from 'I don't know what to cook' to 'I finished the meal,' safely, without stress?"</em> Everything outside that was deferred.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Future',
                  title: 'Location-based Ingredient Finder',
                  body: 'Helping students find where to buy missing ingredients nearby. Meaningful, but a separate problem from cooking itself; we didn\'t have the research to design it well.',
                },
                {
                  label: 'Future',
                  title: 'Store partnerships & student discounts',
                  body: 'Surface real-time offers from nearby groceries. Requires store data infrastructure we couldn\'t build in a month-long challenge.',
                },
                {
                  label: 'Future',
                  title: 'Shareable meal plans',
                  body: 'Budget-friendly weekly plans students can split with roommates. A natural next step once the core cooking flow is validated.',
                },
              ].map(({ label, title, body }) => (
                <div key={title} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{label}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Wrap>

          {/* ─── REFLECTION ───────────────────────────────────────────────── */}
          <Wrap className="pb-24">
            <hr className="border-gray-100 mb-16" />
            <Label>Reflection</Label>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-gray-900 mb-8 leading-tight">
              What I learned doing UX for the first time.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <p className="text-gray-600 leading-relaxed text-sm">
                This was my first real UX project, and the biggest thing I learned is that scope is a design decision. We had ideas for a dozen features. We shipped two that actually connect to something we heard in interviews. Cutting the rest wasn't failure. It was the point. You can't design something well if you're designing everything at once.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                If I did this again, I'd invest earlier in usability testing: even watching three people use the prototype would have surfaced things I couldn't see myself. I'd also push for a shared component library from day one. But mostly, I'd trust the focus earlier instead of second-guessing it.
              </p>
            </div>
          </Wrap>

          {/* ─── CTA ──────────────────────────────────────────────────────── */}
          <div className="w-full py-16 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">See it live</p>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold text-gray-900 mb-10">
              Ready to cook?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={PROTO} target="_blank" rel="noopener noreferrer"
                className="text-white text-sm font-medium rounded-full px-8 py-3 transition-opacity hover:opacity-90"
                style={{ backgroundColor: BRAND }}>
                View Figma Prototype
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
