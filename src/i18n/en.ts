export const en = {
  hero: {
    roles: ["Software Engineer", "Tech Lead", "Frontend Engineer"],
    tagline:
      "Software Engineer with 5+ years in React, Next.js and TypeScript, working from requirement to production: interface, API, tests, deploy and observability. The architecture and the decisions are mine; I use AI to execute faster, not to decide for me.",
    highlights: [
      "5+ years of experience",
      "React · Next.js · Node.js",
      "From requirement to production",
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
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

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
    bioTitle: "Software Engineer with 5+ years, from requirement to production",
    summary: [
      "Software Engineer with 5+ years in React, Next.js and TypeScript, working from requirement to production: interface, API, tests, deploy and observability. The architecture and the technical decisions are mine; I use AI to execute faster, not to decide for me.",
      "I have started from a business need, written the specification, built both the interface and the backend, and shipped the application on a server I provisioned myself. I joined the company to build interfaces and today I own the full product cycle.",
      "As interim tech lead I ran a cross-functional team, mentored two developers closely and left practices that outlived the interim period, such as standardized PR review. Before that, as a mid-level developer, I had autonomy over stack and architecture, mentored juniors and wrote the component documentation that became the internal reference.",
      "After five years building product inside the same operation, I am looking to apply that experience to a different kind of business and customer, on teams where software is the core product.",
    ],
    location: "Manaus, Brazil",
    educationLabel: "Education",
    languagesLabel: "Languages",
    certificationsLabel: "Certifications",
    highlightsLabel: "Highlights & Impact",
    highlights: [
      {
        label: "Security",
        description:
          "I found private keys headed for the frontend bundle and moved all communication into an own API with server-side authentication.",
      },
      {
        label: "Cost",
        description:
          "I built the in-house observability tool that replaced a paid monitoring extension, removing a recurring cost.",
      },
      {
        label: "Revenue",
        description:
          "I created a channel inside the chatbot that feeds the lead base continuously, with visual tracking of the volume generated and direct delivery to the sales team.",
      },
      {
        label: "Speed",
        description:
          "I cut deploy time by roughly 70% and front-to-back integration from days to minutes.",
      },
      {
        label: "Quality",
        description:
          "A test suite that sustains continuous publishing across the main products, with around 3,000 tests running in the pipelines.",
      },
    ],
    course: "Computer Science",
    languages: [
      { name: "Portuguese", level: "Native" },
      {
        name: "English",
        level: "Intermediate reading and writing, basic conversation",
      },
    ],
  },

  timeline: {
    heading: "My Journey",
    subtitleTemplate: "{years}+ years of experience building solutions",
    responsibilitiesLabel: "Responsibilities",
    impactLabel: "Impact",
    technologiesLabel: "Technologies",
    progressionLabel: "Progression",
    clickForDetails: "Click to see details",
    techDialogHint: "Click a technology to see more details",
    moreTemplate: "+{count}",
    experiences: {
      "1": {
        role: "Software Engineer",
        period: "Jul 2021 - Present",
        location: "Manaus and remote",
        description:
          "I joined to build interfaces and today I own the full product cycle: I define the stack, the architecture standards and the quality criteria, and I work full-stack whenever the product calls for it.",
        progression: [
          { role: "Junior Frontend", period: "2021" },
          { role: "Mid-level Frontend", period: "2022" },
          { role: "Interim Tech Lead", period: "Jan - Apr 2026" },
          { role: "Software Engineer", period: "Present" },
        ],
      },
    },
    details: {
      "1": {
        responsibilities: [
          "Technical leadership of React, Next.js and TypeScript projects, defining stack, architecture standards and quality criteria",
          "Full-stack work whenever the product calls for it: Node.js APIs, authentication, Redis caching, server provisioning and deploy",
          "Requirements gathering and product definition before the code, covering business rules, integrations and cross-team impact",
          "Quality and business-rule validation of deliveries, with tests on critical flows and structured feedback to backend and frontend before publishing",
          "Security in the development routine: credentials moved to the server, protection headers and CSP in production, session hardening, logs free of personal data and vulnerable dependency management",
          "Type-check, lint and test pipelines on GitHub Actions, with E2E test automation and production error triage",
          "Deploy documentation, onboarding guides and application migration planning",
        ],
        impact: [
          "A mock data layer that cut front-to-back integration from days down to swapping the API address",
          "Around 3,000 tests running in the pipelines, sustaining continuous publishing across the main products",
          "Roughly 70% reduction in deploy time",
          "An in-house observability tool that replaced a paid monitoring extension",
          "A lead channel inside the chatbot, delivering continuously to the sales team",
          "Leading a cross-functional team as interim tech lead, with practices that outlived the interim period",
        ],
      },
    },
  },

  projects: {
    heading: "Projects",
    subtitle: "Systems I built at work, and what I build on my own",
    ongoing: "present",
    duration: {
      month: "{count} month",
      months: "{count} months",
      year: "{count} year",
      years: "{count} years",
    },
    moreTemplate: "+{count}",
    viewCase: "Read the case study",
    viewDetails: "See details",
    viewLive: "Visit the site",
    viewRepo: "View the code",
    backToPortfolio: "Back to the portfolio",
    stackHint: "Click any item to see what it is and where I use it",
    notFound: "Project not found",
    groups: {
      professional: "At work",
      personal: "Personal project",
    },
    labels: {
      problem: "The problem",
      stack: "Stack",
      architecture: "Architecture",
      period: "Period",
      role: "Role",
      repo: "Code",
      highlights: "What I did",
    },
    eyebrows: {
      problem: "01 / Context",
      stack: "02 / Tooling",
      architecture: "03 / How it works",
    },
    status: {
      live: "Live",
      wip: "In progress",
      archived: "Archived",
    },
    items: {
      observabilidade: {
        title: "Observability platform",
        tagline:
          "An in-house dashboard that replaced a paid monitoring extension",
        summary:
          "Brings conversations, queues and contacts into a single search, and visually tracks the leads the chatbot generates.",
        role: "Product, frontend, API and infrastructure",
        overview: [
          "While preparing the deploy I noticed the private keys were going out with the frontend bundle. I moved every endpoint into an own API, with server-side authentication and validation, and provisioned the machine from scratch.",
        ],
        highlights: [
          "Private keys headed for the bundle, moved into an API with server-side authentication",
          "Redis cache modeled per query type, serving refined data without repeating external calls",
          "Server provisioned from scratch with Nginx, PM2, Docker and Redis",
        ],
      },
      denuncias: {
        title: "Anonymous reporting channel",
        tagline:
          "Anonymity and data protection as requirements, not a footer notice",
        summary:
          "Experience, interface and integration of a channel where privacy and role-based access came before the code.",
        role: "Product spec, experience and frontend",
        overview: [
          "I planned the project from the start: I wrote the technical specification from the document I handed the team, gathered references and put sketches together before opening the editor. With Claude Design I went from sketch to a concrete screen quickly, and from there it was a cycle of refinement and testing until the result held up. Having the spec ready beforehand is what let the work advance in parallel with the backend.",
        ],
        highlights: [
          "The internal panel never identifies the reporter",
          "Protocol shown exactly once and the credential never shown again",
          "Always-generic lookup errors, so enumeration is not possible",
        ],
      },
      crm: {
        title: "CRM with editable content",
        tagline: "A content layer built like a headless CMS",
        summary:
          "From requirements to the first production version within days, with a layer that lets copy and blocks change without a new deploy.",
        role: "Requirements, interface and frontend",
        overview: [
          "I proposed and implemented an editable content layer built like a headless CMS, wired to a landing page that renders dynamic content per edit.",
        ],
        highlights: [
          "First version in production within days",
          "Copy and blocks editable without shipping a new deploy",
          "Born with test coverage, instead of getting tests bolted on later",
        ],
      },
      leads: {
        title: "Leads and referral platform",
        tagline: "Link tracking, a referral program and sales performance",
        summary:
          "I shipped the redesign to production and built the modules that followed: QR Code tracking, referrals with a public landing page, teams and a heatmap.",
        role: "Frontend, tests and CI",
        overview: [
          "In the tracking module I found the origin code was being lost on certain messaging platforms, a behavior the requirements never mentioned. I tested alternatives until I worked around it and documented the fix for the backend to apply.",
        ],
        highlights: [
          "Origin code lost outside the requirements: worked around and documented",
          "Link tracking with QR Code and export",
          "Went from zero automated tests to a full suite running in CI",
        ],
      },
      "automacao-atendimento": {
        title: "Automated support and telemetry",
        tagline: "Conversational flows plus the database that was missing",
        summary:
          "Automated support flows and the telemetry that started measuring what used to be plain counting.",
        role: "Flow architecture and telemetry",
        overview: [
          "I standardized the event records and created the support database that did not exist, since the contracted platform only offered counting. It now accumulates over 500 flow records a day, generated by users themselves as they move through support.",
        ],
        highlights: [
          "A telemetry base built from scratch, where before there was only counting",
          "Over 500 flow records a day, feeding decisions on data instead of guesswork",
          "Separate bots unified into one",
        ],
      },
      "automacoes-python": {
        title: "Python automations with AI",
        tagline:
          "Audio transcription, an indexed base and routines that run themselves",
        summary:
          "Scripts that take repetitive work out of the way: audio turning into text, content indexed for AI lookup, and batch analysis.",
        role: "Internal tooling, from the script to the report",
        overview: [
          "Speech-to-text transcription with a speech model, content indexed as embeddings for semantic search, and batch analysis that assesses topic, outcome and improvement points, with individual and consolidated reports.",
        ],
        highlights: [
          "Audio turned into searchable text, with no manual step in between",
          "Content indexed as embeddings, so the AI answers about the actual base instead of nothing",
          "One run analyzed 271 records for under $5 in tokens, work that used to take days",
        ],
      },
      deltalog: {
        title: "deltalog",
        tagline: "A technical blog with a file-based CMS and no database",
        summary:
          "Next.js 16 with Keystatic and Markdoc: content lives in files versioned in Git, with no database. Publishing opens a pull request, and the site ships static on Vercel.",
        role: "Personal project, end to end: product, architecture, code and deploy",
        overview: [
          "A blog planned from functional and non-functional requirements written before the first line of code, a process that became the first published post.",
          "With the constraint of having no CMS cost, I adopted Keystatic using GitHub as the content management layer and structured the project to support that versioned format.",
        ],
        highlights: [
          "Content as files versioned in Git, with no database",
          "Publishing opens a pull request on a content branch",
          "Static site on Vercel, with favicon and share cards generated from code",
        ],
      },
    },
    caseStudies: {
      deltalog: {
        intro:
          "Content versioned in Git, publishing through pull requests, static output. The CMS edits files in the repository itself.",
        repoNote: "Private repository, because drafts are versioned files",
        problem: [
          "I wanted a place of my own to record technical decisions while the context was still fresh: why I picked a tool, what broke along the way, what I would do differently. A hosted blog solves publishing and creates two problems in its place. The content ends up living in a database that is not mine, and every post depends on an editor I do not control.",
          "What I write there is what I lived through: a problem that came up in my own work, the decision I made, the result I measured. Content like that ages along with the project, so it has to be versioned the same way code is: reviewable in a diff, with history, and revertible. Hence the foundational decision every other one rests on: content as files in the repository, a CMS on top of them, zero database.",
        ],
        architectureIntro:
          "App Router with almost everything static. Two file-backed collections, read in Server Components, with no client data layer.",
        architecture: [
          "Posts as .mdoc and tools as .yaml, versioned in Git and edited through Keystatic in GitHub mode, which opens a pull request on its own branch.",
          "A single module-scoped reader holds every listing rule: draft filtering, reading time, pagination and related posts.",
          "Search and filters are a GET form plus links. The whole page works with JavaScript disabled.",
          "The admin route and the CMS API return 404 whenever no GitHub App is configured.",
          "Favicon, apple icon and share cards are generated from code. No binary image is versioned.",
        ],
        screenshotCaptions: [
          "Table of contents and anchors come from the same slug, built in the heading transform",
          "The whole filter runs over GET: the page works with JavaScript disabled",
          "Tools as entities, not tags: each one gets a page and a citation count",
        ],
        thumbnailAlt: "deltalog home page",
        ctaTitle: "The best way to see it is to browse the site",
        ctaDescription: "The blog is live, with the first post published.",
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
      "Engenharia de Produto": {
        name: "Product Engineering",
        badge: "Product",
      },
      "Soft Skills": { name: "Soft Skills", badge: "Soft" },
    },
    descriptions: {
      "Definição de Produto": {
        name: "Product definition",
        description:
          "Deciding what the system does and what it deliberately does not, before any screen or endpoint exists. Business rules, integrations and cross-team impact belong here, not halfway through implementation.",
        useCase:
          "Aligning backend, frontend and UI on the same decision, instead of finding the mismatch once the code is already written",
      },
      "Controle de Acesso por Perfil": {
        name: "Role-based access control",
        description:
          "Who sees what, defined by role and enforced on the server. The interface hides what the role should not see, but the API is what actually blocks it.",
        useCase:
          "An internal panel where each role sees only its own slice, without the API response carrying data the screen was going to hide",
      },
      Python: {
        name: "Python",
        description:
          "The language I reach for in automation and anything involving data and AI: routine scripts, batch processing and model integration.",
        useCase:
          "Audio transcription, content indexing for semantic search, and batch analysis that ends in a report",
      },
      Whisper: {
        name: "Whisper",
        description:
          "A speech recognition model that turns audio into text, holding up well against noise and accents.",
        useCase:
          "Audio turned into searchable text, ready to be indexed or analyzed with no manual step",
      },
      Embeddings: {
        name: "Embeddings",
        description:
          "A numeric representation of text that puts similar meanings close together. It is what makes searching by meaning possible instead of by exact word.",
        useCase:
          "An indexed base so the AI answers about real content instead of hallucinating what it does not have",
      },
      "Busca Semântica": {
        name: "Semantic search",
        description:
          "Search by proximity of meaning over an embedding-indexed base, rather than literal term matching.",
        useCase:
          "Finding the right record when the person asking does not use the exact words in the content",
      },
      Redis: {
        name: "Redis",
        description:
          "In-memory store used as cache and key-value database. Serves ready answers in microseconds and takes load off external APIs and the relational database.",
        useCase:
          "Cache modeled per query type, with the key derived from each request's slice, so expensive calls are not repeated",
      },
      Nginx: {
        name: "Nginx",
        description:
          "Web server and reverse proxy. Terminates TLS, serves static files and routes requests to the application processes.",
        useCase:
          "Front door of a server provisioned from scratch, with HTTPS and a proxy to the Node process",
      },
      PM2: {
        name: "PM2",
        description:
          "Process manager for Node in production. Keeps the app up, restarts it on failure and centralizes logs.",
        useCase:
          "Keeping a Node API running on an own server, with automatic restart and centralized logging",
      },
      "Requisitos (RF/RNF)": {
        name: "Requirements (FR/NFR)",
        description:
          "A functional requirement describes what the system does; a non-functional one describes the constraints. Writing both before the code exposes the decision nobody has made yet.",
        useCase:
          "Specification before implementation, so frontend and backend advance in parallel instead of one waiting on the other",
      },
      Keystatic: {
        name: "Keystatic",
        description:
          "A CMS that edits files in the repository itself instead of writing to a database. In GitHub mode every publish becomes a commit and a pull request on the content branch.",
        useCase:
          "Blogs and content sites that need history, diff review and revertibility, without running a database or an external service",
      },
      Markdoc: {
        name: "Markdoc",
        description:
          "A Markdown-based content language with a typed AST, custom tags and validation. Unlike MDX, it does not execute components inside the content.",
        useCase:
          "Content that needs custom blocks with an explicit contract, plus metadata derived from the AST such as reading time and table of contents",
      },
      Shiki: {
        name: "Shiki",
        description:
          "A syntax highlighter that uses VS Code grammars and resolves coloring at build time or on the server, shipping ready-made HTML.",
        useCase:
          "Code blocks on a static site without shipping a highlighter to the client, with a custom theme matched to the project palette",
      },
      Biome: {
        name: "Biome",
        description:
          "Linter and formatter in a single binary, written in Rust. Replaces ESLint and Prettier, includes import sorting and runs in a fraction of the time.",
        useCase:
          "Projects that want fast lint and format from one config, with no conflict between lint rules and formatting rules",
      },
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
