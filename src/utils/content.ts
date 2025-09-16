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
  highlights: string[]
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
  { id: 'home', name: 'Inicio', icon: 'home.svg' },
  { id: 'about', name: 'Sobre mí', icon: 'about.svg' },
  { id: 'experience', name: 'Experiencia', icon: 'experience.svg' },
  { id: 'my-work', name: 'Proyectos', icon: 'my-job.svg' },
  { id: 'contact', name: 'Contacto', icon: 'contact.svg' }
]

export const projects: Project[] = [
  {
    name: 'The Lyrics Bay',
    image: '/projects/thelyricsbay.webp',
    description: 'Plataforma social donde melómanos comparten y curan letras con un feed personalizado.',
    demo: 'https://thelyricsbay-front-production.up.railway.app',
    skills: ['Typescript', 'React', 'Zustand', 'NodeJS', 'Express', 'PostgreSQL'],
    highlights: [
      'Diseñé un onboarding gamificado y un editor colaborativo en tiempo real para que la comunidad mantenga el catálogo vivo.',
      'Implementé renderizado híbrido y almacenamiento en caché que redujo el tiempo de carga inicial un 35%.'
    ],
    job: true
  },
  {
    name: 'MedicShop',
    image: '/projects/medicshop.webp',
    description: 'Marketplace que simplifica la compra de equipamiento médico para clínicas y profesionales.',
    demo: 'https://medic.shop',
    skills: ['Typescript', 'React', 'Redux', 'NodeJS', 'Express', 'Mongo'],
    highlights: [
      'Construí una arquitectura headless que sincroniza inventario, precios y catálogos entre múltiples proveedores.',
      'Integré pasarelas de pago y facturación automática para operar en varios países sin fricciones.'
    ],
    job: true
  },
  {
    name: 'KaroKids eCommerce',
    image: '/projects/karokids.webp',
    description: 'eCommerce escalable para una marca colombiana de indumentaria infantil con foco en crecimiento y catálogo ágil.',
    demo: 'https://karokids-tienda.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    highlights: [
      'Desarrollé panel de administración con flujos de publicación y reportes de stock en tiempo real.',
      'Optimicé el tiempo hasta la compra con rutas estáticas y estrategias de caching en la API.'
    ],
    job: true
  },
  {
    name: 'Ares GamesDB',
    image: '/projects/aresgamesdb.webp',
    description: 'Base de datos de videojuegos con filtros, favoritos y fichas detalladas impulsada por la API de RAWG.',
    demo: 'https://ares-gamesdb.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    highlights: [
      'Implementé filtros combinados, paginación y búsquedas guardadas para explorar más de 3500 juegos.',
      'Diseñé un modo oscuro accesible y componentes reutilizables que mantienen consistencia visual.'
    ]
  },
  {
    name: 'Personal Portfolio',
    image: '/projects/portfolio.webp',
    description: 'Portfolio construido con Astro y Tailwind para mostrar pensamiento de producto y entrega técnica.',
    demo: 'https://thiagomartins.vercel.app',
    skills: ['Typescript', 'Astro', 'Tailwind'],
    highlights: [
      'Automatización de metadatos, optimización de imágenes y soporte multitema para potenciar el SEO.',
      'Integré contenido tipado para actualizar secciones desde un único módulo de datos.'
    ]
  },
  {
    name: 'GreenPortal',
    image: '/projects/rick&morty.webp',
    description: 'Proyecto fan que usa la API de Rick and Morty para explorar personajes con detalles de UI lúdicos.',
    demo: 'https://greenportal.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    highlights: [
      'Desarrollé un sistema de filtros instantáneos y paginación virtual para navegar más de 800 personajes.',
      'Animaciones microinteractivas y skeletons brindan feedback inmediato en conexiones lentas.'
    ]
  },
  {
    name: 'Ares Tac Toe',
    image: '/projects/arestactoe.webp',
    description: 'Versión moderna de Ta-Te-Ti con soporte multijugador y animaciones de celebración.',
    demo: 'https://arestactoe.vercel.app',
    skills: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Implementé un motor de partida en tiempo real que valida jugadas y empates.',
      'Diseñé animaciones y estados vacíos que mantienen el juego ágil y accesible.'
    ]
  },
  {
    name: 'NotesAres',
    image: '/projects/notesares.webp',
    description: 'App liviana de notas pensada para capturar ideas rápidamente desde cualquier dispositivo.',
    demo: 'https://notesares.netlify.app/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Sincronización offline-first con persistencia en LocalStorage para continuidad sin conexión.',
      'Uso de componentes reutilizables y accesibles para una experiencia consistente.'
    ]
  }
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & Experiencia de Usuario',
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
    title: 'Backend & Datos',
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
    role: 'CEO y Fullstack Developer',
    company: 'MaskedBytes',
    period: 'Abr 2024 – Presente',
    location: 'Remoto · Global',
    type: 'Estudio boutique · eCommerce y marketplaces',
    description:
      'Lidero un estudio enfocado en experiencias de eCommerce y marketplaces para startups y marcas en expansión.',
    highlights: [
      'Defino roadmaps medibles junto a fundadores y PMs para lanzar MVPs en ciclos cortos.',
      'Coordino diseño, desarrollo y analítica para que cada release aporte valor de negocio.'
    ]
  },
  {
    role: 'Teaching Assistant',
    company: 'SoyHenry',
    period: 'Dic 2023 – Jul 2024',
    location: 'Remoto · Argentina',
    type: 'Bootcamp · Educación',
    description:
      'Acompañé a nuevos desarrolladores en las primeras etapas de un bootcamp fullstack intensivo.',
    highlights: [
      'Guié sesiones de pair programming, code reviews y workshops semanales para más de 30 estudiantes.',
      'Generé tableros y documentación que facilitaron la colaboración asincrónica del cohort.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'KaroKids',
    period: 'Ene 2024 – Mar 2024',
    location: 'Remoto · Colombia',
    type: 'Proyecto cliente · eCommerce',
    description:
      'Desarrollé la plataforma de comercio para una marca de indumentaria infantil junto al equipo de diseño y marketing.',
    highlights: [
      'Integré checkout seguro, gestión de catálogo y automatización de campañas de email.',
      'Aseguré tiempos de carga por debajo de 1.5s en mobile mediante optimización de assets y CDN.'
    ]
  },
  {
    role: 'Fullstack Developer',
    company: 'Ares WebDev',
    period: 'Nov 2023 – Presente',
    location: 'Remoto · Argentina',
    type: 'Freelance · Aplicaciones web',
    description:
      'Creo soluciones personalizadas para emprendedores y pymes que buscan potenciar su presencia digital.',
    highlights: [
      'Entrego interfaces accesibles y código mantenible ajustado a cada negocio.',
      'Itero sobre herramientas y pipelines CI/CD para elevar la calidad en cada release.'
    ]
  }
]

