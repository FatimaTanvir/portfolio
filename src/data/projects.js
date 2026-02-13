export const projects = [
  {
    slug: 'cookaroo',
    title: 'Cookaroo',
    subtitle: 'Amazon x CodePath Design Challenge - Summer 2025',
    description: 'A mobile-first cooking companion designed to make meal planning and recipe discovery feel structured, calm, and accessible. The core idea was simple: cooking shouldn\'t feel overwhelming.',
    thumbnail: '/gifs/Cookaroo-Demo.gif',
    thumbnailType: 'gif',
    gifs: ['/gifs/Cookaroo-Demo.gif', '/TheDesigner.png'],
    gifSide: 'right',
    gifSize: '2xl',
    tools: [
      { name: 'Typescript', icon: 'https://cdn.simpleicons.org/typescript' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'Vitest', icon: 'https://cdn.simpleicons.org/vitest' },
    ],
    link: {
      href: 'https://www.figma.com/proto/SPfQNlcCetAxBvdMgHuqb5/Mockup---Cookaroo?node-id=152-200&t=jnSyfce8LuHwoBOB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=152%3A193',
      label: 'View Figma Prototype',
    },
    color: 'blue',
  },
  // Add your other projects here! Each one follows the same shape:
  // {
  //   slug: 'project-name',
  //   title: 'Project Name',
  //   subtitle: 'Context / Hackathon / Class',
  //   description: 'What this project does...',
  //   thumbnail: '/path/to/thumbnail.png',  // or a GIF, or a tool icon URL
  //   thumbnailType: 'image',               // 'image' | 'gif' | 'icon'
  //   gifs: ['/path/to/demo.gif'],           // for the detail page showcase
  //   gifSide: 'left',                       // 'left' | 'right'
  //   gifSize: 'xl',                         // 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  //   tools: [
  //     { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
  //   ],
  //   repo: 'https://github.com/FatimaTanvir/project-name',  // optional GitHub repo URL
  //   link: { href: 'https://github.com/...', label: 'View on GitHub' },
  //   color: 'green',
  // },
]
