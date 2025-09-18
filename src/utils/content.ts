export type Language = 'es' | 'en'

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

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface SiteContent {
  meta: {
    title: string
    description: string
    keywords: string
    ogLocale: string
    canonical: string
  }
  layout: {
    skipToContent: string
  }
  header: {
    tagline: string
    theme: {
      dark: string
      light: string
    }
    language: {
      toggleLabel: string
      options: {
        es: string
        en: string
      }
    }
  }
  navigation: {
    ariaLabel: string
    mobileNavLabel: string
    openMenuLabel: string
    closeMenuLabel: string
    openMenuSrLabel: string
    closeMenuSrLabel: string
    mobileTitle: string
    prompt: string
    links: NavigationLink[]
  }
  hero: {
    badge: string
    title: string
    description: string
    sellingPoints: string[]
    primaryCta: {
      label: string
      href: string
      icon: string
    }
    secondaryCta: {
      label: string
      href: string
      icon: string
      target?: string
      rel?: string
    }
    support: {
      badge: string
      commitments: string[]
      description: string
    }
    socialLabel: string
    profile: {
      alt: string
      badge: string
      description: string
    }
    stats: {
      value: string
      label: string
    }[]
    availability: {
      label: string
      description: string
    }
  }
  about: {
    title: string
    paragraphs: string[]
    highlights: string[]
    focusAreas: {
      title: string
      description: string
    }[]
    workflowTitle: string
    workflowDescription: string
    workflowSteps: {
      step: string
      title: string
      description: string
    }[]
  }
  experience: {
    title: string
    description: string
    roles: Experience[]
    callout: {
      title: string
      description: string
      ctaLabel: string
      ctaHref: string
      ctaIcon: string
      target?: string
      rel?: string
    }
  }
  myWork: {
    title: string
    description: string
    projectsTitle: string
    projectsDescription: string
    projectBadge: {
      client: string
      personal: string
    }
    projectCta: string
    projects: Project[]
    skillsTitle: string
    skillsDescription: string
    skills: SkillGroup[]
    servicesTitle: string
    servicesDescription: string
    serviceKits: {
      title: string
      description: string
      deliverables: string[]
    }[]
    certificationsTitle: string
    certificationsDescription: string
    certifications: Certification[]
  }
  contact: {
    title: string
    paragraphs: string[]
    bullets: string[]
    options: ContactOption[]
    closing: string
  }
  footer: {
    quote: string
    builtWith: string
  }
  socialLinks: SocialLink[]
}

type Localized<T> = Record<Language, T>

const resumeHref = '/Resume.pdf'

const socialLinkEntries = [
  {
    href: 'https://www.linkedin.com/in/thiago-javier-martins/',
    icon: '/icons/linkedin.svg',
    label: {
      es: 'LinkedIn',
      en: 'LinkedIn'
    }
  },
  {
    href: 'mailto:thiagodev.martins@gmail.com',
    icon: '/icons/contact.svg',
    label: {
      es: 'Correo electrónico',
      en: 'Email'
    }
  },
  {
    href: 'https://github.com/ThiagoJMartins',
    icon: '/icons/github.svg',
    label: {
      es: 'GitHub',
      en: 'GitHub'
    }
  }
] satisfies {
  href: string
  icon: string
  label: Localized<string>
}[]

const navigationLinkEntries = [
  {
    id: 'home',
    icon: 'home.svg',
    name: {
      es: 'Inicio',
      en: 'Home'
    }
  },
  {
    id: 'about',
    icon: 'about.svg',
    name: {
      es: 'Sobre mí',
      en: 'About'
    }
  },
  {
    id: 'experience',
    icon: 'experience.svg',
    name: {
      es: 'Experiencia',
      en: 'Experience'
    }
  },
  {
    id: 'my-work',
    icon: 'my-job.svg',
    name: {
      es: 'Proyectos',
      en: 'Projects'
    }
  },
  {
    id: 'contact',
    icon: 'contact.svg',
    name: {
      es: 'Contacto',
      en: 'Contact'
    }
  }
] satisfies {
  id: string
  icon: string
  name: Localized<string>
}[]

