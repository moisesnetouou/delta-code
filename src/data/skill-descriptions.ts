export interface SkillDescription {
  name: string;
  description: string;
  useCase: string;
}

export const skillDescriptions: Record<string, SkillDescription> = {
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
      "Desenvolvimento web, automação, scripts, applications server-side",
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
      "Biblioteca de gerenciamento de estado simples e minimalista para React. API pequena mas poderosa.",
    useCase: "Estado global em aplicações React médias/pequenas",
  },
  "React Query": {
    name: "React Query",
    description:
      "Biblioteca para gerenciamento de estado de servidor (fetching, caching, sincronização).",
    useCase: "Aplicações que consomem APIs REST/GraphQL frequentemente",
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
    useCase: "Prototipagem rápida, MVPs, aplicações que precisam de UI pronta",
  },
  Shadcn: {
    name: "Shadcn/ui",
    description:
      "Coleção de componentes React reutilizáveis, copiados para o projeto. Totalmente customizáveis via TailwindCSS.",
    useCase: "Projetos que precisam de componentes acessíveis e customizáveis",
  },
  "Radix UI": {
    name: "Radix UI",
    description:
      "Primitivas de acessibilidade sem estilo. Base para construir componentes acessíveis.",
    useCase: "Criação de design systems customizados",
  },
  "styled-components": {
    name: "styled-components",
    description:
      "Biblioteca que permite escrever CSS no JavaScript usando template literals. Estilos dinâmicos baseados em props.",
    useCase: "Componentes estilizados com CSS-in-JS, theming",
  },
  "Styled Components": {
    name: "styled-components",
    description:
      "Biblioteca que permite escrever CSS no JavaScript usando template literals. Estilos dinâmicos baseados em props.",
    useCase: "Componentes estilizados com CSS-in-JS, theming",
  },
  "stitches.dev": {
    name: "stitches.dev",
    description:
      "Biblioteca de CSS-in-JS com zero-runtime. Define estilos em objetos JavaScript com type-safety e theming nativo.",
    useCase: "Performance máxima com CSS-in-JS, design systems performáticos",
  },
  Stitches: {
    name: "stitches.dev",
    description:
      "Biblioteca de CSS-in-JS com zero-runtime. Define estilos em objetos JavaScript com type-safety e theming nativo.",
    useCase: "Performance máxima com CSS-in-JS, design systems performáticos",
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
    useCase: "Validação de fluxos completos, APIs, interações entre módulos",
  },
  "Testes E2E": {
    name: "Testes E2E",
    description:
      "Testes que simulam o usuário real. Cobrem toda a aplicação do início ao fim.",
    useCase: "Validação de fluxos críticos, regression testing, smoke tests",
  },
  "Claude Code": {
    name: "Claude Code",
    description:
      "CLI de IA da Anthropic para automação de desenvolvimento. Executa tarefas, escreve código, analiza projetos.",
    useCase: "Automação de tarefas repetitivas, refactoring, code review",
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
    useCase: "Automação de processos de negócio, integrações entre serviços",
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
    useCase: "跟踪 tarefas, sprints, roadmaps",
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
      "Responsabilidade por decisões técnicas de arquitetura, padrões e qualidade de código.",
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
      "Marketing conversacional, automação de vendas, funis deMessenger/Instagram",
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
    useCase: "Blogs, sites de marketing, content sites, portais de notícias",
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
};
