export const pt = {
  hero: {
    title: "Frontend Engineer • React • Next.js",
    roles: ["Frontend Engineer", "Tech Lead", "Software Engineer"],
    tagline:
      "Frontend Engineer especializado em React e Next.js. Construo interfaces escaláveis com arquitetura sólida, testes automatizados e foco no produto, acelerando cada etapa com IA.",
    highlights: [
      "+5 anos de experiência",
      "React · Next.js · TypeScript",
      "Liderança técnica",
      "Testes & CI/CD automatizados",
    ],
    availability: "Disponível · Remoto · PT/EN",
    scroll: "Scroll",
    downloadCvAria: "Baixar Currículo",
  },

  nav: {
    about: "Sobre",
    howIWork: "Como Trabalho",
    journey: "Jornada",
    skills: "Habilidades",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },

  metrics: [
    { value: "+5", label: "anos construindo produtos" },
    { value: "70%", label: "menos tempo de deploy" },
    { value: "10×", label: "revisão de PR mais rápida" },
    { value: "4º dia", label: "da ideia à produção" },
  ],

  howIWork: {
    heading: "Como eu trabalho",
    subtitle: "Método e diferenciais que levo para cada projeto",
    items: [
      {
        title: "IA como alavanca",
        description:
          "Uso IA em cada etapa (design, código, testes e revisão) para entregar mais rápido, com a arquitetura e as decisões sempre minhas.",
      },
      {
        title: "Automação de testes própria",
        description:
          "Estrutura de testes ponta a ponta com Playwright MCP e pipeline de CI que roda a cada Pull Request.",
      },
      {
        title: "Produtos do zero à produção",
        description:
          "Da concepção e requisitos (RF/RNF) à UI e ao deploy, incluindo sistemas completos como um CRM e uma plataforma de observabilidade.",
      },
      {
        title: "Liderança técnica & mentoria",
        description:
          "Defino stack e padrões, reviso PRs e mentoro devs; atuei como Tech Lead de um time multidisciplinar.",
      },
    ],
  },

  about: {
    heading: "Sobre",
    bioTitle: "Desenvolvedor Frontend com +5 anos de experiência",
    summary: [
      "Frontend Engineer com +5 anos construindo interfaces escaláveis em React, Next.js e TypeScript. Atuo em arquitetura, liderança técnica e automação com IA no dia a dia, sempre com foco no produto e na experiência de quem usa.",
      "Uso IA como alavanca de entrega: montei um CLI próprio que analisa grandes volumes de tickets de suporte em uma única execução por poucos dólares em tokens, criei webhooks com n8n para viabilizar integrações que a plataforma original não expunha, e automatizei testes, revisão de PR e triagem de bugs. Resolvo em dias o que manualmente levaria semanas.",
      "Construo produtos do zero, da concepção à produção: estruturo documentos de requisitos (RF/RNF) para alinhar backend, frontend e UI, desenho a interface pensando na experiência do usuário e uso IA em cada etapa (design, código, testes e revisão). Em um dos projetos, a aplicação foi para produção no 4º dia.",
      "Já entreguei sistemas completos por conta própria, como um CRM com camada de conteúdo editável (nos moldes de um headless CMS) e uma plataforma de observabilidade para acompanhar fluxos em produção, com métricas diárias, identificação de onde o usuário trava e exportação de dados para relatórios gerados com IA.",
      "O que guia meu trabalho: planejamento antes do código, prazo cumprido sem abrir mão da qualidade, e consistência. Testes automatizados, padrões claros e revisão criteriosa caminhando junto com a velocidade.",
    ],
    location: "Manaus, Brasil",
    educationLabel: "Formação",
    languagesLabel: "Idiomas",
    certificationsLabel: "Certificações",
    course: "Ciência da Computação",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário" },
    ],
  },

  timeline: {
    heading: "Minha Jornada",
    subtitleTemplate: "{years}+ anos de experiência construindo soluções",
    responsibilitiesLabel: "Responsabilidades",
    impactLabel: "Impacto",
    technologiesLabel: "Tecnologias",
    clickForDetails: "Clique para ver detalhes",
    techDialogHint: "Clique em uma tecnologia para ver mais detalhes",
    moreTemplate: "+{count}",
    experiences: {
      "1": {
        role: "Frontend Engineer",
        period: "Set 2025 - Atual",
        location: "Manaus, Brasil",
        description:
          "Lidero a frente técnica de projetos frontend em React, Next.js e TypeScript: defino a stack, os padrões de arquitetura e as regras de qualidade que o time segue. Construí uma estrutura própria de automação de testes baseada no Playwright MCP, em que cada nova funcionalidade ganha testes ponta a ponta em poucos minutos, e o conjunto completo de testes (unitários, de integração e ponta a ponta) roda automaticamente no GitHub Actions a cada Pull Request. Integrei o Sentry MCP para identificar e resolver bugs em tempo real e desenvolvi um CLI próprio com IA capaz de analisar grandes volumes de tickets de suporte em uma única execução, por menos de US$ 5 em tokens, gerando relatórios que substituíram um trabalho manual de semanas. Automatizei a revisão de Pull Requests com o Claude Code, estruturo documentos de requisitos (RF/RNF) para alinhar backend, frontend e UI, e entrego produtos do zero usando IA em cada etapa, do design (Claude Design) à produção. Todo o deploy roda continuamente em stage e produção, sempre passando por verificação de tipos, padronização de código e testes antes de ir ao ar.",
      },
      "2": {
        role: "Tech Lead Temporário",
        period: "Jan 2026 - Abr 2026",
        location: "Manaus, Brasil",
        description:
          "Atuei como Tech Lead em um time multidisciplinar de cinco pessoas (2 frontend, 1 backend e 1 UX) durante um período de transição. Conduzi dailies, planejamentos e decisões técnicas, coordenei o alinhamento entre frontend e backend e apoiei diretamente as decisões de produto, validando soluções e desenhando a lógica antes de cada implementação. Mesmo sendo temporário, o time manteve a cadência de sprints e adotou melhorias permanentes no fluxo, como Husky para qualidade pré-commit e revisão de PR padronizada, práticas que continuaram após o interim.",
      },
      "3": {
        role: "Desenvolvedor Frontend Pleno",
        period: "Out 2022 - Set 2025",
        location: "Manaus, Brasil",
        description:
          "Atuei com autonomia técnica em projetos frontend e em automação conversacional (plataforma Blip), tomando decisões de stack e arquitetura sem depender do tech lead. Dei suporte e mentoria a desenvolvedores júnior e pleno, treinei novos devs nessas ferramentas e mantive uma documentação técnica de referência. Conduzi a estruturação de arquiteturas escaláveis e implementei a base de testes automatizados com Vitest, Testing Library, Cypress e Playwright. Foi nesse período que minha visão amadureceu: passei a enxergar o trabalho não só pela ótica do código, mas também pelo lado do produto e do impacto na experiência de quem usa.",
      },
      "4": {
        role: "Desenvolvedor Frontend Jr",
        period: "Jul 2021 - Set 2022",
        location: "Manaus, Brasil",
        description:
          "Primeira posição como desenvolvedor: trabalhei em aplicações web e blogs em React com Prismic, HTML, CSS e JavaScript, além de apps mobile com React Native e Expo. Criei e mantive a documentação de componentes em Storybook e desenvolvi do zero as primeiras soluções de automação conversacional em que atuei, criando padrões que foram reaproveitados depois. Entreguei mais de oito projetos no período, entre web, mobile e bots, e ajudei a iniciar a transição da stack para React.",
      },
    },
    details: {
      "1": {
        responsibilities: [
          "Defino stack, padrões de arquitetura e quality gates dos projetos frontend",
          "Construí o pipeline de testes (unitários, integração e E2E com Vitest e Playwright) integrado ao GitHub Actions em stage e produção",
          "Estruturo documentos de requisitos (RF/RNF) para alinhar backend, frontend e UI",
          "Desenvolvi um CLI próprio com IA para análise em lote de tickets de suporte",
          "Configurei integração com Sentry MCP para triagem de bugs em tempo real",
          "Codifiquei skills customizadas de code review com Claude Code",
          "Traduzo protótipos de UX em UIs responsivas (TailwindCSS, Shadcn, Radix)",
        ],
        impact: [
          "Produto do zero em produção no 4º dia: desenhei a UI pensando na experiência do usuário, converti o design em código com Claude e refinei o visual com Claude Design, aplicando padrões e testes via prompts e skills customizadas",
          "Entregas mais rápidas com IA atuando em cada etapa (design, código, testes e revisão), sem abrir mão da qualidade",
          "Tempo de deploy 70% menor com pipelines cobrindo verificação de tipos, padronização de código e testes",
          "Grandes volumes de tickets de suporte analisados em uma única execução por menos de US$ 5 em tokens, substituindo um trabalho manual de semanas",
          "Pull Requests revisados 10× mais rápido com Claude Code e skills customizadas",
          "Sistemas completos entregues do zero, como um CRM com camada de conteúdo editável (nos moldes de um headless CMS) e uma plataforma de observabilidade com métricas diárias e exportação de dados para relatórios via IA",
          "Novos testes ponta a ponta criados em minutos via Playwright MCP",
        ],
      },
      "2": {
        responsibilities: [
          "Liderei um time multidisciplinar de cinco pessoas (2 frontend, 1 backend e 1 UX)",
          "Conduzi dailies, planejamentos e decisões técnicas durante a transição",
          "Coordenei o alinhamento entre frontend e backend",
          "Apoiei decisões de produto, validando soluções e desenhando a lógica antes da implementação",
        ],
        impact: [
          "Time adotou Husky e revisão de PR automatizada, com fluxo padronizado que seguiu após o interim",
          "Sprints entregues no prazo durante toda a transição",
          "Frontend e backend alinhados sem retrabalho cruzado",
        ],
      },
      "3": {
        responsibilities: [
          "Atuava com autonomia técnica em projetos frontend e em automação conversacional",
          "Tomava decisões de stack e arquitetura sem depender do tech lead",
          "Mantinha a documentação técnica de referência dos projetos",
          "Treinava novos devs nas ferramentas de automação conversacional",
          "Estruturei arquiteturas escaláveis nos projetos",
          "Implementei a base de testes automatizados com Vitest, Testing Library, Cypress e Playwright",
        ],
        impact: [
          "Maturidade na visão de desenvolvedor, passando a enxergar produto e experiência, não apenas código",
          "Documentação técnica adotada como referência",
          "Mentoria 1:1 e code reviews recorrentes com o time júnior",
          "Base de testes automatizados adotada nos projetos",
        ],
      },
      "4": {
        responsibilities: [
          "Desenvolvi aplicações web e blogs em React com Prismic, HTML, CSS e JavaScript",
          "Construí aplicativos mobile com React Native e Expo",
          "Criei e mantive a documentação de componentes em Storybook",
          "Desenvolvi do zero as primeiras soluções de automação conversacional em que atuei",
        ],
        impact: [
          "Primeiras soluções de automação conversacional construídas do zero, com padrões reaproveitados depois",
          "+8 projetos web, mobile e bots entregues em ~14 meses",
          "Documentação de componentes em Storybook adotada como referência",
          "Primeiro emprego como desenvolvedor, base para a evolução nos cargos seguintes",
        ],
      },
    },
  },

  skills: {
    heading: "Habilidades",
    coreHeading: "Stack principal",
    whatIsLabel: "O que é",
    useCaseLabel: "Caso de Uso",
    categories: {
      "Frontend & Frameworks": {
        name: "Frontend & Frameworks",
        badge: "Front",
      },
      Mobile: { name: "Mobile", badge: "Mobile" },
      "Prototipação & Design": {
        name: "Prototipação & Design",
        badge: "Design",
      },
      "Automação & IA": { name: "Automação & IA", badge: "AI" },
      "Bots & Chatbots": { name: "Bots & Chatbots", badge: "Bots" },
      "CMS & Headless": { name: "CMS & Headless", badge: "CMS" },
      Backend: { name: "Backend", badge: "Back" },
      "Testes & Qualidade": { name: "Testes & Qualidade", badge: "Test" },
      "Ferramentas & Infra": { name: "Ferramentas & Infra", badge: "Infra" },
      "Soft Skills": { name: "Soft Skills", badge: "Soft" },
    },
    descriptions: {
      "React Native": {
        name: "React Native",
        description:
          "Framework para construção de aplicações mobile nativas (iOS/Android) usando React. Renderiza componentes nativos a partir de código JavaScript/TypeScript.",
        useCase:
          "Apps mobile cross-platform, MVPs com time frontend React, projetos que reaproveitam lógica web",
      },
      Expo: {
        name: "Expo",
        description:
          "Plataforma e toolchain para React Native. Facilita build, deploy, OTA updates, acesso a APIs nativas (camera, push, etc.) sem ejetar.",
        useCase:
          "Apps que querem velocidade de desenvolvimento, distribuição via TestFlight/Play Store sem setup nativo manual",
      },
      NativeWind: {
        name: "NativeWind",
        description:
          "Tailwind CSS para React Native. Permite estilizar componentes nativos com classes utilitárias do Tailwind, mantendo DX consistente com web.",
        useCase:
          "Equipes que já dominam Tailwind, apps que compartilham design tokens entre web e mobile",
      },
      Storybook: {
        name: "Storybook",
        description:
          "Ferramenta para desenvolvimento e documentação isolada de componentes UI. Renderiza cada componente em diferentes estados/variantes.",
        useCase:
          "Design systems, bibliotecas de componentes, validação visual e a11y antes de integrar à aplicação",
      },
      Vite: {
        name: "Vite",
        description:
          "Build tool moderno para front-end. Dev server instantâneo via ESM nativo, HMR rápido, build otimizado com Rollup.",
        useCase:
          "SPAs React/Vue/Svelte, libraries, projetos que precisam de DX rápida sem peso do Webpack",
      },
      React: {
        name: "React",
        description:
          "Biblioteca JavaScript para construção de interfaces de usuário componentizadas. Baseado em componentes reutilizáveis e estado reativo.",
        useCase: "Desenvolvimento de SPAs, dashboards, aplicações web modernas",
      },
      "Next.js": {
        name: "Next.js",
        description:
          "Framework React com renderização híbrida (SSR, SSG, CSR). Oferece routing, otimização de imagens e API routes.",
        useCase:
          "Aplicações fullstack, e-commerce, blogs, landing pages performáticas",
      },
      TypeScript: {
        name: "TypeScript",
        description:
          "Superset do JavaScript com tipagem estática. Aumenta segurança, produtividade e manutenibilidade do código.",
        useCase:
          "Projetos enterprise, codebases grandes, bibliotecas compartilhadas",
      },
      JavaScript: {
        name: "JavaScript",
        description:
          "Linguagem de programação principal para desenvolvimento web. Fundamento de toda a web moderna.",
        useCase:
          "Desenvolvimento web, automação, scripts, aplicações server-side",
      },
      "HTML/CSS": {
        name: "HTML/CSS",
        description:
          "Fundamentos da web: HTML para estrutura semântica e CSS para estilização e layout responsivo.",
        useCase: "Qualquer projeto web, e-mails HTML, landing pages",
      },
      TailwindCSS: {
        name: "TailwindCSS",
        description:
          "Framework CSS utilitário para estilização rápida. Permite criar designs customizados sem sair do HTML.",
        useCase: "Projetos que precisam de customização visual rápida e única",
      },
      Zustand: {
        name: "Zustand",
        description:
          "Estado global pra React em ~1KB. Sem provider, sem boilerplate, só hook e setState.",
        useCase: "Estado global em aplicações React médias e pequenas",
      },
      "React Query": {
        name: "React Query",
        description:
          "Camada de cache para dados de servidor. Cuida de fetch, refetch, invalidação e sincronização entre abas.",
        useCase: "Aplicações que consomem APIs REST ou GraphQL frequentemente",
      },
      Zod: {
        name: "Zod",
        description:
          "Biblioteca de validação de esquema TypeScript. Valida dados em runtime com tipagem em compile-time.",
        useCase: "Validação de formulários, APIs, configurações",
      },
      "Chakra UI": {
        name: "Chakra UI",
        description:
          "Biblioteca de componentes React com design system integrado. Focada em acessibilidade e flexibilidade.",
        useCase:
          "Prototipagem rápida, MVPs, aplicações que precisam de UI pronta",
      },
      Shadcn: {
        name: "Shadcn/ui",
        description:
          "Coleção de componentes React reutilizáveis, copiados para o projeto. Totalmente customizáveis via TailwindCSS.",
        useCase:
          "Projetos que precisam de componentes acessíveis e customizáveis",
      },
      "Radix UI": {
        name: "Radix UI",
        description:
          "Primitivas de acessibilidade sem estilo. Base para construir componentes acessíveis.",
        useCase: "Criação de design systems customizados",
      },
      "Styled Components": {
        name: "styled-components",
        description:
          "Biblioteca que permite escrever CSS no JavaScript usando template literals. Estilos dinâmicos baseados em props.",
        useCase: "Componentes estilizados com CSS-in-JS, theming",
      },
      Stitches: {
        name: "stitches.dev",
        description:
          "Biblioteca de CSS-in-JS com zero-runtime. Define estilos em objetos JavaScript com type-safety e theming nativo.",
        useCase:
          "Performance máxima com CSS-in-JS, design systems performáticos",
      },
      Vitest: {
        name: "Vitest",
        description:
          "Framework de testes unitários rápido e moderno. Compatível com Jest API e nativo em Vite.",
        useCase: "Testes unitários em projetos Vite/Next.js",
      },
      "Testing Library": {
        name: "Testing Library",
        description:
          "Biblioteca de testes focada em interação do usuário. Testa comportamento, não implementação.",
        useCase: "Testes de integração e unitários centrados no usuário",
      },
      Cypress: {
        name: "Cypress",
        description:
          "Framework E2E moderno com interface visual. Excelente DX e debug automático.",
        useCase: "Testes end-to-end, testes de regressão visual",
      },
      Playwright: {
        name: "Playwright",
        description:
          "Framework E2E da Microsoft. Suporta múltiplos browsers, múltiplas abas e network interception.",
        useCase: "Testes E2E complexos, automação de browser, scraping",
      },
      Jest: {
        name: "Jest",
        description:
          "Framework de testes JavaScript mais popular. Mocking poderoso e coverage integrado.",
        useCase: "Testes unitários em projetos JavaScript/TypeScript",
      },
      "Testes Unitários": {
        name: "Testes Unitários",
        description:
          "Testes que verificam a menor unidade de código possível. Base da pirâmide de testes.",
        useCase: "Validação de funções, componentes, lógicas de negócio",
      },
      "Testes de Integração": {
        name: "Testes de Integração",
        description:
          "Testes que verificam a interação entre múltiplas unidades. Falha quando a integração quebra.",
        useCase:
          "Validação de fluxos completos, APIs, interações entre módulos",
      },
      "Testes E2E": {
        name: "Testes E2E",
        description:
          "Testes que simulam o usuário real. Cobrem toda a aplicação do início ao fim.",
        useCase:
          "Validação de fluxos críticos, regression testing, smoke tests",
      },
      Claude: {
        name: "Claude",
        description:
          "Conjunto de ferramentas de IA da Anthropic que uso no fluxo completo de desenvolvimento. Claude Code dentro do terminal lê o repositório, propõe diffs, roda comandos e abre Pull Requests. Claude Design ajuda na criação e refino de estilos e identidade visual. Servidores MCP (Sentry, Playwright e outros) extendem o agente para tarefas como triagem de bugs e geração de testes. Skills customizadas e prompts próprios deixam tudo isso adaptado ao projeto.",
        useCase:
          "Pair programming com IA, automação de code review, geração de testes, criação e refino de UI, triagem de bugs em produção",
      },
      OpenCode: {
        name: "OpenCode",
        description:
          "Agente de IA para desenvolvimento de software. Ajuda com debugging, refactoring e implementação.",
        useCase: "Pair programming com IA, debugging assistido",
      },
      "Playwright MCP": {
        name: "Playwright MCP",
        description:
          "Model Context Protocol para Playwright. Permite usar IA para criar e executar testes automatizados.",
        useCase:
          "Automação de testes com IA, geração de testes a partir de behavior",
      },
      "Sentry MCP": {
        name: "Sentry MCP",
        description:
          "Integração Sentry com MCP. Monitoramento de erros e performance com assistência de IA.",
        useCase: "Debugging de produção, monitoramento de performance",
      },
      n8n: {
        name: "n8n",
        description:
          "Ferramenta de automação de workflows open-source. Conecta APIs e automatiza processos.",
        useCase:
          "Automação de processos de negócio, integrações entre serviços",
      },
      "CLI customizado com IA": {
        name: "CLI customizado com IA",
        description:
          "Linha de comando personalizada integrada com IA para automatizar tarefas específicas do projeto.",
        useCase: "Tarefas recorrentes, scaffolding, geração de código",
      },
      "Automação de Processos": {
        name: "Automação de Processos",
        description:
          "Uso de tecnologia para eliminar tarefas manuais repetitivas e aumentar eficiência.",
        useCase: "CI/CD, deploys, notificações, integrações",
      },
      "Node.js": {
        name: "Node.js",
        description:
          "Runtime JavaScript server-side. Permite executar JS fora do navegador.",
        useCase: "APIs, microservices, ferramentas CLI, real-time apps",
      },
      Fastify: {
        name: "Fastify",
        description:
          "Framework web Node.js focado em performance e baixo overhead. Excelente para APIs rápidas.",
        useCase: "REST APIs de alta performance, microservices",
      },
      Prisma: {
        name: "Prisma",
        description:
          "ORM TypeScript para Node.js e TypeScript. Schema-first com migrations integradas.",
        useCase: "Acesso a banco de dados com type-safety",
      },
      Drizzle: {
        name: "Drizzle",
        description:
          "ORM TypeScript leve e rápido. Mais próximo do SQL, menos abstraction que outros ORMs.",
        useCase: "Projetos que precisam de controle fino sobre SQL",
      },
      "REST API": {
        name: "REST API",
        description:
          "Convenção de design de APIs usando HTTP. Recursos, verbs e status codes padronizados.",
        useCase: "Integração frontend-backend, microservices",
      },
      PostgreSQL: {
        name: "PostgreSQL",
        description:
          "Banco de dados relacional open-source robusto. Suporta JSON, full-text search e extensões.",
        useCase: "Aplicações que precisam de dados relacionais confiáveis",
      },
      Git: {
        name: "Git",
        description:
          "Sistema de controle de versão distribuído. Fundamental para desenvolvimento colaborativo.",
        useCase: "Versionamento de código, branches, code review",
      },
      "GitHub Actions": {
        name: "GitHub Actions",
        description:
          "Plataforma de CI/CD do GitHub. Automatiza build, test e deploy direto do repositório.",
        useCase: "CI/CD, automação de workflows, deploy automático",
      },
      "CI/CD": {
        name: "CI/CD",
        description:
          "Continuous Integration/Continuous Deployment. Automação de entrega de software.",
        useCase: "Quality gates, deploys automáticos, feature flags",
      },
      Jira: {
        name: "Jira",
        description:
          "Ferramenta de gestão de projetos da Atlassian. Muito usada para agile/Scrum.",
        useCase: "Gestão de tarefas, sprints e roadmaps",
      },
      Vercel: {
        name: "Vercel",
        description:
          "Plataforma de deploy para Next.js e frontends. CI/CD integrado com edge functions.",
        useCase: "Deploy de Next.js, serverless, preview deployments",
      },
      Railway: {
        name: "Railway",
        description:
          "Plataforma de deploy moderna com suporte a múltiplas linguagens. Easy setup.",
        useCase: "Deploy de APIs, databases, aplicações fullstack",
      },
      Docker: {
        name: "Docker",
        description:
          "Plataforma de containerização. Empacota aplicações com suas dependências.",
        useCase: "Consistência entre ambientes, microservices, dev containers",
      },
      Deploy: {
        name: "Deploy",
        description:
          "Processo de disponibilizar aplicação em ambiente de produção.",
        useCase: "Cloud hosting, CD pipelines, zero-downtime deploys",
      },
      "Liderança Técnica": {
        name: "Liderança Técnica",
        description:
          "Decisões de stack, arquitetura e qualidade, equilibrando velocidade do time com dívida técnica controlada.",
        useCase: "Tech leads, arquitetos, mentoria de times",
      },
      Mentoria: {
        name: "Mentoria",
        description:
          "Apoio e orientação para desenvolvedores menos experientes evoluírem em sua carreira.",
        useCase: "Onboarding, 1:1s, pair programming, code review",
      },
      Scrum: {
        name: "Scrum",
        description:
          "Framework ágil de desenvolvimento com sprints, dailies, retrospectivas e planejamento.",
        useCase: "Desenvolvimento iterativo, times ágeis",
      },
      Kanban: {
        name: "Kanban",
        description:
          "Metodologia ágil focada em fluxo. Visualiza trabalho com board de colunas.",
        useCase: "Times que precisam de fluxo contínuo, menos cerimonial",
      },
      "Pensamento Crítico": {
        name: "Pensamento Crítico",
        description:
          "Habilidade de analisar problemas de múltiplos ângulos antes de propor soluções.",
        useCase: "Decisões técnicas, debugging, arquitetura",
      },
      Comunicação: {
        name: "Comunicação",
        description:
          "Capacidade de expressar ideias técnicas e de produto de forma clara para diferentes públicos.",
        useCase: "Reuniões, documentações, apresentações, alinhamentos",
      },
      "Documentação Técnica": {
        name: "Documentação Técnica",
        description:
          "Criação de docs claras sobre código, arquitetura, fluxos e decisões técnicas.",
        useCase: "Onboarding, manutenibilidade, knowledge base",
      },
      Blip: {
        name: "Blip",
        description:
          "Plataforma brasileira de criação de chatbots multicanal. Permite integrar WhatsApp, Instagram, Telegram e outros canais em uma única plataforma.",
        useCase:
          "Criação de bots de atendimento, vendas, suporte e automação de mensagens",
      },
      "Criação de Fluxograma": {
        name: "Criação de Fluxograma",
        description:
          "Modelagem visual de fluxos de conversa para chatbots. Utiliza ferramentas como Blip Studio para definir decisões, condições e ações.",
        useCase:
          "Designer de conversas, planejamento de fluxos de atendimento automatizado",
      },
      "Arquiteto de Bot": {
        name: "Arquiteto de Bot",
        description:
          "Papel de definir a estrutura, arquitetura e estratégia de chatbots. Envolve planejamento de conversas, integrações e experiência do usuário.",
        useCase:
          "Definição de estratégias de automação, projetos de bots enterprise",
      },
      "RD Conversas": {
        name: "RD Conversas",
        description:
          "Plataforma de automação de conversas da RD Station. Focada em marketing conversacional e nutrição de leads.",
        useCase:
          "Automação de marketing, chatbots para inbound marketing, nutrição de leads",
      },
      ManyChat: {
        name: "ManyChat",
        description:
          "Plataforma de chatbot para marketing no WhatsApp, Instagram e Facebook. Focada em automação de marketing e vendas.",
        useCase:
          "Marketing conversacional, automação de vendas, funis de Messenger e Instagram",
      },
      BotConversas: {
        name: "BotConversas",
        description:
          "Plataforma brasileira de chatbots com foco em WhatsApp. Oferece interface visual para criação de fluxos e integrações.",
        useCase: "Atendimento via WhatsApp, automação de suporte, vendas",
      },
      Prismic: {
        name: "Prismic",
        description:
          "CMS headless baseado em slices. Permite criar conteúdo flexível e personalizado com Slice Machine. Ótimo para blogs e marketing sites.",
        useCase:
          "Blogs, sites de marketing, content sites, portais de notícias",
      },
      Hygraph: {
        name: "Hygraph",
        description:
          "CMS headless GraphQL-native. Oferece content federation, localization avançada e schema flexível. Formerly known as GraphCMS.",
        useCase:
          "Portais de conteúdo, e-commerce headless, apps multi-canal, localization",
      },
      Figma: {
        name: "Figma",
        description:
          "Ferramenta de design colaborativo baseada em navegador. Permite criar interfaces, protótipos e sistemas de design.",
        useCase:
          "UI/UX design, prototipação, design systems, colaboração em tempo real",
      },
      Pencil: {
        name: "Pencil",
        description:
          "Ferramenta gratuita de prototipação de interface. Leve e simples para criar wireframes e mockups rápidos.",
        useCase: "Wireframes, prototipação rápida, brainstorming de interfaces",
      },
      FigJam: {
        name: "FigJam",
        description:
          "Ferramenta de colaboração visual do ecossistema Figma. Ideal para fluxos, mapas mentais e workshops remotos.",
        useCase:
          "Fluxos de bot, mapas mentais, brainstorming colaborativo, workshops",
      },
      Swagger: {
        name: "Swagger",
        description:
          "Conjunto de ferramentas para design, construção e documentação de APIs REST. Usa especificação OpenAPI.",
        useCase: "Documentação de APIs, design de APIs, testes de endpoints",
      },
    },
  },

  contact: {
    heading: "Contato",
    sendMessage: "Enviar Mensagem",
    downloadCv: "Baixar Currículo",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  achievements: {
    panelTitle: "Conquistas",
    progress: "Progresso",
    reset: "Resetar Conquistas",
    newAchievement: "Nova Conquista!",
    secretRevealed: "Conquista Secreta Revelada!",
    secretLockedTitle: "Conquista Secreta",
    secretLockedDescription: "???",
    ctaText: "Curtiu? Vamos conversar",
    items: {
      welcome: {
        title: "Bem-vindo",
        description: "Você visitou meu portfólio",
      },
      view_journey: {
        title: "Explorador",
        description: "Explorou minha jornada",
      },
      view_contact: {
        title: "Fechamento",
        description: "Chegou ao final do portfólio",
      },
      open_experience: {
        title: "Detalhista",
        description: "Viu detalhes de uma experiência",
      },
      open_skill: {
        title: "Aprendizado",
        description: "Viu detalhes de uma skill",
      },
      curious: {
        title: "Curioso",
        description: "Abriu 3 skills diferentes",
      },
      click_linkedin: {
        title: "Networking",
        description: "Visitou meu LinkedIn",
      },
      click_github: {
        title: "Código Aberto",
        description: "Visitou meu GitHub",
      },
      download_cv: {
        title: "Currículo Obtido",
        description: "Você baixou meu currículo",
      },
      return_visitor: {
        title: "Retorno Bem-sucedido",
        description: "Revisitou meu portfólio",
      },
      platinum: {
        title: "Conquista Secreta",
        description: "Você explorou todo o portfólio!",
      },
    },
  },

  common: {
    close: "Fechar",
    backToTop: "Voltar ao topo",
  },
};