const projectEntries = [
  {
    name: 'The Lyrics Bay',
    image: '/projects/thelyricsbay.webp',
    demo: 'https://thelyricsbay-front-production.up.railway.app',
    skills: ['Typescript', 'React', 'Zustand', 'NodeJS', 'Express', 'PostgreSQL'],
    job: true,
    description: {
      es: 'Plataforma social donde melómanos comparten y curan letras con un feed personalizado.',
      en: 'Social platform where music lovers share and curate lyrics with a personalized feed.'
    },
    highlights: {
      es: [
        'Diseñé un onboarding gamificado y un editor colaborativo en tiempo real para que la comunidad mantenga el catálogo vivo.',
        'Implementé renderizado híbrido y almacenamiento en caché que redujo el tiempo de carga inicial un 35%.'
      ],
      en: [
        'Designed a gamified onboarding and real-time collaborative editor so the community keeps the catalog alive.',
        'Implemented hybrid rendering and caching that cut initial load time by 35%.'
      ]
    }
  },
  {
    name: 'MedicShop',
    image: '/projects/medicshop.webp',
    demo: 'https://medic.shop',
    skills: ['Typescript', 'React', 'Redux', 'NodeJS', 'Express', 'Mongo'],
    job: true,
    description: {
      es: 'Marketplace que simplifica la compra de equipamiento médico para clínicas y profesionales.',
      en: 'Marketplace that streamlines purchasing medical equipment for clinics and practitioners.'
    },
    highlights: {
      es: [
        'Construí una arquitectura headless que sincroniza inventario, precios y catálogos entre múltiples proveedores.',
        'Integré pasarelas de pago y facturación automática para operar en varios países sin fricciones.'
      ],
      en: [
        'Built a headless architecture that syncs inventory, pricing, and catalogs across multiple vendors.',
        'Integrated payment gateways and automated invoicing to operate across countries without friction.'
      ]
    }
  },
  {
    name: 'KaroKids eCommerce',
    image: '/projects/karokids.webp',
    demo: 'https://karokids-tienda.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    job: true,
    description: {
      es: 'eCommerce escalable para una marca colombiana de indumentaria infantil con foco en crecimiento y catálogo ágil.',
      en: 'Scalable eCommerce for a Colombian kidswear brand focused on growth and agile catalog updates.'
    },
    highlights: {
      es: [
        'Desarrollé panel de administración con flujos de publicación y reportes de stock en tiempo real.',
        'Optimicé el tiempo hasta la compra con rutas estáticas y estrategias de caching en la API.'
      ],
      en: [
        'Developed an admin panel with publishing workflows and real-time stock reports.',
        'Optimized time-to-purchase with static routes and API caching strategies.'
      ]
    }
  },
  {
    name: 'Ares GamesDB',
    image: '/projects/aresgamesdb.webp',
    demo: 'https://ares-gamesdb.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    description: {
      es: 'Base de datos de videojuegos con filtros, favoritos y fichas detalladas impulsada por la API de RAWG.',
      en: 'Video game database with filters, favorites, and detailed profiles powered by the RAWG API.'
    },
    highlights: {
      es: [
        'Implementé filtros combinados, paginación y búsquedas guardadas para explorar más de 3500 juegos.',
        'Diseñé un modo oscuro accesible y componentes reutilizables que mantienen consistencia visual.'
      ],
      en: [
        'Implemented combined filters, pagination, and saved searches to explore over 3,500 games.',
        'Designed an accessible dark mode and reusable components that preserve visual consistency.'
      ]
    }
  },
  {
    name: 'Personal Portfolio',
    image: '/projects/portfolio.webp',
    demo: 'https://thiagomartins.vercel.app',
    skills: ['Typescript', 'Astro', 'Tailwind'],
    description: {
      es: 'Portfolio construido con Astro y Tailwind para mostrar pensamiento de producto y entrega técnica.',
      en: 'Portfolio built with Astro and Tailwind to showcase product thinking and technical delivery.'
    },
    highlights: {
      es: [
        'Automatización de metadatos, optimización de imágenes y soporte multitema para potenciar el SEO.',
        'Integré contenido tipado para actualizar secciones desde un único módulo de datos.'
      ],
      en: [
        'Automated metadata, image optimization, and multi-theme support to boost SEO.',
        'Integrated typed content so sections update from a single data module.'
      ]
    }
  },
  {
    name: 'GreenPortal',
    image: '/projects/rick&morty.webp',
    demo: 'https://greenportal.vercel.app',
    skills: ['Javascript', 'React', 'Redux', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
    description: {
      es: 'Proyecto fan que usa la API de Rick and Morty para explorar personajes con detalles de UI lúdicos.',
      en: 'Fan project using the Rick and Morty API to explore characters with playful UI touches.'
    },
    highlights: {
      es: [
        'Desarrollé un sistema de filtros instantáneos y paginación virtual para navegar más de 800 personajes.',
        'Animaciones microinteractivas y skeletons brindan feedback inmediato en conexiones lentas.'
      ],
      en: [
        'Developed instant filters and virtual pagination to browse over 800 characters.',
        'Micro-interactions and skeletons deliver instant feedback on slow connections.'
      ]
    }
  },
  {
    name: 'Ares Tac Toe',
    image: '/projects/arestactoe.webp',
    demo: 'https://arestactoe.vercel.app',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: {
      es: 'Versión moderna de Ta-Te-Ti con soporte multijugador y animaciones de celebración.',
      en: 'Modern Tic-Tac-Toe with multiplayer support and celebratory animations.'
    },
    highlights: {
      es: [
        'Implementé un motor de partida en tiempo real que valida jugadas y empates.',
        'Diseñé animaciones y estados vacíos que mantienen el juego ágil y accesible.'
      ],
      en: [
        'Implemented a real-time match engine that validates moves and ties.',
        'Designed animations and empty states that keep gameplay snappy and accessible.'
      ]
    }
  },
  {
    name: 'NotesAres',
    image: '/projects/notesares.webp',
    demo: 'https://notesares.netlify.app/',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: {
      es: 'App liviana de notas pensada para capturar ideas rápidamente desde cualquier dispositivo.',
      en: 'Lightweight notes app built to capture ideas quickly from any device.'
    },
    highlights: {
      es: [
        'Sincronización offline-first con persistencia en LocalStorage para continuidad sin conexión.',
        'Uso de componentes reutilizables y accesibles para una experiencia consistente.'
      ],
      en: [
        'Offline-first sync with LocalStorage persistence keeps notes available without connection.',
        'Reusable, accessible components create a consistent experience.'
      ]
    }
  }
] satisfies {
  name: string
  image: string
  demo: string
  skills: string[]
  job?: boolean
  description: Localized<string>
  highlights: Localized<string[]>
}[]