export const certifications: Certification[] = [
  {
    name: 'Fullstack Developer (Bootcamp)',
    image: '/certificates/fullstack.png',
    organization: 'SoyHenry',
    date: '2024',
    url: 'http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=6be0797bae9833c0b4e4830f1dc5414ad92cc8fa16bb44fc53d7fa44148801b7',
    description: 'Bootcamp intensivo de +800 horas con foco en trabajo ágil y construcción de productos reales.'
  },
  {
    name: 'Teaching Assistant',
    image: '/certificates/teaching.png',
    organization: 'SoyHenry',
    date: '2024',
    url: 'http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=54954150353ff0775d6b507bde5e654f0d269059e822726d7bd385312e2cf493',
    description: 'Reconocimiento por mentoría, facilitación de equipos estudiantiles y acompañamiento en carreras tech.'
  },
  {
    name: 'State Management with Zustand',
    image: '/certificates/zustand.jpg',
    organization: 'DevTalles',
    date: '2024',
    url: 'https://cursos.devtalles.com/certificates/oh3zfhendi',
    description: 'Capacitación práctica para implementar manejo de estado escalable en aplicaciones React modernas.'
  }
]

export const contactOptions: ContactOption[] = [
  {
    label: 'Escríbeme por email',
    description: 'Cuéntame los objetivos de tu proyecto y te responderé en menos de 24 horas.',
    href: 'mailto:thiagodev.martins@gmail.com',
    icon: '/icons/contact.svg'
  },
  {
    label: 'Conectemos en LinkedIn',
    description: 'Hablemos sobre tu roadmap de producto o las necesidades de tu equipo.',
    href: 'https://www.linkedin.com/in/thiago-javier-martins/',
    icon: '/icons/linkedin.svg'
  },
  {
    label: 'Revisa mi GitHub',
    description: 'Explora código, experimentos y contribuciones open-source.',
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
