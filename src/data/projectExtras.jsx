import React from 'react'

// Per-project custom JSX content, mapped by slug.
// This keeps the data file (projects.js) clean while supporting rich detail content.
export const projectExtras = {
  cookaroo: (
    <>
      <p className="text-sm text-gray-600 mb-3 font-medium">As the primary UI prototyper, I focused on:</p>
      <ul className="text-sm text-gray-600 list-disc list-inside mb-4 space-y-1">
        <li>Designing a clean, welcoming landing experience</li>
        <li>Creating both light and dark mode for visual comfort</li>
        <li>Building a streamlined sign-up flow</li>
        <li>Designing a personalized user profile interface</li>
        <li>Applying accessibility considerations in spacing, contrast, and hierarchy</li>
      </ul>
      <p className="text-sm text-gray-500 mb-4 italic">
        Every screen was built to reduce cognitive load and make the experience feel effortless.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        (View Figma Design File: <a href="https://www.figma.com/design/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-193&t=ATxnthw3rNWeDOgg-1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">here</a>)
      </p>
    </>
  ),

  // Add extras for other projects:
  // 'project-slug': (
  //   <>
  //     <p>Custom content here...</p>
  //   </>
  // ),
}
