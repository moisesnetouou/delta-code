# Delta Code - Portfolio

## 🚀 Visão Geral

Portfolio pessoal de desenvolvedor frontend com UI moderna, dark theme e animações sofisticadas.

---

## 📦 Tech Stack

| Tecnologia | Versão |
|------------|--------|
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| TailwindCSS | 4.x |
| Biome | latest |
| Shadcn/ui | latest |

---

## 📂 Estrutura de Arquivos

```
delta-code/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── hero.styles.ts
│   │   │   │   └── hero.types.ts
│   │   │   ├── about/
│   │   │   │   ├── about.tsx
│   │   │   │   ├── about.styles.ts
│   │   │   │   └── about.types.ts
│   │   │   ├── experience/
│   │   │   │   ├── experience.tsx
│   │   │   │   ├── experience.styles.ts
│   │   │   │   └── experience.types.ts
│   │   │   ├── projects/
│   │   │   │   ├── projects.tsx
│   │   │   │   ├── projects.styles.ts
│   │   │   │   └── projects.types.ts
│   │   │   ├── skills/
│   │   │   │   ├── skills.tsx
│   │   │   │   ├── skills.styles.ts
│   │   │   │   └── skills.types.ts
│   │   │   ├── certifications/
│   │   │   │   ├── certifications.tsx
│   │   │   │   ├── certifications.styles.ts
│   │   │   │   └── certifications.types.ts
│   │   │   └── contact/
│   │   │       ├── contact.tsx
│   │   │       ├── contact.styles.ts
│   │   │       └── contact.types.ts
│   │   └── ui/
│   │       └── (componentes shadcn)
│   ├── lib/
│   │   └── utils.ts
│   ├── data/
│   │   └── portfolio-data.ts
│   └── types/
│       └── index.ts
├── public/
│   └── (imagens, ícones)
├── tailwind.config.ts
├── biome.json
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Paleta de Cores (Dark Theme)

### Tailwind Tokens

| Token | Hex |
|-------|-----|
| `background` | `#0a0a0f` |
| `surface` | `#1a1a24` |
| `foreground` | `#e8e8ed` |
| `foreground-muted` | `#9494a0` |
| `accent-primary` | `#00d9ff` |
| `accent-secondary` | `#8b5cf6` |
| `success` | `#10b981` |
| `error` | `#ef4444` |

---

## 📋 Padrão de Nomenclatura

### Arquivos
- `hero.tsx` → componente principal
- `hero.styles.ts` → variants do Tailwind
- `hero.types.ts` → tipagens

### Componentes
```typescript
// hero.tsx
export default function Hero() {
  return (...)
}
```

### Tipos
```typescript
// hero.types.ts
export interface HeroProps {
  name: string
  title: string
}
```

---

## ⚙️ Configurações

### Biome (biome.json)
```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "spaces",
    "indentWidth": 2,
    "lineWidth": 80
  }
}
```

### Tailwind (tailwind.config.ts)
- Configurar tema com os tokens da paleta
- Extensões para variants

---

## 🏗️ Passos de Instalação

### 1. Criar projeto Next.js
```bash
npx create-next-app@latest delta-code --typescript --tailwind --eslint --app --src-dir --no-import-alias
cd delta-code
```

### 2. Instalar dependências
```bash
npm install @biomejs/biome
npm install lucide-react
npm install clsx tailwind-merge class-variance-authority
```

### 3. Configurar Biome
```bash
npx biome init
# Copiar configuração do biome.json acima
```

### 4. Inicializar Shadcn/ui
```bash
npx shadcn@latest init -d
# Escolher opções default
```

### 5. Adicionar componentes Shadcn (opcionais)
```bash
npx shadcn@latest add button card badge tooltip
```

### 6. Configurar Tailwind
- Atualizar `tailwind.config.ts` com os tokens da paleta
- Adicionar cores customizadas em `globals.css`

---

## 📝 Seções do Portfolio

| Seção | Descrição |
|-------|-----------|
| **Hero** | Nome, título, tagline, links para LinkedIn/GitHub |
| **Sobre** | Resumo profissional |
| **Experiência** | Timeline das experiências profissionais |
| **Projetos** | Cards dos projetos com stack e links |
| **Habilidades** | Skills divididas por categoria |
| **Certificações** | Certificados com links |
| **Contato** | Email, LinkedIn, GitHub |

---

## 📦 Dados do Portfolio (para portfolio-data.ts)

```typescript
export const personalInfo = {
  name: "Moisés Neto",
  title: "Frontend Engineer | React & Next.js",
  email: "moisesnetored@gmail.com",
  phone: "(92) 99508-5478",
  location: "Manaus, Brasil",
  linkedin: "https://linkedin.com/in/moisesnetouou",
  github: "https://github.com/moisesnetouou",
}

export const summary = "Desenvolvedor Frontend com +5 anos de experiência em arquitetura de aplicações, liderança técnica e construção de interfaces escaláveis. Especialista em testes automatizados, automação com IA e práticas modernas de DX (Developer Experience)."

export const experiences = [...]

export const projects = [...]

export const skills = [...]

export const certifications = [...]

export const education = {
  course: "Ciência da Computação",
  institution: "Uninorte",
  period: "2017 a 2022",
}

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
]
```

---

## 🎯 Boas Práticas React 19 + Next.js 16

- Server Components por padrão
- Client Components apenas quando necessário (`'use client'`)
- Tailwind variants via `cva()` ou `clsx`
- Tipos em arquivos `.types.ts`
- Biome para lint/format
- Nomenclatura em inglês para arquivos e funções

---

## 📄 Comandos Úteis

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Format
npx biome format --write .
```

---

## 📌 Notas

- Deploy não incluído no escopo
- Conteúdo em português
- Código em inglês
- UI com dark theme, cores cyan + purple
- Animações e micro-interações
- Design moderno que não parece "feito por IA"

---

## 🎯 Prompt para Implementação

```
Você é um desenvolvedor Frontend Senior com +5 anos de experiência em React, Next.js, TypeScript e TailwindCSS.

Siga o plano detallado no arquivo "delta-code-portfolio.md" que está na pasta atual para criar um portfolio pessoal chamado "Delta Code".

Requisitos:
- Use Next.js 16, React 19, TypeScript
- TailwindCSS 4.x com os tokens de cores definidos no arquivo
- Biome para lint e format
- Shadcn/ui para componentes base
- Cada componente deve ter: arquivo.tsx, arquivo.styles.ts e arquivo.types.ts
- Nomenclatura em inglês para arquivos e funções
- Use "use client" apenas quando necessário
- O conteúdo do portfolio está no currículo (use os dados do arquivo "Currículo Moisés Neto - Melhorado.md")

Comece criando o projeto e implementando seção por seção.
```
