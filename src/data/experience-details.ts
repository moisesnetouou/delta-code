export const experienceDetails: Record<
  string,
  { responsibilities: string[]; impact: string[] }
> = {
  "1": {
    responsibilities: [
      "Defino stack, padrões de arquitetura e quality gates dos projetos frontend",
      "Construí o pipeline E2E (Vitest, Playwright e GitHub Actions) integrado a stage e production",
      "Implementei um CLI próprio com IA para análise em lote de tickets",
      "Configurei integração com Sentry MCP para triagem de bugs em tempo real",
      "Codifiquei skills customizadas de code review com Claude Code",
      "Traduzo protótipos de UX em UIs responsivas (TailwindCSS, Shadcn, Radix)",
    ],
    impact: [
      "Aplicação inteira do zero entregue em produção no 4º dia: desenhei a UI no Stitch beta pensando na experiência do usuário, converti o design em código com Claude e refinei o visual com Claude Design, aplicando padrões e testes via prompts e skills customizadas",
      "Entregas no geral mais rápidas com IA atuando em cada etapa do fluxo (design, código, testes e revisão), sem abrir mão da qualidade",
      "Tempo de deploy 70% menor com pipelines no GitHub Actions cobrindo verificação de tipos, padronização de código e testes",
      "300 tickets do Blip analisados em uma única execução por menos de US$ 5 em tokens, um exemplo entre outros projetos do tipo",
      "Pull Requests revisados 10× mais rápido com Claude Code e skills customizadas",
      "Novos testes ponta a ponta criados em minutos via Playwright MCP",
    ],
  },
  "2": {
    responsibilities: [
      "Liderei time multidisciplinar de cinco pessoas (2 frontend, 1 backend e 1 UX)",
      "Conduzi dailies, planejamentos e decisões técnicas durante a transição",
      "Coordenei o alinhamento entre frontend e backend",
      "Apoiei decisões de produto, validando soluções e ajudando a desenhar a lógica antes da implementação",
    ],
    impact: [
      "Time adotou Husky e análise de PR automatizada, fluxo de revisão padronizado pós-interim",
      "Sprints entregues no prazo durante toda a transição",
      "Frontend e backend alinhados em 4 sprints sem retrabalho cruzado",
    ],
  },
  "3": {
    responsibilities: [
      "Atuava com autonomia técnica em projetos frontend e fluxos de chatbot",
      "Tomava decisões de stack e arquitetura sem necessidade de aprovação do tech lead",
      "Mantinha a documentação técnica de projetos frontend e fluxos Blip",
      "Treinava novos devs em construção de chatbots e fluxos na plataforma Blip",
      "Estruturei arquiteturas escaláveis nos projetos de maior visibilidade",
      "Implementei a base de testes automatizados com Vitest, Testing Library, Cypress e Playwright",
    ],
    impact: [
      "Maturidade na visão de desenvolvedor, passando a enxergar produto e experiência do usuário, não apenas código",
      "Documentação técnica ainda em uso pelo time",
      "Time júnior promovido com mentoria 1:1 e code reviews recorrentes",
      "Base de testes automatizados (Vitest, Testing Library, Cypress, Playwright) adotada nos projetos",
    ],
  },
  "4": {
    responsibilities: [
      "Desenvolvi aplicações web e blogs em React com PrismicCMS, HTML, CSS e JavaScript",
      "Construí aplicativos mobile com React Native e Expo",
      "Criei e mantive a documentação de componentes em Storybook",
      "Projetei e implementei do zero o primeiro chatbot da empresa",
    ],
    impact: [
      "Primeiro bot da empresa construído do zero, base para a vertical Bots & Chatbots",
      "+8 projetos web, mobile e bot entregues em ~14 meses",
      "Documentação de componentes em Storybook adotada como referência interna",
      "Primeiro emprego como desenvolvedor, base para evolução nos cargos seguintes",
    ],
  },
};