const skillGroupEntries = [
  {
    title: {
      es: 'Frontend & Experiencia de Usuario',
      en: 'Frontend & User Experience'
    },
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
    title: {
      es: 'Backend & Datos',
      en: 'Backend & Data'
    },
    items: [
      { slug: 'nodejs', label: 'Node.js' },
      { slug: 'express', label: 'Express' },
      { slug: 'sequelize', label: 'Sequelize' },
      { slug: 'postgresql', label: 'PostgreSQL' },
      { slug: 'mongo', label: 'MongoDB' }
    ]
  }
] satisfies {
  title: Localized<string>
  items: SkillItem[]
}[]

const experienceEntries = [
  {
    role: {
      es: 'CEO y Fullstack Developer',
      en: 'CEO & Fullstack Developer'
    },
    company: 'MaskedBytes',
    period: {
      es: 'Abr 2024 – Presente',
      en: 'Apr 2024 – Present'
    },
    location: {
      es: 'Remoto · Global',
      en: 'Remote · Global'
    },
    type: {
      es: 'Estudio boutique · eCommerce y marketplaces',
      en: 'Boutique studio · eCommerce & marketplaces'
    },
    description: {
      es: 'Lidero un estudio enfocado en experiencias de eCommerce y marketplaces para startups y marcas en expansión.',
      en: 'I lead a studio focused on eCommerce and marketplace experiences for startups and scaling brands.'
    },
    highlights: {
      es: [
        'Defino roadmaps medibles junto a fundadores y PMs para lanzar MVPs en ciclos cortos.',
        'Coordino diseño, desarrollo y analítica para que cada release aporte valor de negocio.'
      ],
      en: [
        'I define measurable roadmaps with founders and PMs to launch MVPs in short cycles.',
        'I coordinate design, development, and analytics so every release drives business value.'
      ]
    }
  },
  {
    role: {
      es: 'Teaching Assistant',
      en: 'Teaching Assistant'
    },
    company: 'SoyHenry',
    period: {
      es: 'Dic 2023 – Jul 2024',
      en: 'Dec 2023 – Jul 2024'
    },
    location: {
      es: 'Remoto · Argentina',
      en: 'Remote · Argentina'
    },
    type: {
      es: 'Bootcamp · Educación',
      en: 'Bootcamp · Education'
    },
    description: {
      es: 'Acompañé a nuevos desarrolladores en las primeras etapas de un bootcamp fullstack intensivo.',
      en: 'I supported new developers through the first stages of an intensive fullstack bootcamp.'
    },
    highlights: {
      es: [
        'Guié sesiones de pair programming, code reviews y workshops semanales para más de 30 estudiantes.',
        'Generé tableros y documentación que facilitaron la colaboración asincrónica del cohort.'
      ],
      en: [
        'Led pair programming sessions, code reviews, and weekly workshops for 30+ students.',
        'Produced boards and documentation that made cohort-wide async collaboration easier.'
      ]
    }
  },
  {
    role: {
      es: 'Fullstack Developer',
      en: 'Fullstack Developer'
    },
    company: 'KaroKids',
    period: {
      es: 'Ene 2024 – Mar 2024',
      en: 'Jan 2024 – Mar 2024'
    },
    location: {
      es: 'Remoto · Colombia',
      en: 'Remote · Colombia'
    },
    type: {
      es: 'Proyecto cliente · eCommerce',
      en: 'Client project · eCommerce'
    },
    description: {
      es: 'Desarrollé la plataforma de comercio para una marca de indumentaria infantil junto al equipo de diseño y marketing.',
      en: 'I developed the commerce platform for a kidswear brand alongside the design and marketing teams.'
    },
    highlights: {
      es: [
        'Integré checkout seguro, gestión de catálogo y automatización de campañas de email.',
        'Aseguré tiempos de carga por debajo de 1.5s en mobile mediante optimización de assets y CDN.'
      ],
      en: [
        'Integrated secure checkout, catalog management, and automated email campaigns.',
        'Kept mobile load times under 1.5s through asset optimization and CDN strategy.'
      ]
    }
  },
  {
    role: {
      es: 'Fullstack Developer',
      en: 'Fullstack Developer'
    },
    company: 'Ares WebDev',
    period: {
      es: 'Nov 2023 – Presente',
      en: 'Nov 2023 – Present'
    },
    location: {
      es: 'Remoto · Argentina',
      en: 'Remote · Argentina'
    },
    type: {
      es: 'Freelance · Aplicaciones web',
      en: 'Freelance · Web applications'
    },
    description: {
      es: 'Creo soluciones personalizadas para emprendedores y pymes que buscan potenciar su presencia digital.',
      en: 'I craft custom solutions for entrepreneurs and small businesses that want to strengthen their digital presence.'
    },
    highlights: {
      es: [
        'Entrego interfaces accesibles y código mantenible ajustado a cada negocio.',
        'Itero sobre herramientas y pipelines CI/CD para elevar la calidad en cada release.'
      ],
      en: [
        'Deliver accessible interfaces and maintainable code tailored to each business.',
        'Iterate on tooling and CI/CD pipelines to raise quality with every release.'
      ]
    }
  }
] satisfies {
  role: Localized<string>
  company: string
  period: Localized<string>
  location: Localized<string>
  type: Localized<string>
  description: Localized<string>
  highlights: Localized<string[]>
}[]

