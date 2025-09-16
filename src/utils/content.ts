export interface NavigationLink {
  id: string
  name: string
  icon: string
}

export interface Project {
  name: string
  image: string
  description: string
  demo: string
  skills: string[]
  job?: boolean
}

export interface SkillItem {
  slug: string
  label: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  type: string
  description: string
  highlights: string[]
  url?: string
}

export interface Certification {
  name: string
  image: string
  organization: string
  date: string
  url: string
  description?: string
}

export interface ContactOption {
  label: string
  description: string
  href: string
  icon: string
}

export const navigationLinks: NavigationLink[] = [
  { id: 'home', name: 'Home', icon: 'home.svg' },
  { id: 'about', name: 'About Me', icon: 'about.svg' },
  { id: 'experience', name: 'Experience', icon: 'experience.svg' },
  { id: 'my-work', name: 'My Work', icon: 'my-job.svg' },
  { id: 'contact', name: 'Contact', icon: 'contact.svg' }
]

export const projects: Project[] = [
  {
    name: 'The Lyrics Bay',
    image: '/projects/thelyricsbay.webp',
    description: 'Social platform where music lovers share and curate lyrics with a personalised feed.',
    demo: 'https://thelyricsbay-front-production.up.railway.app',
    skills: ['Typescript', 'React', 'Zustand', 'NodeJS', 'Express', 'PostgreSQL'],
    job: true
  },
  {
    name: 'MedicShop',
    image: '/projects/medicshop.webp',
    description: 'Marketplace that simplifies the purchase of medical equipment for clinics and professionals.',
    demo: 'https://medic.shop',
    skills: ['Typescript', 'React', 'Redux', 'NodeJS', 'Express', 'Mongo'],
    job: true
  },
  {
    name: 'KaroKids eCommerce',
    image: '/projects/karokids.webp',
    description: 'Scalable eCommerce for a Colombian clothing brand, designed for growth and easy catalogue management.',
    demo: 'https://karokids-tienda.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    job: true
  },
  {
    name: 'Ares GamesDB',
    image: '/projects/aresgamesdb.webp',
    description: 'Games database powered by the RAWG API with filters, favourites and deep dive detail pages.',
    demo: 'https://ares-gamesdb.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL']
  },
  {
    name: 'Personal Portfolio',
    image: '/projects/portfolio.webp',
    description: 'Portfolio built with Astro and Tailwind to showcase product thinking and technical delivery.',
    demo: 'https://thiagomartins.vercel.app',
    skills: ['Typescript', 'Astro', 'Tailwind']
  },
  {
    name: 'GreenPortal',
    image: '/projects/rick&morty.webp',
    description: 'Fan project using the Rick and Morty API to explore characters with playful UI details.',
    demo: 'https://greenportal.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL']
  },
  {
    name: 'Ares Tac Toe',
    image: '/projects/arestactoe.webp',
    description: 'A modern take on Tic Tac Toe with multiplayer support and celebratory animations.',
    demo: 'https://arestactoe.vercel.app',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    name: 'NotesAres',
    image: '/projects/notesares.webp',
    description: 'Lightweight notes app crafted for quick capture and organisation from any device.',
    demo: 'https://notesares.netlify.app/',
    skills: ['HTML', 'CSS', 'JavaScript']
  }
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & Product UI',
    items: [
      { slug: 'html', label: 'HTML' },
      { slug: 'css', label: 'CSS' },
      { slug: 'javascript', label: 'JavaScript' },
      { slug: 'typescript', label: 'TypeScript' },
      { slug: 'react', label: 'React' },
      { slug: 'next', label: 'Next.js' },
      { slug: 'astro', label: 'Astro' },
      { slug: 'tailwind', label: 'Tailwind CSS' },
      { slug: 'redux', label: 'Redux' },
      { slug: 'zustand', label: 'Zustand' }
    ]
  },
  {
    title: 'Backend & Data',
    items: [
      { slug: 'nodejs', label: 'Node.js' },
      { slug: 'express', label: 'Express' },
      { slug: 'sequelize', label: 'Sequelize' },
      { slug: 'postgresql', label: 'PostgreSQL' },
      { slug: 'mongo', label: 'MongoDB' }
    ]
  }
]

