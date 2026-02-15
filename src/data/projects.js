export const projects = [
  {
    slug: 'webuild',
    title: 'WeBuild',
    subtitle: 'Senior Capstone Project',
    inProgress: true,
    description: 'A full-stack collaboration platform built as a senior capstone project. WeBuild connects teams with a secure backend powered by Express and PostgreSQL, JWT-based authentication, and a React frontend — designed to streamline how groups plan and build projects together.',
    thumbnail: '/projects/webuild/WeBuild Figma.png',
    thumbnailType: 'image',
    gifs: ['/projects/webuild/WeBuild Figma.png'],
    gifSide: 'right',
    gifSize: '2xl',
    tools: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'Nodejs', icon: 'https://cdn.simpleicons.org/node.js' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
      { name: 'JWT', icon: 'https://cdn.simpleicons.org/jwt' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    ],
    repo: 'https://github.com/FatimaTanvir/WeBuild',
    link: { href: 'https://github.com/FatimaTanvir/WeBuild', label: 'GitHub Repo' },
    // add another button?
    color: 'blue',
  },
  
  {
    slug: 'medlens',
    title: 'MedLens',
    subtitle: 'Best Use of ElevenLabs — CodeRed Hackathon 2025',
    description: 'An AI-powered platform that translates complex medical reports into plain-language explanations patients can actually understand. Upload a PDF or image of your lab results, and MedLens breaks down the jargon using Google Gemini - with multilingual support in 20+ languages and text-to-speech powered by ElevenLabs.',
    thumbnail: '/projects/medlens/1.png',
    thumbnailType: 'image',
    gifs: ['/projects/medlens/1.png', '/projects/medlens/2.png', '/projects/medlens/3.png', '/projects/medlens/4.png'],
    gifSize: '2xl',
    tools: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
      { name: 'Gemini', icon: '/public/gemini.webp' },
      { name: 'Fastapi', icon: 'https://cdn.simpleicons.org/fastapi' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
      { name: 'Elevenlabs', icon: 'https://cdn.simpleicons.org/elevenlabs' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss' },
      { name: 'React Router', icon: 'https://cdn.simpleicons.org/reactrouter' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    ],
    repo: 'https://github.com/FatimaTanvir/codered',
    link: { href: 'https://devpost.com/software/medlens-82eq9n', label: 'Checkout Devpost ->' },
    // add another button?
    color: 'blue',
  },
  
  {
    slug: 'stride',
    title: 'Stride',
    subtitle: 'CodePath Web Dev Final Project',
    inProgress: true,
    description: 'A social platform for runners to share experiences, connect with fellow athletes, and discover new routes. Features include post creation with image uploads, an upvote system, commenting, search and category filtering, and a masonry grid layout — all backed by Supabase with real-time updates.',
    thumbnail: '/projects/stride/1.png',
    thumbnailType: 'image',
    gifs: ['/projects/stride/1.png'],
    gifSide: 'right',
    gifSize: '2xl',
    tools: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'Css', icon: 'https://cdn.simpleicons.org/css' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
      { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
      { name: 'Postgress', icon: 'https://cdn.simpleicons.org/postgresql' },
    ],
    repo: 'https://github.com/FatimaTanvir/Stride/tree/main/Stride',
    link: { href: 'https://github.com/FatimaTanvir/Stride/tree/main/Stride', label: 'GitHub Repo' },
    // add another button?
    color: 'blue',
  },

  {
    slug: 'journal-pages',
    title: 'Journal Pages',
    subtitle: 'Personal Project',
    description: 'A productivity app that combines daily journaling, task management, and a customizable Pomodoro timer in one clean interface. Built with Next.js and TypeScript on a Convex backend, with Clerk authentication and dark mode support — designed to help students stay focused and organized.',
    thumbnail: '/projects/journalpages/1.png',
    thumbnailType: 'image',
    gifs: ['/projects/journalpages/1.png'],
    gifSide: 'right',
    gifSize: '2xl',
    tools: [
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs' },
      { name: 'Clerk', icon: 'https://cdn.simpleicons.org/clerk' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    ],
    repo: 'https://github.com/FatimaTanvir/journal_pages',
    link: { href: 'https://github.com/FatimaTanvir/Journal_Pages', label: 'GitHub Repo' },
    // add another button?
    color: 'blue',
  },
  
  {
    slug: 'widdlemethis',
    title: 'WiddleMeThis',
    subtitle: 'Can you guess the hidden message?',
    description: 'An interactive emoji flashcard game that challenges players to decode hidden meanings behind emoji combinations. Flip the card to reveal the answer, then navigate through the deck — a fun exercise in React state management, CSS animations, and playful UI design.',
    thumbnail: '/projects/widdlemethis/1.png',
    thumbnailType: 'image',
    gifs: [ '/projects/widdlemethis/1.png' ],
    gifSide: 'right',
    gifSize: '2xl',
    tools: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'Css', icon: 'https://cdn.simpleicons.org/css' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite' },
    ],
    repo: 'https://github.com/FatimaTanvir/widdlemethis',
    link: { href: 'https://drive.google.com/file/d/19U3-V3p52L4z8gwSn2yx6nzahxH1Xy3g/view?usp=sharing', label: 'Play?' },
    // add another button?
    color: 'blue',
  },
  
  {
    slug: 'ur5-reseach',
    title: 'Precision Tool Handling with UR5',
    subtitle: 'DOED Research - Summer 2024',
    description: 'Trained a UR5 robotic arm to detect and classify 11 surgical instruments using YOLOv5 object detection in a ROS + Gazebo simulation environment, achieving 95.8% mAP accuracy.',
    thumbnail: '/projects/ur5/UR5 on table.png',
    thumbnailType: 'image',
    gifs: ['/projects/ur5/demo.gif','/projects/ur5/tools.gif','/projects/ur5/val_batch0_labels.jpg', '/projects/ur5/val_batch0_pred.jpg'],
    gifSide: 'right',
    gifSize: '2xl',
    tools: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
      { name: 'ROS Noetic', icon: 'https://cdn.simpleicons.org/ros' },
      { name: 'Gazebo', icon: '/public/gazebo.png' },
      { name: 'Ubuntu', icon: 'https://cdn.simpleicons.org/ubuntu' },
      { name: '', icon: '/public/yolov5.png' },
      { name: 'Tensorflow', icon: 'https://cdn.simpleicons.org/tensorflow' },
      { name: 'Roboflow', icon: 'https://cdn.simpleicons.org/roboflow' },
    ],
    repo: 'https://github.com/FatimaTanvir/UR5_SurgicalTools',
    link: { href: 'https://drive.google.com/file/d/19U3-V3p52L4z8gwSn2yx6nzahxH1Xy3g/view?usp=sharing', label: 'Check out my work ->' },
    // add another button?
    color: 'blue',
  },
  
  {
    slug: 'qr-code-generator',
    title: 'QR Code Generator',
    subtitle: 'A personal project built for fun and learning.',
    description: 'A web app that generates QR codes from user input. Built with JavaScript, HTML, and CSS, it allows users to create custom QR codes for URLs, text, or other data. The project was a great way to practice DOM manipulation, canvas drawing, and responsive design.',
    thumbnail: '/projects/qr-code-generator/1.png',
    thumbnailType: 'image',
    gifs: ['/projects/qr-code-generator/demo.gif', '/projects/qr-code-generator/1.png', '/projects/qr-code-generator/2.png'],
    gifSide: 'left',
    gifSize: '2xl',
    tools: [
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5' },
      { name: 'CSS', icon: 'https://cdn.simpleicons.org/css' },
    ],
    repo: 'https://github.com/FatimaTanvir/QR-Code-Generator',
    link: { href: 'https://github.com/FatimaTanvir/QR-Code-Generator', label: 'Try it out!' },
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