const certificationEntries = [
  {
    name: 'Fullstack Developer (Bootcamp)',
    image: '/certificates/fullstack.png',
    organization: 'SoyHenry',
    date: '2024',
    url: 'http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=6be0797bae9833c0b4e4830f1dc5414ad92cc8fa16bb44fc53d7fa44148801b7',
    description: {
      es: 'Bootcamp intensivo de +800 horas con foco en trabajo ágil y construcción de productos reales.',
      en: 'Intensive 800+ hour bootcamp focused on agile teamwork and building real products.'
    }
  },
  {
    name: 'Teaching Assistant',
    image: '/certificates/teaching.png',
    organization: 'SoyHenry',
    date: '2024',
    url: 'http://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=54954150353ff0775d6b507bde5e654f0d269059e822726d7bd385312e2cf493',
    description: {
      es: 'Reconocimiento por mentoría, facilitación de equipos estudiantiles y acompañamiento en carreras tech.',
      en: 'Recognition for mentoring, facilitating student teams, and supporting tech careers.'
    }
  },
  {
    name: 'State Management with Zustand',
    image: '/certificates/zustand.jpg',
    organization: 'DevTalles',
    date: '2024',
    url: 'https://cursos.devtalles.com/certificates/oh3zfhendi',
    description: {
      es: 'Capacitación práctica para implementar manejo de estado escalable en aplicaciones React modernas.',
      en: 'Hands-on training to implement scalable state management in modern React apps.'
    }
  }
] satisfies {
  name: string
  image: string
  organization: string
  date: string
  url: string
  description: Localized<string>
}[]

const contactOptionEntries = [
  {
    icon: '/icons/contact.svg',
    href: 'mailto:thiagodev.martins@gmail.com',
    label: {
      es: 'Escríbeme por email',
      en: 'Email me'
    },
    description: {
      es: 'Cuéntame los objetivos de tu proyecto y te responderé en menos de 24 horas.',
      en: "Tell me about your project goals and I'll reply in under 24 hours."
    }
  },
  {
    icon: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/thiago-javier-martins/',
    label: {
      es: 'Conectemos en LinkedIn',
      en: 'Connect on LinkedIn'
    },
    description: {
      es: 'Hablemos sobre tu roadmap de producto o las necesidades de tu equipo.',
      en: "Let's talk about your product roadmap or team needs."
    }
  },
  {
    icon: '/icons/github.svg',
    href: 'https://github.com/ThiagoJMartins',
    label: {
      es: 'Revisa mi GitHub',
      en: 'Browse my GitHub'
    },
    description: {
      es: 'Explora código, experimentos y contribuciones open-source.',
      en: 'Explore code, experiments, and open-source contributions.'
    }
  }
] satisfies {
  icon: string
  href: string
  label: Localized<string>
  description: Localized<string>
}[]

const heroSellingPoints: Localized<string[]> = {
  es: [
    'Integro discovery, diseño técnico y entrega continua para lanzar productos con menos fricción.',
    'Transformo requisitos complejos en experiencias claras que priorizan conversión y accesibilidad.',
    'Trabajo con startups y equipos remotos de LATAM y Europa, adaptándome a sus ritmos y herramientas.'
  ],
  en: [
    'I combine discovery, technical design, and continuous delivery to launch products with less friction.',
    'I turn complex requirements into clear experiences that prioritize conversion and accessibility.',
    'I work with startups and remote teams across LATAM and Europe, adapting to their pace and tooling.'
  ]
}

const heroCommitments: Localized<string[]> = {
  es: ['Discovery & MVPs', 'Escalamiento de eCommerce', 'Sistemas internos y dashboards'],
  en: ['Discovery & MVPs', 'eCommerce scaling', 'Internal systems & dashboards']
}

const heroStatsEntries = [
  {
    value: '3+',
    label: {
      es: 'años creando productos digitales',
      en: 'years shipping digital products'
    }
  },
  {
    value: '12',
    label: {
      es: 'proyectos lanzados junto a clientes',
      en: 'projects launched with clients'
    }
  },
  {
    value: '800h',
    label: {
      es: 'de mentoría y formación tech',
      en: 'hours of mentoring and tech training'
    }
  }
] satisfies {
  value: string
  label: Localized<string>
}[]

const aboutParagraphs: Localized<string[]> = {
  es: [
    'Soy un desarrollador fullstack orientado a producto. Disfruto trabajar codo a codo con fundadores, PMs y diseñadores para convertir ideas ambiciosas en experiencias digitales reales. Mi enfoque combina investigación, storytelling y tecnología para crear soluciones que las personas disfrutan usar.',
    'Aporto claridad cuando el proyecto recién comienza y disciplina cuando hay que escalar. Documentación cuidada, comunicación transparente y entregas iterativas son mis herramientas para que cada etapa avance con confianza.'
  ],
  en: [
    "I'm a product-driven fullstack developer. I enjoy working side by side with founders, PMs, and designers to turn ambitious ideas into real digital experiences. My approach blends research, storytelling, and technology to create solutions people love to use.",
    'I bring clarity when a project is just starting and discipline when it is time to scale. Thorough documentation, transparent communication, and iterative deliveries keep every stage moving forward with confidence.'
  ]
}

