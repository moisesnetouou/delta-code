export const pt = {
  hero: {
    roles: ["Engenheiro de Software", "Tech Lead", "Frontend Engineer"],
    tagline:
      "Engenheiro de Software com +5 anos em React, Next.js e TypeScript, atuando do requisito à produção: interface, API, testes, deploy e observabilidade. A arquitetura e as decisões são minhas; uso IA para executar mais rápido, não para decidir por mim.",
    highlights: [
      "+5 anos de experiência",
      "React · Next.js · Node.js",
      "Do requisito à produção",
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
    projects: "Projetos",
    skills: "Habilidades",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },

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
    bioTitle: "Engenheiro de Software com +5 anos, do requisito à produção",
    summary: [
      "Engenheiro de Software com +5 anos em React, Next.js e TypeScript, atuando do requisito à produção: interface, API, testes, deploy e observabilidade. A arquitetura e as decisões técnicas são minhas; uso IA para executar mais rápido, não para decidir por mim.",
      "Já parti de uma necessidade de negócio, escrevi a especificação, construí a interface e o backend e coloquei a aplicação no ar em servidor que eu mesmo provisionei. Entrei na empresa para construir interfaces e hoje respondo pelo ciclo completo dos produtos.",
      "Como tech lead interino conduzi um time multidisciplinar, acompanhei dois desenvolvedores de perto e deixei práticas que seguiram depois do interim, como padronização de revisão de PR. Antes disso, como pleno, tive autonomia de stack e arquitetura, fiz mentoria de júniores e criei a documentação de componentes que virou referência interna.",
      "Depois de cinco anos construindo produto dentro de uma mesma operação, procuro aplicar essa bagagem em outro tipo de negócio e de cliente, em times onde o software é o produto central.",
    ],
    location: "Manaus, Brasil",
    educationLabel: "Formação",
    languagesLabel: "Idiomas",
    certificationsLabel: "Certificações",
    highlightsLabel: "Destaques & Impacto",
    highlights: [
      {
        label: "Segurança",
        description:
          "Identifiquei chaves privadas indo para o bundle do frontend e migrei toda a comunicação para uma API própria com autenticação no servidor.",
      },
      {
        label: "Custo",
        description:
          "Construí a ferramenta interna de observabilidade que substituiu uma extensão paga de monitoramento, eliminando um custo recorrente.",
      },
      {
        label: "Receita",
        description:
          "Criei um canal dentro do chatbot que alimenta a base de leads de forma contínua, com acompanhamento visual do volume gerado e entrega direta ao time comercial.",
      },
      {
        label: "Velocidade",
        description:
          "Reduzi o tempo de deploy em cerca de 70% e a integração entre front e back de dias para minutos.",
      },
      {
        label: "Qualidade",
        description:
          "Suíte de testes que sustenta publicação contínua nos principais produtos, com cerca de 3.000 testes rodando nos pipelines.",
      },
    ],
    course: "Ciência da Computação",
    languages: [
      { name: "Português", level: "Nativo" },
      {
        name: "Inglês",
        level: "Leitura e escrita intermediárias, conversação básica",
      },
    ],
  },

  timeline: {
    heading: "Minha Jornada",
    subtitleTemplate: "{years}+ anos de experiência construindo soluções",
    responsibilitiesLabel: "Responsabilidades",
    impactLabel: "Impacto",
    technologiesLabel: "Tecnologias",
    progressionLabel: "Progressão",
    clickForDetails: "Clique para ver detalhes",
    techDialogHint: "Clique em uma tecnologia para ver mais detalhes",
    moreTemplate: "+{count}",
    experiences: {
      "1": {
        role: "Engenheiro de Software",
        period: "Jul 2021 - Atual",
        location: "Manaus e Home Office",
        description:
          "Entrei para construir interfaces e hoje respondo pelo ciclo completo dos produtos: defino stack, padrões de arquitetura e critérios de qualidade, e atuo full-stack quando o produto exige.",
        progression: [
          { role: "Frontend Jr", period: "2021" },
          { role: "Frontend Pleno", period: "2022" },
          { role: "Tech Lead interino", period: "Jan - Abr 2026" },
          { role: "Engenheiro de Software", period: "Atual" },
        ],
      },
    },
    details: {
      "1": {
        responsibilities: [
          "Liderança técnica de projetos em React, Next.js e TypeScript, definindo stack, padrões de arquitetura e critérios de qualidade",
          "Atuação full-stack quando o produto exige: APIs em Node.js, autenticação, cache em Redis, provisionamento de servidor e deploy",
          "Levantamento de requisitos e definição de produto antes do código, incluindo regras de negócio, integrações e impacto entre times",
          "Validação de qualidade e de regra de negócio das entregas, com testes de fluxos críticos e retorno estruturado para backend e frontend antes da publicação",
          "Segurança na rotina de desenvolvimento: credenciais movidas para o servidor, cabeçalhos de proteção e CSP em produção, hardening de sessão, logs sem dado pessoal e gestão de dependências vulneráveis",
          "Pipelines de tipagem, lint e testes no GitHub Actions, com automação de testes E2E e triagem de erros em produção",
          "Documentação de deploy, guias de onboarding e planejamento de migração de aplicações",
        ],
        impact: [
          "Camada de dados simulados que reduziu a integração entre front e back de dias para a troca do endereço da API",
          "Cerca de 3.000 testes em execução nos pipelines, sustentando publicação contínua nos principais produtos",
          "Redução de cerca de 70% no tempo de deploy",
          "Ferramenta interna de observabilidade que substituiu uma extensão paga de monitoramento",
          "Canal de leads dentro do chatbot, com entrega contínua para o time comercial",
          "Condução de um time multidisciplinar como tech lead interino, com práticas que seguiram depois do interim",
        ],
      },
    },
  },

  projects: {
    heading: "Projetos",
    subtitle:
      "Sistemas que construí na carreira e o que faço por conta própria",
    ongoing: "atual",
    duration: {
      month: "{count} mês",
      months: "{count} meses",
      year: "{count} ano",
      years: "{count} anos",
    },
    moreTemplate: "+{count}",
    viewCase: "Ver case study",
    viewDetails: "Ver detalhes",
    viewLive: "Ver o site",
    viewRepo: "Ver o código",
    backToPortfolio: "Voltar ao portfólio",
    stackHint: "Clique em qualquer item para ver o que é e onde eu uso",
    notFound: "Projeto não encontrado",
    groups: {
      professional: "Na carreira",
      personal: "Projeto pessoal",
    },
    labels: {
      problem: "O problema",
      stack: "Stack",
      architecture: "Arquitetura",
      period: "Período",
      role: "Papel",
      repo: "Código",
      highlights: "O que eu fiz",
    },
    eyebrows: {
      problem: "01 / Contexto",
      stack: "02 / Ferramentas",
      architecture: "03 / Como funciona",
    },
    status: {
      live: "No ar",
      wip: "Em desenvolvimento",
      archived: "Arquivado",
    },
    items: {
      observabilidade: {
        title: "Plataforma de observabilidade",
        tagline:
          "Painel próprio que substituiu uma extensão paga de monitoramento",
        summary:
          "Reúne atendimentos, filas e contatos em uma busca só, e acompanha visualmente as leads que o chatbot gera.",
        role: "Produto, frontend, API e infraestrutura",
        overview: [
          "Preparando o deploy, percebi que as chaves privadas iriam junto no bundle do frontend. Migrei todos os endpoints para uma API própria, com autenticação e validação no servidor, e provisionei a máquina do zero.",
        ],
        highlights: [
          "Chaves privadas que iriam para o bundle, movidas para uma API com autenticação no servidor",
          "Cache em Redis modelado por tipo de consulta, servindo dado já refinado sem repetir chamada externa",
          "Servidor provisionado do zero com Nginx, PM2, Docker e Redis",
        ],
      },
      denuncias: {
        title: "Canal de denúncias anônimo",
        tagline: "Anonimato e LGPD como requisito, não como aviso de rodapé",
        summary:
          "Experiência, interface e integração de um canal onde privacidade e controle de acesso por perfil vieram antes do código.",
        role: "Especificação de produto, experiência e frontend",
        overview: [
          "Planejei o projeto desde o começo: escrevi a especificação técnica a partir do documento que entreguei ao time, levantei referências e montei rascunhos antes de abrir o editor. Com o Claude Design saí do rascunho para tela concreta em pouco tempo, e dali foi ciclo de refinamento e teste até fechar o resultado. Ter a especificação pronta antes é o que permitiu avançar em paralelo ao backend.",
        ],
        highlights: [
          "Nenhuma identificação de quem denunciou no painel interno",
          "Protocolo exibido uma única vez e credencial nunca reexibida",
          "Erro sempre genérico na consulta, para não permitir enumeração",
        ],
      },
      crm: {
        title: "CRM com conteúdo editável",
        tagline: "Camada de conteúdo nos moldes de um headless CMS",
        summary:
          "Dos requisitos à primeira versão em produção em poucos dias, com uma camada que deixa ajustar texto e bloco sem novo deploy.",
        role: "Requisitos, interface e frontend",
        overview: [
          "Propus e implementei uma camada de conteúdo editável nos moldes de um headless CMS, integrada a uma landing page que renderiza conteúdo dinâmico por edição.",
        ],
        highlights: [
          "Primeira versão em produção em poucos dias",
          "Texto e bloco editáveis sem precisar de novo deploy",
          "Nasceu com cobertura de testes, em vez de ganhar testes depois",
        ],
      },
      leads: {
        title: "Plataforma de leads e indicação",
        tagline:
          "Rastreio de links, programa de indicação e performance de vendas",
        summary:
          "Apliquei o redesign em produção e construí os módulos seguintes: rastreio com QR Code, indicação com landing pública, equipes e heatmap.",
        role: "Frontend, testes e CI",
        overview: [
          "No rastreio, descobri que o código de origem se perdia em certas plataformas de mensagem, comportamento que não estava nos requisitos. Testei alternativas até contornar e documentei a solução para o backend aplicar.",
        ],
        highlights: [
          "Código de origem se perdendo fora dos requisitos: contornado e documentado",
          "Rastreio de links com QR Code e exportação",
          "Saiu de zero teste automatizado para uma suíte completa com CI",
        ],
      },
      "automacao-atendimento": {
        title: "Atendimento automatizado e telemetria",
        tagline: "Fluxos conversacionais com a base de dados que faltava",
        summary:
          "Fluxos de atendimento automatizado e a telemetria que passou a medir o que antes era só contagem básica.",
        role: "Arquitetura de fluxos e telemetria",
        overview: [
          "Padronizei os registros de eventos e criei a base de dados de atendimento que não existia, já que a plataforma contratada oferecia apenas contagem. Hoje ela acumula mais de 500 registros de fluxo por dia, gerados pelos próprios usuários ao percorrer o atendimento.",
        ],
        highlights: [
          "Base de telemetria criada do zero, onde antes só havia contagem",
          "Mais de 500 registros de fluxo por dia, alimentando decisão por dado em vez de suposição",
          "Bots distintos unificados em um só",
        ],
      },
      "automacoes-python": {
        title: "Automações em Python com IA",
        tagline:
          "Transcrição de áudio, base indexada e rotinas que rodam sozinhas",
        summary:
          "Scripts que tiram trabalho repetitivo do caminho: áudio virando texto, conteúdo indexado para consulta por IA e análise em lote.",
        role: "Ferramentas internas, do script ao relatório",
        overview: [
          "Transcrição de áudio para texto com modelo de fala, indexação de conteúdo em embeddings para busca semântica, e análise em lote que avalia tema, desfecho e pontos de melhoria, com relatório individual e consolidado.",
        ],
        highlights: [
          "Áudio virando texto pesquisável, sem passo manual no meio",
          "Conteúdo indexado em embeddings, para a IA responder sobre a base em vez de sobre o nada",
          "Uma rodada analisou 271 registros por menos de US$ 5 em tokens, trabalho que antes levaria dias",
        ],
      },
      deltalog: {
        title: "deltalog",
        tagline: "Blog técnico com CMS baseado em arquivos, sem banco de dados",
        summary:
          "Next.js 16 com Keystatic e Markdoc: o conteúdo mora em arquivos versionados no Git, sem banco de dados. Publicação abre pull request, e o site sobe estático na Vercel.",
        role: "Projeto pessoal, ponta a ponta: produto, arquitetura, código e deploy",
        overview: [
          "Blog planejado a partir de requisitos funcionais e não funcionais escritos antes da primeira linha de código, processo que virou o primeiro post publicado.",
          "Com a restrição de não ter custo de CMS, adotei o Keystatic usando o GitHub como camada de gestão de conteúdo e estruturei o projeto para suportar esse formato versionado.",
        ],
        highlights: [
          "Conteúdo em arquivos versionados no Git, sem banco de dados",
          "Publicação abre pull request em branch de conteúdo",
          "Site estático na Vercel, com favicon e cards de compartilhamento gerados por código",
        ],
      },
    },
    caseStudies: {
      deltalog: {
        intro:
          "Conteúdo versionado no Git, publicação por pull request e site estático. O CMS edita arquivos do próprio repositório.",
        repoNote:
          "Repositório privado, porque os rascunhos são arquivos versionados",
        problem: [
          "Eu queria um lugar meu para registrar decisão técnica com o contexto ainda fresco: por que escolhi uma ferramenta, o que quebrou no caminho, o que eu faria diferente. Blog hospedado resolve a publicação e cria dois problemas no lugar. O conteúdo passa a morar em um banco que não é meu, e cada post depende de um editor que eu não controlo.",
          "O que eu escrevo ali é o que eu vivi: problema que apareceu no meu trabalho, decisão que eu tomei, resultado que eu medi. Conteúdo assim envelhece junto com o projeto, então precisa ser versionado do mesmo jeito que código: revisável em diff, com histórico e reversível. Daí a decisão de base, que sustenta todas as outras: conteúdo em arquivos no próprio repositório, CMS por cima deles, zero banco de dados.",
        ],
        architectureIntro:
          "App Router com quase tudo estático. Duas coleções em arquivo, lidas em Server Component, sem camada de dados no cliente.",
        architecture: [
          "Posts em .mdoc e ferramentas em .yaml, versionados no Git e editados pelo Keystatic em modo GitHub, que abre pull request em branch própria.",
          "Um único leitor em escopo de módulo concentra as regras de listagem: filtro de rascunho, tempo de leitura, paginação e posts relacionados.",
          "Busca e filtros funcionam com formulário GET e links. A página inteira funciona com JavaScript desligado.",
          "Rota de admin e API do CMS devolvem 404 quando não existe GitHub App configurado.",
          "Favicon, apple icon e cards de compartilhamento são gerados por código. Nenhuma imagem binária versionada.",
        ],
        screenshotCaptions: [
          "Sumário e âncora saem do mesmo slug, gerado no transform do heading",
          "Filtro inteiro em GET: a página funciona com JavaScript desligado",
          "Ferramenta é entidade, não tag: cada uma tem página e contagem de citações",
        ],
        thumbnailAlt: "Home do deltalog",
        ctaTitle: "Melhor jeito de ver: navegar no site",
        ctaDescription: "O blog está no ar, com o primeiro post publicado.",
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
      "Engenharia de Produto": {
        name: "Engenharia de Produto",
        badge: "Produto",
      },
      "Soft Skills": { name: "Soft Skills", badge: "Soft" },
    },
    descriptions: {
      "Definição de Produto": {
        name: "Definição de Produto",
        description:
          "Decidir o que o sistema faz e o que ele deliberadamente não faz, antes de existir tela ou endpoint. Regra de negócio, integração e impacto entre times entram aqui, não no meio da implementação.",
        useCase:
          "Alinhar backend, frontend e UI em cima da mesma decisão, em vez de descobrir divergência quando o código já está pronto",
      },
      "Controle de Acesso por Perfil": {
        name: "Controle de Acesso por Perfil",
        description:
          "Quem enxerga o quê, definido por papel e validado no servidor. A interface esconde o que não é do perfil, mas quem barra de verdade é a API.",
        useCase:
          "Painel interno onde cada perfil vê só o recorte que lhe cabe, sem que a resposta da API traga dado que a tela ia esconder",
      },
      Python: {
        name: "Python",
        description:
          "Linguagem que uso para automação e para o que envolve dado e IA: script de rotina, processamento em lote e integração com modelo.",
        useCase:
          "Transcrição de áudio, indexação de conteúdo para busca semântica e análise em lote com relatório no fim",
      },
      Whisper: {
        name: "Whisper",
        description:
          "Modelo de reconhecimento de fala que transforma áudio em texto, com boa tolerância a ruído e sotaque.",
        useCase:
          "Áudio virando texto pesquisável, para depois ser indexado ou analisado sem passo manual",
      },
      Embeddings: {
        name: "Embeddings",
        description:
          "Representação numérica de texto que aproxima conteúdo com sentido parecido. É o que permite buscar por significado em vez de por palavra exata.",
        useCase:
          "Base indexada para a IA responder sobre o conteúdo real, em vez de alucinar sobre o que não tem",
      },
      "Busca Semântica": {
        name: "Busca Semântica",
        description:
          "Busca por proximidade de significado sobre uma base indexada em embeddings, em vez de casamento literal de termo.",
        useCase:
          "Encontrar o registro certo quando quem pergunta não usa exatamente as mesmas palavras do conteúdo",
      },
      Redis: {
        name: "Redis",
        description:
          "Banco em memória usado como cache e store de chave-valor. Serve resposta já pronta em microssegundos e tira carga de API externa e de banco relacional.",
        useCase:
          "Cache modelado por tipo de consulta, com a chave derivada do recorte de cada requisição, para não repetir chamada cara",
      },
      Nginx: {
        name: "Nginx",
        description:
          "Servidor web e proxy reverso. Termina TLS, serve arquivo estático e distribui requisição entre processos da aplicação.",
        useCase:
          "Porta de entrada de servidor provisionado do zero, com HTTPS e proxy para o processo Node",
      },
      PM2: {
        name: "PM2",
        description:
          "Gerenciador de processos Node em produção. Mantém a aplicação de pé, reinicia em caso de queda e concentra o log.",
        useCase:
          "Manter API Node rodando em servidor próprio, com restart automático e log centralizado",
      },
      "Requisitos (RF/RNF)": {
        name: "Requisitos (RF/RNF)",
        description:
          "Requisito funcional descreve o que o sistema faz; não funcional descreve sob quais restrições. Escrever os dois antes do código expõe a decisão que ainda não foi tomada.",
        useCase:
          "Especificação antes da implementação, o que permite frontend e backend avançarem em paralelo em vez de um esperar o outro",
      },
      Keystatic: {
        name: "Keystatic",
        description:
          "CMS que edita arquivos do próprio repositório em vez de escrever em banco. Em modo GitHub, cada publicação vira commit e pull request na branch de conteúdo.",
        useCase:
          "Blog e site de conteúdo que precisa de histórico, review em diff e reversão, sem manter banco nem serviço externo",
      },
      Markdoc: {
        name: "Markdoc",
        description:
          "Linguagem de conteúdo baseada em Markdown com AST tipada, tags customizadas e validação. Diferente de MDX, não executa componente dentro do conteúdo.",
        useCase:
          "Conteúdo que precisa de bloco customizado com contrato explícito, e de metadado extraído da AST como tempo de leitura e sumário",
      },
      Shiki: {
        name: "Shiki",
        description:
          "Highlighter de sintaxe que usa as gramáticas do VS Code e resolve a coloração em build ou no servidor, entregando HTML pronto.",
        useCase:
          "Bloco de código em site estático sem enviar highlighter para o cliente, com tema próprio casado com a paleta do projeto",
      },
      Biome: {
        name: "Biome",
        description:
          "Linter e formatter em um único binário, escrito em Rust. Substitui ESLint e Prettier, inclui organização de import e roda em uma fração do tempo.",
        useCase:
          "Projeto que quer lint e format rápidos com uma configuração só, sem conflito entre regra de lint e regra de formatação",
      },
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

  consent: {
    message:
      "Este site usa cookies para entender como as pessoas usam a página.",
    accept: "Aceitar",
    reject: "Recusar",
  },
};