export const experiences: Experience[] = [
  {
    role: 'CEO & Fullstack Developer',
    company: 'MaskedBytes',
    period: 'April 2024 – Present',
    location: 'Remote',
    type: 'Freelance · Development',
    description:
      'Lead a boutique studio focused on eCommerce and marketplace experiences for startups and growing brands.',
    highlights: [
      'Plan, prototype and deliver full-stack solutions that balance scalability, usability and business goals.',
      'Coordinate designers and engineers to keep communication fluid and releases on schedule.'
    ]
  },
  {
    role: 'Teaching Assistant',
    company: 'SoyHenry',
    period: 'December 2023 – July 2024',
    location: 'Remote · Argentina',
    type: 'Bootcamp · Education',
    description:
      'Supported new developers through the first stages of an intensive fullstack bootcamp.',
    highlights: [
      'Facilitated study groups, code reviews and pair-programming sessions to reinforce best practices.',
      'Designed activities that improved onboarding, collaboration and confidence for +30 students.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'KaroKids',
    period: 'January 2024 – March 2024',
    location: 'Remote · Colombia',
    type: 'Client Project · eCommerce',
    description:
      'Built the end-to-end commerce platform for a children’s clothing brand with a cross-functional team.',
    highlights: [
      'Implemented secure checkout flows, catalogue management and marketing automations for launch.',
      'Collaborated with designers to deliver a responsive experience optimised for conversion.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'Ares WebDev',
    period: 'November 2023 – Present',
    location: 'Remote · Argentina',
    type: 'Freelance · Web Applications',
    description:
      'Craft personalised web solutions for entrepreneurs and small businesses to boost their digital presence.',
    highlights: [
      'Deliver UX-friendly interfaces and maintainable codebases tailored to each client’s needs.',
      'Continuously iterate on tooling and workflows to elevate quality with every project.'
    ]
  }
]

export const certifications: Certification[] = [
  {
    name: 'Fullstack Developer',
    image: '/certificates/fullstack.png',
    organization: 'SoyHenry',
    date: '2024',
    url: 'http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=6be0797bae9833c0b4e4830f1dc5414ad92cc8fa16bb44fc53d7fa44148801b7',
    description: 'Intensive +800hs bootcamp focused on real-world agile teamwork and product delivery.'
  },
  {
    name: 'Teaching Assistant',
    image: '/certificates/teaching.png',
    organization: 'SoyHenry',
    date: '2024',
    url: 'http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=54954150353ff0775d6b507bde5e654f0d269059e822726d7bd385312e2cf493',
    description: 'Recognised for coaching student teams, mentoring careers and unlocking collaborative skills.'
  },
  {
    name: 'State Management with Zustand',
    image: '/certificates/zustand.jpg',
    organization: 'DevTalles',
    date: '2024',
    url: 'https://cursos.devtalles.com/certificates/oh3zfhendi',
    description: 'Hands-on training to implement scalable state management in modern React applications.'
  }
]

export const contactOptions: ContactOption[] = [
  {
    label: 'Share project details by email',
    description: 'Tell me about your goals and I will reply within 24 hours.',
    href: 'mailto:thiagodev.martins@gmail.com',
    icon: '/icons/contact.svg'
  },
  {
    label: 'Connect with me on LinkedIn',
    description: 'Let’s chat about your product roadmap or team needs.',
    href: 'https://www.linkedin.com/in/thiago-javier-martins/',
    icon: '/icons/linkedin.svg'
  },
  {
    label: 'Explore my GitHub',
    description: 'Review source code, experiments and open-source contributions.',
    href: 'https://github.com/ThiagoJMartins',
    icon: '/icons/github.svg'
  }
]

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thiago-javier-martins/',
    icon: '/icons/linkedin.svg'
  },
  {
    label: 'Email',
    href: 'mailto:thiagodev.martins@gmail.com',
    icon: '/icons/contact.svg'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ThiagoJMartins',
    icon: '/icons/github.svg'
  }
] as const