const aboutHighlights: Localized<string[]> = {
  es: [
    'Basado en Rosario, Argentina, colaborando de forma remota con equipos de LATAM y Europa.',
    'Bilingüe (es/en) para facilitar colaboración con stakeholders y documentación internacional.',
    'Mi visión es construir productos que combinen impacto medible y experiencias que cuenten historias.'
  ],
  en: [
    'Based in Rosario, Argentina, collaborating remotely with teams across LATAM and Europe.',
    'Bilingual (es/en) to ease collaboration with stakeholders and international documentation.',
    'My vision is to build products that blend measurable impact with experiences that tell stories.'
  ]
}

const focusAreaEntries = [
  {
    title: {
      es: 'Estrategia & producto',
      en: 'Strategy & product'
    },
    description: {
      es: 'Transformo ideas en roadmaps priorizados. Facilito workshops de discovery, defino métricas y alineo a los equipos para que cada release tenga propósito.',
      en: 'I turn ideas into prioritised roadmaps. I facilitate discovery workshops, define metrics, and align teams so every release has purpose.'
    }
  },
  {
    title: {
      es: 'Experiencias centradas en negocio',
      en: 'Business-centered experiences'
    },
    description: {
      es: 'Diseño interfaces accesibles, microcopy y flujos que mejoran la conversión. Cada feature viene acompañado de hipótesis y criterios de éxito.',
      en: 'I design accessible interfaces, microcopy, and flows that improve conversion. Every feature includes hypotheses and success criteria.'
    }
  },
  {
    title: {
      es: 'Stack moderno y escalable',
      en: 'Modern, scalable stack'
    },
    description: {
      es: 'Trabajo con TypeScript, React, Astro y Node.js para construir bases mantenibles, modulares y preparadas para crecer junto a tu compañía.',
      en: 'I work with TypeScript, React, Astro, and Node.js to build maintainable, modular foundations ready to grow with your company.'
    }
  }
] satisfies {
  title: Localized<string>
  description: Localized<string>
}[]

const workflowStepEntries = [
  {
    step: '01',
    title: {
      es: 'Descubrimiento y alineación',
      en: 'Discovery and alignment'
    },
    description: {
      es: 'Mapeo objetivos, audiencias y restricciones. Crearemos un backlog priorizado que equilibre impacto y esfuerzo.',
      en: 'I map goals, audiences, and constraints. We create a prioritised backlog that balances impact and effort.'
    }
  },
  {
    step: '02',
    title: {
      es: 'Diseño técnico y prototipos',
      en: 'Technical design and prototypes'
    },
    description: {
      es: 'Defino arquitectura, modelo de datos y componentes reutilizables. Validamos la experiencia con prototipos navegables.',
      en: 'I define architecture, data models, and reusable components. We validate the experience with clickable prototypes.'
    }
  },
  {
    step: '03',
    title: {
      es: 'Entrega iterativa y medición',
      en: 'Iterative delivery and measurement'
    },
    description: {
      es: 'Lanzamos en ciclos cortos, medimos resultados y ajustamos con datos reales para mantener un crecimiento constante.',
      en: 'We launch in short cycles, measure results, and adjust with real data to sustain steady growth.'
    }
  }
] satisfies {
  step: string
  title: Localized<string>
  description: Localized<string>
}[]

const serviceEntries = [
  {
    title: {
      es: 'Sprint de discovery (2 semanas)',
      en: 'Discovery sprint (2 weeks)'
    },
    description: {
      es: 'Ideal para validar ideas o redefinir un producto. Construimos claridad sobre el problema, medimos oportunidades y trazamos un plan accionable.',
      en: 'Ideal for validating ideas or redefining a product. We build clarity around the problem, measure opportunities, and outline an actionable plan.'
    },
    deliverables: {
      es: ['Workshop de kickoff', 'Mapa de usuarios y journeys', 'Prototipo navegable', 'Backlog priorizado'],
      en: ['Kickoff workshop', 'User map & journeys', 'Clickable prototype', 'Prioritised backlog']
    }
  },
  {
    title: {
      es: 'Desarrollo end-to-end',
      en: 'End-to-end development'
    },
    description: {
      es: 'Trabajamos juntos desde la arquitectura hasta la puesta en producción. Perfecto para MVPs o nuevos módulos críticos.',
      en: 'We work together from architecture through production launch. Perfect for MVPs or new critical modules.'
    },
    deliverables: {
      es: ['Arquitectura y set-up del stack', 'Componentes UI reutilizables', 'Integraciones con APIs externas', 'Pipeline de despliegue y monitoreo'],
      en: ['Architecture & stack setup', 'Reusable UI components', 'Integrations with external APIs', 'Deployment pipeline & monitoring']
    }
  },
  {
    title: {
      es: 'Optimización continua',
      en: 'Continuous optimization'
    },
    description: {
      es: 'Acompañamiento mensual para escalar funcionalidades existentes, mejorar métricas clave y mantener una base de código sana.',
      en: 'Monthly partnership to scale existing features, improve key metrics, and keep a healthy codebase.'
    },
    deliverables: {
      es: ['Auditoría técnica inicial', 'Roadmap de optimizaciones', 'Implementación iterativa', 'Reportes con métricas y aprendizajes'],
      en: ['Initial technical audit', 'Optimization roadmap', 'Iterative implementation', 'Reports with metrics & learnings']
    }
  }
] satisfies {
  title: Localized<string>
  description: Localized<string>
  deliverables: Localized<string[]>
}[]

