export const en = {
  hero: {
    title: "Frontend Engineer • React • Next.js",
    roles: ["Frontend Engineer", "Tech Lead", "Software Engineer"],
    tagline:
      "Frontend Engineer specialized in React and Next.js. I build scalable interfaces with solid architecture, automated tests, and a product focus, accelerating every stage with AI.",
    highlights: [
      "5+ years of experience",
      "React · Next.js · TypeScript",
      "Technical leadership",
      "Automated tests & CI/CD",
    ],
    availability: "Available · Remote · PT/EN",
    scroll: "Scroll",
    downloadCvAria: "Download Resume",
  },

  nav: {
    about: "About",
    howIWork: "How I Work",
    journey: "Journey",
    skills: "Skills",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  metrics: [
    { value: "+5", label: "years building products" },
    { value: "70%", label: "less deploy time" },
    { value: "10×", label: "faster PR review" },
    { value: "4th day", label: "from idea to production" },
  ],

  howIWork: {
    heading: "How I Work",
    subtitle: "The method and strengths I bring to every project",
    items: [
      {
        title: "AI as a lever",
        description:
          "I use AI at every stage (design, code, tests, and review) to ship faster, with the architecture and decisions always mine.",
      },
      {
        title: "In-house test automation",
        description:
          "End-to-end test framework with Playwright MCP and a CI pipeline that runs on every Pull Request.",
      },
      {
        title: "Products from scratch to production",
        description:
          "From concept and requirements (FR/NFR) to UI and deploy, including complete systems like a CRM and an observability platform.",
      },
      {
        title: "Technical leadership & mentoring",
        description:
          "I define stack and standards, review PRs, and mentor devs; I acted as Tech Lead of a cross-functional team.",
      },
    ],
  },

  about: {
    heading: "About",
    bioTitle: "Frontend Engineer with 5+ years of experience",
    summary: [
      "Frontend Engineer with 5+ years building scalable interfaces in React, Next.js, and TypeScript. I work on architecture, technical leadership, and day-to-day AI automation, always focused on the product and the experience of the people who use it.",
      "I use AI as a delivery lever: I built a custom CLI that analyzes large volumes of support tickets in a single run for a few dollars in tokens, created webhooks with n8n to enable integrations the original platform didn't expose, and automated testing, PR review, and bug triage. I solve in days what would manually take weeks.",
      "I build products from scratch, from concept to production: I put together requirements documents (functional and non-functional requirements (FR/NFR)) to align backend, frontend, and UI, design the interface with the user experience in mind, and use AI at every stage (design, code, tests, and review). On one project, the application went into production by the 4th day.",
      "I've delivered complete systems on my own, such as a CRM with an editable content layer (built like a headless CMS) and an observability platform to track flows in production, with daily metrics, identifying where users get stuck, and exporting data for AI-generated reports.",
      "What guides my work: planning before code, meeting deadlines without compromising quality, and consistency. Automated tests, clear standards, and careful review going hand in hand with speed.",
    ],
    location: "Manaus, Brazil",
    educationLabel: "Education",
    languagesLabel: "Languages",
    certificationsLabel: "Certifications",
    course: "Computer Science",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
  },

  timeline: {
    heading: "My Journey",
    subtitleTemplate: "{years}+ years of experience building solutions",
    responsibilitiesLabel: "Responsibilities",
    impactLabel: "Impact",
    technologiesLabel: "Technologies",
    clickForDetails: "Click to see details",
    techDialogHint: "Click a technology to see more details",
    moreTemplate: "+{count}",
    experiences: {
      "1": {
        role: "Frontend Engineer",
        period: "Sep 2025 - Present",
        location: "Manaus, Brazil",
        description:
          "I lead the technical direction of frontend projects in React, Next.js, and TypeScript: I define the stack, architecture standards, and the quality rules the team follows. I built a custom test automation framework based on Playwright MCP, where every new feature gets end-to-end tests within minutes, and the full test suite (unit, integration, and end-to-end) runs automatically on GitHub Actions on every Pull Request. I integrated Sentry MCP to identify and fix bugs in real time and developed a custom AI CLI capable of analyzing large volumes of support tickets in a single run, for under $5 in tokens, generating reports that replaced weeks of manual work. I automated Pull Request review with Claude Code, put together requirements documents (FR/NFR) to align backend, frontend, and UI, and deliver products from scratch using AI at every stage, from design (Claude Design) to production. Every deploy runs continuously in staging and production, always going through type checking, code standardization, and tests before going live.",
      },
      "2": {
        role: "Interim Tech Lead",
        period: "Jan 2026 - Apr 2026",
        location: "Manaus, Brazil",
        description:
          "I acted as Tech Lead for a five-person, cross-functional team (2 frontend, 1 backend, and 1 UX) during a transition period. I ran dailies, planning sessions, and technical decisions, coordinated alignment between frontend and backend, and directly supported product decisions, validating solutions and designing the logic before each implementation. Even though it was a temporary role, the team kept its sprint cadence and adopted permanent workflow improvements, such as Husky for pre-commit quality checks and standardized PR review, practices that continued after the interim period.",
      },
      "3": {
        role: "Mid-level Frontend Developer",
        period: "Oct 2022 - Sep 2025",
        location: "Manaus, Brazil",
        description:
          "I worked with technical autonomy on frontend projects and conversational automation (Blip platform), making stack and architecture decisions without relying on the tech lead. I supported and mentored junior and mid-level developers, trained new devs on these tools, and maintained reference technical documentation. I led the structuring of scalable architectures and implemented the automated testing foundation with Vitest, Testing Library, Cypress, and Playwright. It was during this period that my perspective matured: I started seeing the work not just through the lens of code, but also from the product side and its impact on the experience of the people who use it.",
      },
      "4": {
        role: "Junior Frontend Developer",
        period: "Jul 2021 - Sep 2022",
        location: "Manaus, Brazil",
        description:
          "My first position as a developer: I worked on web applications and blogs in React with Prismic, HTML, CSS, and JavaScript, as well as mobile apps with React Native and Expo. I created and maintained component documentation in Storybook and built the first conversational automation solutions I worked on from scratch, creating patterns that were reused later. I delivered more than eight projects during this period, across web, mobile, and bots, and helped kick off the stack transition to React.",
      },
    },
    details: {
      "1": {
        responsibilities: [
          "Define the stack, architecture standards, and quality gates for frontend projects",
          "Built the test pipeline (unit, integration, and E2E with Vitest and Playwright) integrated with GitHub Actions in staging and production",
          "Put together requirements documents (FR/NFR) to align backend, frontend, and UI",
          "Built a custom AI CLI for batch analysis of support tickets",
          "Set up Sentry MCP integration for real-time bug triage",
          "Coded custom code review skills with Claude Code",
          "Translate UX prototypes into responsive UIs (TailwindCSS, Shadcn, Radix)",
        ],
        impact: [
          "Product built from scratch in production by the 4th day: designed the UI with the user experience in mind, converted the design into code with Claude, and refined the visuals with Claude Design, applying standards and tests via prompts and custom skills",
          "Faster delivery with AI working at every stage (design, code, tests, and review), without compromising quality",
          "70% shorter deploy time with pipelines covering type checking, code standardization, and tests",
          "Large volumes of support tickets analyzed in a single run for under $5 in tokens, replacing weeks of manual work",
          "Pull Requests reviewed 10x faster with Claude Code and custom skills",
          "Complete systems delivered from scratch, such as a CRM with an editable content layer (built like a headless CMS) and an observability platform with daily metrics and data export for AI-generated reports",
          "New end-to-end tests created in minutes via Playwright MCP",
        ],
      },
      "2": {
        responsibilities: [
          "Led a five-person, cross-functional team (2 frontend, 1 backend, and 1 UX)",
          "Ran dailies, planning sessions, and technical decisions during the transition",
          "Coordinated alignment between frontend and backend",
          "Supported product decisions, validating solutions and designing the logic before implementation",
        ],
        impact: [
          "Team adopted Husky and automated PR review, with a standardized workflow that continued after the interim period",
          "Sprints delivered on time throughout the transition",
          "Frontend and backend aligned without cross-team rework",
        ],
      },
      "3": {
        responsibilities: [
          "Worked with technical autonomy on frontend projects and conversational automation",
          "Made stack and architecture decisions without relying on the tech lead",
          "Maintained reference technical documentation for the projects",
          "Trained new devs on conversational automation tools",
          "Structured scalable architectures across projects",
          "Implemented the automated testing foundation with Vitest, Testing Library, Cypress, and Playwright",
        ],
        impact: [
          "Matured as a developer, learning to see product and experience, not just code",
          "Technical documentation adopted as the team's reference",
          "Recurring 1:1 mentoring and code reviews with the junior team",
          "Automated testing foundation adopted across projects",
        ],
      },
      "4": {
        responsibilities: [
          "Built web applications and blogs in React with Prismic, HTML, CSS, and JavaScript",
          "Built mobile apps with React Native and Expo",
          "Created and maintained component documentation in Storybook",
          "Built the first conversational automation solutions I worked on from scratch",
        ],
        impact: [
          "First conversational automation solutions built from scratch, with patterns reused later",
          "8+ web, mobile, and bot projects delivered in ~14 months",
          "Storybook component documentation adopted as the team's reference",
          "First job as a developer, laying the foundation for growth in subsequent roles",
        ],
      },
    },
  },

  skills: {
    heading: "Skills",
    coreHeading: "Core stack",
    whatIsLabel: "What it is",
    useCaseLabel: "Use Case",
    categories: {
      "Frontend & Frameworks": {
        name: "Frontend & Frameworks",
        badge: "Front",
      },
      Mobile: { name: "Mobile", badge: "Mobile" },
      "Prototipação & Design": {
        name: "Prototyping & Design",
        badge: "Design",
      },
      "Automação & IA": { name: "Automation & AI", badge: "AI" },
      "Bots & Chatbots": { name: "Bots & Chatbots", badge: "Bots" },
      "CMS & Headless": { name: "CMS & Headless", badge: "CMS" },
      Backend: { name: "Backend", badge: "Back" },
      "Testes & Qualidade": { name: "Testing & Quality", badge: "Test" },
      "Ferramentas & Infra": { name: "Tools & Infra", badge: "Infra" },
      "Soft Skills": { name: "Soft Skills", badge: "Soft" },
    },
    descriptions: {
      "React Native": {
        name: "React Native",
        description:
          "Framework for building native mobile applications (iOS/Android) using React. Renders native components from JavaScript/TypeScript code.",
        useCase:
          "Cross-platform mobile apps, MVPs with a React frontend team, projects that reuse web logic",
      },
      Expo: {
        name: "Expo",
        description:
          "Platform and toolchain for React Native. Simplifies builds, deploys, OTA updates, and access to native APIs (camera, push, etc.) without ejecting.",
        useCase:
          "Apps that need development speed, distribution via TestFlight/Play Store without manual native setup",
      },
      NativeWind: {
        name: "NativeWind",
        description:
          "Tailwind CSS for React Native. Lets you style native components with Tailwind's utility classes, keeping DX consistent with web.",
        useCase:
          "Teams already fluent in Tailwind, apps that share design tokens between web and mobile",
      },
      Storybook: {
        name: "Storybook",
        description:
          "Tool for isolated development and documentation of UI components. Renders each component in different states/variants.",
        useCase:
          "Design systems, component libraries, visual and a11y validation before integrating into the application",
      },
      Vite: {
        name: "Vite",
        description:
          "Modern build tool for frontend. Instant dev server via native ESM, fast HMR, optimized build with Rollup.",
        useCase:
          "React/Vue/Svelte SPAs, libraries, projects that need fast DX without Webpack's overhead",
      },
      React: {
        name: "React",
        description:
          "JavaScript library for building component-based user interfaces. Built on reusable components and reactive state.",
        useCase: "Building SPAs, dashboards, modern web applications",
      },
      "Next.js": {
        name: "Next.js",
        description:
          "React framework with hybrid rendering (SSR, SSG, CSR). Offers routing, image optimization, and API routes.",
        useCase:
          "Fullstack applications, e-commerce, blogs, high-performance landing pages",
      },
      TypeScript: {
        name: "TypeScript",
        description:
          "JavaScript superset with static typing. Improves code safety, productivity, and maintainability.",
        useCase: "Enterprise projects, large codebases, shared libraries",
      },
      JavaScript: {
        name: "JavaScript",
        description:
          "The main programming language for web development. The foundation of the modern web.",
        useCase:
          "Web development, automation, scripting, server-side applications",
      },
      "HTML/CSS": {
        name: "HTML/CSS",
        description:
          "Web fundamentals: HTML for semantic structure and CSS for styling and responsive layout.",
        useCase: "Any web project, HTML emails, landing pages",
      },
      TailwindCSS: {
        name: "TailwindCSS",
        description:
          "Utility-first CSS framework for fast styling. Lets you build custom designs without leaving the HTML.",
        useCase: "Projects that need fast, unique visual customization",
      },
      Zustand: {
        name: "Zustand",
        description:
          "Global state for React in ~1KB. No provider, no boilerplate, just a hook and setState.",
        useCase: "Global state in small to medium React applications",
      },
      "React Query": {
        name: "React Query",
        description:
          "Cache layer for server data. Handles fetching, refetching, invalidation, and cross-tab synchronization.",
        useCase: "Applications that frequently consume REST or GraphQL APIs",
      },
      Zod: {
        name: "Zod",
        description:
          "TypeScript schema validation library. Validates data at runtime with compile-time typing.",
        useCase: "Form validation, APIs, configuration",
      },
      "Chakra UI": {
        name: "Chakra UI",
        description:
          "React component library with a built-in design system. Focused on accessibility and flexibility.",
        useCase:
          "Rapid prototyping, MVPs, applications that need ready-made UI",
      },
      Shadcn: {
        name: "Shadcn/ui",
        description:
          "Collection of reusable React components, copied directly into the project. Fully customizable via TailwindCSS.",
        useCase: "Projects that need accessible, customizable components",
      },
      "Radix UI": {
        name: "Radix UI",
        description:
          "Unstyled accessibility primitives. A foundation for building accessible components.",
        useCase: "Building custom design systems",
      },
      "Styled Components": {
        name: "styled-components",
        description:
          "Library that lets you write CSS in JavaScript using template literals. Dynamic styles based on props.",
        useCase: "Styled components with CSS-in-JS, theming",
      },
      Stitches: {
        name: "stitches.dev",
        description:
          "Zero-runtime CSS-in-JS library. Defines styles in JavaScript objects with type safety and native theming.",
        useCase:
          "Maximum performance with CSS-in-JS, high-performance design systems",
      },
      Vitest: {
        name: "Vitest",
        description:
          "Fast, modern unit testing framework. Compatible with the Jest API and native to Vite.",
        useCase: "Unit testing in Vite/Next.js projects",
      },
      "Testing Library": {
        name: "Testing Library",
        description:
          "Testing library focused on user interaction. Tests behavior, not implementation.",
        useCase: "User-centric integration and unit tests",
      },
      Cypress: {
        name: "Cypress",
        description:
          "Modern E2E framework with a visual interface. Excellent DX and automatic debugging.",
        useCase: "End-to-end tests, visual regression testing",
      },
      Playwright: {
        name: "Playwright",
        description:
          "Microsoft's E2E framework. Supports multiple browsers, multiple tabs, and network interception.",
        useCase: "Complex E2E tests, browser automation, scraping",
      },
      Jest: {
        name: "Jest",
        description:
          "The most popular JavaScript testing framework. Powerful mocking and built-in coverage.",
        useCase: "Unit testing in JavaScript/TypeScript projects",
      },
      "Testes Unitários": {
        name: "Unit Tests",
        description:
          "Tests that verify the smallest possible unit of code. The base of the testing pyramid.",
        useCase: "Validating functions, components, business logic",
      },
      "Testes de Integração": {
        name: "Integration Tests",
        description:
          "Tests that verify the interaction between multiple units. Fails when the integration breaks.",
        useCase:
          "Validating complete flows, APIs, interactions between modules",
      },
      "Testes E2E": {
        name: "E2E Tests",
        description:
          "Tests that simulate the real user. Cover the entire application from start to finish.",
        useCase: "Validating critical flows, regression testing, smoke tests",
      },
      Claude: {
        name: "Claude",
        description:
          "Anthropic's suite of AI tools that I use across the entire development workflow. Claude Code, in the terminal, reads the repository, proposes diffs, runs commands, and opens Pull Requests. Claude Design helps create and refine styles and visual identity. MCP servers (Sentry, Playwright, and others) extend the agent for tasks like bug triage and test generation. Custom skills and prompts tailor all of this to the project.",
        useCase:
          "AI pair programming, automated code review, test generation, UI creation and refinement, production bug triage",
      },
      OpenCode: {
        name: "OpenCode",
        description:
          "AI agent for software development. Helps with debugging, refactoring, and implementation.",
        useCase: "AI pair programming, assisted debugging",
      },
      "Playwright MCP": {
        name: "Playwright MCP",
        description:
          "Model Context Protocol for Playwright. Lets you use AI to create and run automated tests.",
        useCase: "AI-driven test automation, generating tests from behavior",
      },
      "Sentry MCP": {
        name: "Sentry MCP",
        description:
          "Sentry integration with MCP. Error and performance monitoring with AI assistance.",
        useCase: "Production debugging, performance monitoring",
      },
      n8n: {
        name: "n8n",
        description:
          "Open-source workflow automation tool. Connects APIs and automates processes.",
        useCase: "Business process automation, integrations between services",
      },
      "CLI customizado com IA": {
        name: "Custom AI CLI",
        description:
          "Custom command-line tool integrated with AI to automate project-specific tasks.",
        useCase: "Recurring tasks, scaffolding, code generation",
      },
      "Automação de Processos": {
        name: "Process Automation",
        description:
          "Using technology to eliminate repetitive manual tasks and increase efficiency.",
        useCase: "CI/CD, deploys, notifications, integrations",
      },
      "Node.js": {
        name: "Node.js",
        description:
          "Server-side JavaScript runtime. Lets you run JS outside the browser.",
        useCase: "APIs, microservices, CLI tools, real-time apps",
      },
      Fastify: {
        name: "Fastify",
        description:
          "Node.js web framework focused on performance and low overhead. Excellent for fast APIs.",
        useCase: "High-performance REST APIs, microservices",
      },
      Prisma: {
        name: "Prisma",
        description:
          "TypeScript ORM for Node.js and TypeScript. Schema-first, with built-in migrations.",
        useCase: "Type-safe database access",
      },
      Drizzle: {
        name: "Drizzle",
        description:
          "Lightweight, fast TypeScript ORM. Closer to SQL, with less abstraction than other ORMs.",
        useCase: "Projects that need fine-grained control over SQL",
      },
      "REST API": {
        name: "REST API",
        description:
          "API design convention using HTTP. Standardized resources, verbs, and status codes.",
        useCase: "Frontend-backend integration, microservices",
      },
      PostgreSQL: {
        name: "PostgreSQL",
        description:
          "Robust open-source relational database. Supports JSON, full-text search, and extensions.",
        useCase: "Applications that need reliable relational data",
      },
      Git: {
        name: "Git",
        description:
          "Distributed version control system. Essential for collaborative development.",
        useCase: "Code versioning, branching, code review",
      },
      "GitHub Actions": {
        name: "GitHub Actions",
        description:
          "GitHub's CI/CD platform. Automates build, test, and deploy directly from the repository.",
        useCase: "CI/CD, workflow automation, automatic deploys",
      },
      "CI/CD": {
        name: "CI/CD",
        description:
          "Continuous Integration/Continuous Deployment. Software delivery automation.",
        useCase: "Quality gates, automatic deploys, feature flags",
      },
      Jira: {
        name: "Jira",
        description:
          "Atlassian's project management tool. Widely used for agile/Scrum.",
        useCase: "Task management, sprints, and roadmaps",
      },
      Vercel: {
        name: "Vercel",
        description:
          "Deployment platform for Next.js and frontends. Built-in CI/CD with edge functions.",
        useCase: "Next.js deploys, serverless, preview deployments",
      },
      Railway: {
        name: "Railway",
        description:
          "Modern deployment platform with support for multiple languages. Easy setup.",
        useCase: "Deploying APIs, databases, fullstack applications",
      },
      Docker: {
        name: "Docker",
        description:
          "Containerization platform. Packages applications with their dependencies.",
        useCase:
          "Consistency across environments, microservices, dev containers",
      },
      Deploy: {
        name: "Deploy",
        description:
          "The process of releasing an application to a production environment.",
        useCase: "Cloud hosting, CD pipelines, zero-downtime deploys",
      },
      "Liderança Técnica": {
        name: "Technical Leadership",
        description:
          "Stack, architecture, and quality decisions, balancing team speed with controlled technical debt.",
        useCase: "Tech leads, architects, team mentoring",
      },
      Mentoria: {
        name: "Mentoring",
        description:
          "Support and guidance to help less experienced developers grow in their careers.",
        useCase: "Onboarding, 1:1s, pair programming, code review",
      },
      Scrum: {
        name: "Scrum",
        description:
          "Agile development framework with sprints, dailies, retrospectives, and planning.",
        useCase: "Iterative development, agile teams",
      },
      Kanban: {
        name: "Kanban",
        description:
          "Agile methodology focused on flow. Visualizes work with a column-based board.",
        useCase: "Teams that need continuous flow, less ceremony",
      },
      "Pensamento Crítico": {
        name: "Critical Thinking",
        description:
          "The ability to analyze problems from multiple angles before proposing solutions.",
        useCase: "Technical decisions, debugging, architecture",
      },
      Comunicação: {
        name: "Communication",
        description:
          "The ability to clearly express technical and product ideas to different audiences.",
        useCase: "Meetings, documentation, presentations, alignment",
      },
      "Documentação Técnica": {
        name: "Technical Documentation",
        description:
          "Creating clear documentation on code, architecture, flows, and technical decisions.",
        useCase: "Onboarding, maintainability, knowledge base",
      },
      Blip: {
        name: "Blip",
        description:
          "Brazilian platform for building multichannel chatbots. Lets you integrate WhatsApp, Instagram, Telegram, and other channels into a single platform.",
        useCase:
          "Building bots for customer service, sales, support, and message automation",
      },
      "Criação de Fluxograma": {
        name: "Flowchart Design",
        description:
          "Visual modeling of conversation flows for chatbots. Uses tools like Blip Studio to define decisions, conditions, and actions.",
        useCase: "Conversation design, planning automated service flows",
      },
      "Arquiteto de Bot": {
        name: "Bot Architect",
        description:
          "Role focused on defining the structure, architecture, and strategy of chatbots. Involves conversation planning, integrations, and user experience.",
        useCase: "Defining automation strategies, enterprise bot projects",
      },
      "RD Conversas": {
        name: "RD Conversas",
        description:
          "RD Station's conversation automation platform. Focused on conversational marketing and lead nurturing.",
        useCase:
          "Marketing automation, chatbots for inbound marketing, lead nurturing",
      },
      ManyChat: {
        name: "ManyChat",
        description:
          "Chatbot platform for marketing on WhatsApp, Instagram, and Facebook. Focused on marketing and sales automation.",
        useCase:
          "Conversational marketing, sales automation, Messenger and Instagram funnels",
      },
      BotConversas: {
        name: "BotConversas",
        description:
          "Brazilian chatbot platform focused on WhatsApp. Offers a visual interface for building flows and integrations.",
        useCase: "WhatsApp customer service, support automation, sales",
      },
      Prismic: {
        name: "Prismic",
        description:
          "Slice-based headless CMS. Lets you build flexible, custom content with Slice Machine. Great for blogs and marketing sites.",
        useCase: "Blogs, marketing sites, content sites, news portals",
      },
      Hygraph: {
        name: "Hygraph",
        description:
          "GraphQL-native headless CMS. Offers content federation, advanced localization, and a flexible schema. Formerly known as GraphCMS.",
        useCase:
          "Content portals, headless e-commerce, multi-channel apps, localization",
      },
      Figma: {
        name: "Figma",
        description:
          "Browser-based collaborative design tool. Lets you create interfaces, prototypes, and design systems.",
        useCase:
          "UI/UX design, prototyping, design systems, real-time collaboration",
      },
      Pencil: {
        name: "Pencil",
        description:
          "Free interface prototyping tool. Lightweight and simple for creating quick wireframes and mockups.",
        useCase: "Wireframes, rapid prototyping, interface brainstorming",
      },
      FigJam: {
        name: "FigJam",
        description:
          "Visual collaboration tool in the Figma ecosystem. Ideal for flows, mind maps, and remote workshops.",
        useCase: "Bot flows, mind maps, collaborative brainstorming, workshops",
      },
      Swagger: {
        name: "Swagger",
        description:
          "Set of tools for designing, building, and documenting REST APIs. Uses the OpenAPI specification.",
        useCase: "API documentation, API design, endpoint testing",
      },
    },
  },

  contact: {
    heading: "Contact",
    sendMessage: "Send Message",
    downloadCv: "Download Resume",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  achievements: {
    panelTitle: "Achievements",
    progress: "Progress",
    reset: "Reset Achievements",
    newAchievement: "New Achievement!",
    secretRevealed: "Secret Achievement Revealed!",
    secretLockedTitle: "Secret Achievement",
    secretLockedDescription: "???",
    ctaText: "Liked it? Let's talk",
    items: {
      welcome: {
        title: "Welcome",
        description: "You visited my portfolio",
      },
      view_journey: {
        title: "Explorer",
        description: "Explored my journey",
      },
      view_contact: {
        title: "The Finish",
        description: "Reached the end of the portfolio",
      },
      open_experience: {
        title: "Detail-oriented",
        description: "Viewed details of an experience",
      },
      open_skill: {
        title: "Learner",
        description: "Viewed details of a skill",
      },
      curious: {
        title: "Curious",
        description: "Opened 3 different skills",
      },
      click_linkedin: {
        title: "Networking",
        description: "Visited my LinkedIn",
      },
      click_github: {
        title: "Open Source",
        description: "Visited my GitHub",
      },
      download_cv: {
        title: "CV Downloaded",
        description: "You downloaded my resume",
      },
      return_visitor: {
        title: "Welcome Back",
        description: "Revisited my portfolio",
      },
      platinum: {
        title: "Secret Achievement",
        description: "You explored the whole portfolio!",
      },
    },
  },

  common: {
    close: "Close",
    backToTop: "Back to top",
  },

  consent: {
    message: "This site uses cookies to understand how people use the page.",
    accept: "Accept",
    reject: "Decline",
  },
};