const contactParagraphs: Localized<string[]> = {
  es: [
    'Me entusiasma colaborar con equipos que valoran la calidad y la comunicación transparente. Ya sea que necesites validar un MVP, optimizar una plataforma existente o sumar manos expertas en un roadmap complejo, puedo acompañarte desde la estrategia hasta la entrega.',
    'Propongo ciclos de trabajo cortos con entregables claros, documentación accesible y métricas compartidas para que todas las personas involucradas sepan qué sigue y por qué.'
  ],
  en: [
    "I'm excited to partner with teams that value quality and transparent communication. Whether you need to validate an MVP, optimise an existing platform, or add expert hands to a complex roadmap, I can support you from strategy through delivery.",
    'I suggest short work cycles with clear deliverables, accessible documentation, and shared metrics so everyone involved knows what is next and why.'
  ]
}

const contactBullets: Localized<string[]> = {
  es: [
    'Disponible para colaboraciones remotas en husos horarios de América y Europa.',
    'Respuesta garantizada en menos de 24 horas hábiles.',
    'Podemos coordinar una videollamada exploratoria sin costo para revisar tus objetivos.'
  ],
  en: [
    'Available for remote collaborations across American and European time zones.',
    'Guaranteed response within 24 business hours.',
    'We can schedule a free discovery call to review your goals.'
  ]
}

const contactClosing: Localized<string> = {
  es: 'Compartime contexto, objetivos y fechas clave. Prepararé una propuesta con las fases, estimaciones y formas de trabajo ideales para tu equipo. Si preferís usar otra herramienta de comunicación (Slack, Notion, ClickUp), me adapto sin problema.',
  en: 'Share context, goals, and key dates. I will prepare a proposal with phases, estimates, and the ideal ways of working for your team. Prefer another communication tool (Slack, Notion, ClickUp)? I adapt easily.'
}

const footerQuotes: Localized<string> = {
  es: '“Todo gran desarrollador llegó ahí resolviendo problemas para los que no estaba preparado... hasta que lo estuvo.” — Patrick McKenzie',
  en: '“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” — Patrick McKenzie'
}

const footerBuiltWith: Localized<string> = {
  es: 'Thiago Martins. Creado con Astro & Tailwind CSS.',
  en: 'Thiago Martins. Built with Astro & Tailwind CSS.'
}

const mapNavigationLinks = (lang: Language): NavigationLink[] =>
  navigationLinkEntries.map(({ id, icon, name }) => ({ id, icon, name: name[lang] }))

const mapProjects = (lang: Language): Project[] =>
  projectEntries.map(({ name, image, demo, skills, job, description, highlights }) => ({
    name,
    image,
    demo,
    skills,
    job,
    description: description[lang],
    highlights: highlights[lang]
  }))

const mapSkills = (lang: Language): SkillGroup[] =>
  skillGroupEntries.map(({ title, items }) => ({ title: title[lang], items }))

const mapExperiences = (lang: Language): Experience[] =>
  experienceEntries.map(({ role, company, period, location, type, description, highlights }) => ({
    role: role[lang],
    company,
    period: period[lang],
    location: location[lang],
    type: type[lang],
    description: description[lang],
    highlights: highlights[lang]
  }))

const mapCertifications = (lang: Language): Certification[] =>
  certificationEntries.map(({ name, image, organization, date, url, description }) => ({
    name,
    image,
    organization,
    date,
    url,
    description: description[lang]
  }))

const mapContactOptions = (lang: Language): ContactOption[] =>
  contactOptionEntries.map(({ icon, href, label, description }) => ({
    icon,
    href,
    label: label[lang],
    description: description[lang]
  }))

const mapSocialLinks = (lang: Language): SocialLink[] =>
  socialLinkEntries.map(({ href, icon, label }) => ({ href, icon, label: label[lang] }))

const mapFocusAreas = (lang: Language) =>
  focusAreaEntries.map(({ title, description }) => ({ title: title[lang], description: description[lang] }))

const mapWorkflowSteps = (lang: Language) =>
  workflowStepEntries.map(({ step, title, description }) => ({ step, title: title[lang], description: description[lang] }))

const mapServiceKits = (lang: Language) =>
  serviceEntries.map(({ title, description, deliverables }) => ({
    title: title[lang],
    description: description[lang],
    deliverables: deliverables[lang]
  }))

const mapHeroStats = (lang: Language) =>
  heroStatsEntries.map(({ value, label }) => ({ value, label: label[lang] }))

export const languageRoutes: Record<Language, string> = {
  es: '/',
  en: '/en/'
}

export const content: Record<Language, SiteContent> = {
  es: {
    meta: {
      title: 'Thiago Martins · Desarrollador Fullstack orientado a producto',
      description:
        'Portfolio de Thiago Martins, desarrollador fullstack especializado en eCommerce, SaaS y experiencias web modernas.',
      keywords: 'Thiago Martins, desarrollador fullstack, JavaScript, React, Astro, Next.js, Node.js, Tailwind CSS',
      ogLocale: 'es_ES',
      canonical: 'https://thiagomartins.vercel.app/'
    },
    layout: {
      skipToContent: 'Ir al contenido principal'
    },
    header: {
      tagline: 'Desarrollador Fullstack',
      theme: {
        dark: 'Activar tema oscuro',
        light: 'Activar tema claro'
      },
      language: {
        toggleLabel: 'Cambiar idioma',
        options: {
          es: 'Ver sitio en español',
          en: 'Ver sitio en inglés'
        }
      }
    },
    navigation: {
      ariaLabel: 'Navegación principal',
      mobileNavLabel: 'Navegación móvil',
      openMenuLabel: 'Abrir menú de navegación',
      closeMenuLabel: 'Cerrar menú de navegación',
      openMenuSrLabel: 'Abrir menú',
      closeMenuSrLabel: 'Cerrar menú',
      mobileTitle: 'Navegación',
      prompt: '¿Listo para crear algo juntos? Agendemos una reunión para diseñar tu siguiente lanzamiento.',
      links: mapNavigationLinks('es')
    },
    hero: {
      badge: 'Fullstack Developer · Argentina',
      title: 'Construyo productos web que convierten ideas en resultados medibles.',
      description:
        'Hola, soy Thiago Martins. Acompaño a equipos que necesitan validar, escalar o reimaginar sus plataformas. Me involucro desde la estrategia hasta la implementación para asegurar lanzamientos confiables y un crecimiento sostenido.',
      sellingPoints: heroSellingPoints.es,
      primaryCta: {
        label: 'Hablemos de tu proyecto',
        href: 'mailto:thiagodev.martins@gmail.com',
        icon: '/icons/contact.svg'
      },
      secondaryCta: {
        label: 'Descargar CV',
        href: resumeHref,
        icon: '/icons/arrow.svg',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      support: {
        badge: 'Cómo puedo ayudarte',
        commitments: heroCommitments.es,
        description: 'Agenda una reunión exploratoria sin costo y definamos juntos el siguiente paso para tu producto.'
      },
      socialLabel: 'Redes',
      profile: {
        alt: 'Retrato de Thiago Martins',
        badge: 'Colaborador end-to-end',
        description: 'Diseño soluciones que combinan performance, accesibilidad y narrativa de producto.'
      },
      stats: mapHeroStats('es'),
      availability: {
        label: 'Disponibilidad',
        description:
          'Actualmente colaboro con productos que buscan lanzar features cada 2-3 semanas. Si necesitás apoyo estratégico o manos en el código, conversemos.'
      }
    },
    about: {
      title: 'Sobre mí',
      paragraphs: aboutParagraphs.es,
      highlights: aboutHighlights.es,
      focusAreas: mapFocusAreas('es'),
      workflowTitle: 'Cómo trabajo',
      workflowDescription:
        'Cada proyecto es distinto, pero la combinación de discovery estratégico, diseño técnico y ciclos cortos de entrega permite aprender más rápido. Este es el flujo que seguimos juntos:',
      workflowSteps: mapWorkflowSteps('es')
    },
    experience: {
      title: 'Experiencia profesional',
      description:
        'Combino trabajo en estudio, proyectos para clientes y mentoría. Cada rol potenció mi habilidad para conectar necesidades de negocio con entregas técnicas claras.',
      roles: mapExperiences('es'),
      callout: {
        title: '¿Querés profundizar en mi trayectoria?',
        description:
          'Descargá mi CV para ver resultados detallados, stacks preferidos y recomendaciones de clientes con los que he trabajado.',
        ctaLabel: 'Descargar CV',
        ctaHref: resumeHref,
        ctaIcon: '/icons/arrow.svg',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    },
    myWork: {
      title: 'Mi trabajo',
      description:
        'Diseño y desarrollo productos digitales end-to-end. Aquí encontrarás una selección de proyectos, tecnologías y dinámicas de trabajo que representan mi enfoque.',
      projectsTitle: 'Proyectos destacados',
      projectsDescription:
        'Una combinación de colaboraciones con clientes y proyectos personales donde lideré discovery, arquitectura y entrega. Cada caso refleja cómo conecto negocio, diseño y tecnología.',
      projectBadge: {
        client: 'Proyecto cliente',
        personal: 'Proyecto personal'
      },
      projectCta: 'Ver proyecto',
      projects: mapProjects('es'),
      skillsTitle: 'Tecnologías y herramientas',
      skillsDescription:
        'Esta es la base con la que construyo productos confiables y adaptables. Selecciono cada pieza según el contexto del proyecto, priorizando mantenibilidad y performance.',
      skills: mapSkills('es'),
      servicesTitle: 'Formas de colaborar',
      servicesDescription:
        'Podés sumarme por proyecto, por un sprint puntual o como partner continuo. Estas son algunas propuestas para comenzar a trabajar juntos.',
      serviceKits: mapServiceKits('es'),
      certificationsTitle: 'Certificaciones & aprendizaje continuo',
      certificationsDescription:
        'Me mantengo actualizado con formaciones que potencian mi capacidad de guiar equipos y tomar decisiones técnicas bien fundamentadas.',
      certifications: mapCertifications('es')
    },
    contact: {
      title: 'Hablemos de tu proyecto',
      paragraphs: contactParagraphs.es,
      bullets: contactBullets.es,
      options: mapContactOptions('es'),
      closing: contactClosing.es
    },
    footer: {
      quote: footerQuotes.es,
      builtWith: footerBuiltWith.es
    },
    socialLinks: mapSocialLinks('es')
  },
  en: {
    meta: {
      title: 'Thiago Martins · Product-focused Fullstack Developer',
      description:
        'Portfolio of Thiago Martins, a fullstack developer specialised in eCommerce, SaaS, and modern web experiences.',
      keywords: 'Thiago Martins, fullstack developer, JavaScript, React, Astro, Next.js, Node.js, Tailwind CSS',
      ogLocale: 'en_US',
      canonical: 'https://thiagomartins.vercel.app/en/'
    },
    layout: {
      skipToContent: 'Skip to main content'
    },
    header: {
      tagline: 'Fullstack Developer',
      theme: {
        dark: 'Activate dark theme',
        light: 'Activate light theme'
      },
      language: {
        toggleLabel: 'Change language',
        options: {
          es: 'View site in Spanish',
          en: 'View site in English'
        }
      }
    },
    navigation: {
      ariaLabel: 'Primary navigation',
      mobileNavLabel: 'Mobile navigation',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      openMenuSrLabel: 'Open menu',
      closeMenuSrLabel: 'Close menu',
      mobileTitle: 'Navigation',
      prompt: "Ready to build together? Let's schedule a call to plan your next launch.",
      links: mapNavigationLinks('en')
    },
    hero: {
      badge: 'Fullstack Developer · Argentina',
      title: 'I build web products that turn ideas into measurable results.',
      description:
        "Hi, I'm Thiago Martins. I partner with teams that need to validate, scale, or reimagine their platforms. I stay involved from strategy to implementation to secure dependable launches and sustained growth.",
      sellingPoints: heroSellingPoints.en,
      primaryCta: {
        label: "Let's discuss your project",
        href: 'mailto:thiagodev.martins@gmail.com',
        icon: '/icons/contact.svg'
      },
      secondaryCta: {
        label: 'Download resume',
        href: resumeHref,
        icon: '/icons/arrow.svg',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      support: {
        badge: 'How I can help',
        commitments: heroCommitments.en,
        description: "Book a free discovery call and let's define the next step for your product."
      },
      socialLabel: 'Social',
      profile: {
        alt: 'Portrait of Thiago Martins',
        badge: 'End-to-end collaborator',
        description: 'I design solutions that blend performance, accessibility, and product storytelling.'
      },
      stats: mapHeroStats('en'),
      availability: {
        label: 'Availability',
        description:
          "I'm partnering with products that release features every 2–3 weeks. Need strategic support or extra hands in the code? Let's chat."
      }
    },
    about: {
      title: 'About me',
      paragraphs: aboutParagraphs.en,
      highlights: aboutHighlights.en,
      focusAreas: mapFocusAreas('en'),
      workflowTitle: 'How I work',
      workflowDescription:
        "Every project is different, but combining strategic discovery, technical design, and short delivery cycles lets us learn faster. Here's the flow we follow together:",
      workflowSteps: mapWorkflowSteps('en')
    },
    experience: {
      title: 'Professional experience',
      description:
        'I balance studio work, client projects, and mentorship. Each role strengthened my ability to connect business needs with clear technical delivery.',
      roles: mapExperiences('en'),
      callout: {
        title: 'Want a deeper look at my background?',
        description:
          "Download my resume to review detailed outcomes, preferred stacks, and recommendations from the teams I've worked with.",
        ctaLabel: 'Download resume',
        ctaHref: resumeHref,
        ctaIcon: '/icons/arrow.svg',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    },
    myWork: {
      title: 'My work',
      description:
        'I design and build end-to-end digital products. Here is a selection of projects, technologies, and collaboration models that reflect my approach.',
      projectsTitle: 'Featured projects',
      projectsDescription:
        'A mix of client collaborations and personal projects where I led discovery, architecture, and delivery. Each case shows how I connect business, design, and technology.',
      projectBadge: {
        client: 'Client project',
        personal: 'Personal project'
      },
      projectCta: 'View project',
      projects: mapProjects('en'),
      skillsTitle: 'Technologies & tools',
      skillsDescription:
        'This is the foundation I use to build reliable, adaptable products. I pick each piece according to the project context, prioritising maintainability and performance.',
      skills: mapSkills('en'),
      servicesTitle: 'Ways to collaborate',
      servicesDescription:
        'Bring me in for a project, a focused sprint, or as an ongoing partner. These are a few starting points to work together.',
      serviceKits: mapServiceKits('en'),
      certificationsTitle: 'Certifications & continuous learning',
      certificationsDescription:
        'I stay up to date with training that strengthens my ability to guide teams and make well-founded technical decisions.',
      certifications: mapCertifications('en')
    },
    contact: {
      title: "Let's talk about your project",
      paragraphs: contactParagraphs.en,
      bullets: contactBullets.en,
      options: mapContactOptions('en'),
      closing: contactClosing.en
    },
    footer: {
      quote: footerQuotes.en,
      builtWith: footerBuiltWith.en
    },
    socialLinks: mapSocialLinks('en')
  }
}

export const getContent = (lang: Language): SiteContent => content[lang] ?? content.es

export const languages: Language[] = ['es', 'en']
