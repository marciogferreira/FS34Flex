# README — Roadmap Programático para Estudar React JS + Vite

## 📚 Objetivo

Este repositório foi criado para organizar um plano de estudos completo de:

* JavaScript moderno (ES6+)
* React JS
* Vite
* Componentização
* Hooks
* Roteamento
* Gerenciamento de estado
* APIs
* Testes
* TypeScript
* Performance
* Deploy
* Ecossistema frontend moderno

---

# 🚀 Stack Principal

| Tecnologia                   | Objetivo                    |
| ---------------------------- | --------------------------- |
| React JS                     | Biblioteca para interfaces  |
| Vite                         | Build tool moderna e rápida |
| JavaScript ES6+              | Base da aplicação           |
| TypeScript                   | Tipagem estática            |
| React Router DOM             | Rotas SPA                   |
| Axios / Fetch                | Consumo de APIs             |
| Zustand / Context API        | Gerenciamento de estado     |
| Tailwind CSS                 | Estilização moderna         |
| Vitest                       | Testes                      |
| React Query / TanStack Query | Cache e dados assíncronos   |
| ESLint + Prettier            | Padronização                |
| Git + GitHub                 | Versionamento               |
| Vercel / Netlify             | Deploy                      |

---

# 🗂 Estrutura Recomendada do Projeto

```bash
meu-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── store/
│   ├── routes/
│   ├── layouts/
│   ├── styles/
│   ├── utils/
│   ├── types/
│   └── main.jsx
│
├── .env
├── vite.config.js
├── package.json
└── README.md
```

---

# 🧠 Roadmap de Estudos

# 1️⃣ Fundamentos do JavaScript

## Estudar

* Variáveis
* Escopo
* Funções
* Arrow Functions
* Arrays
* Objetos
* Desestruturação
* Spread Operator
* Promises
* Async/Await
* Fetch API
* Modules

## Exercícios

* Criar calculadora
* Lista de tarefas
* Consumo de API pública
* CRUD em memória

---

# 2️⃣ Introdução ao React

## Conceitos

* JSX
* Componentes
* Props
* State
* Eventos
* Renderização condicional
* Listas
* Keys

## Criar

* Counter App
* Todo App
* Card Components
* Sistema de Login Fake

---

# 3️⃣ React + Vite

## Criar projeto

```bash
npm create vite@latest
```

## Instalar dependências

```bash
npm install
```

## Rodar projeto

```bash
npm run dev
```

---

# 4️⃣ Hooks Essenciais

## useState

```jsx
const [count, setCount] = useState(0)
```

## useEffect

```jsx
useEffect(() => {
  console.log("Componente montado")
}, [])
```

## useMemo

```jsx
const total = useMemo(() => {
  return items.reduce((acc, item) => acc + item.price, 0)
}, [items])
```

## useCallback

```jsx
const handleClick = useCallback(() => {
  console.log("Click")
}, [])
```

## useRef

```jsx
const inputRef = useRef()
```

---

# 5️⃣ Componentização Avançada

## Estudar

* Atomic Design
* Reutilização
* Children
* Composition Pattern
* Controlled Components
* Custom Hooks

## Projetos

* Modal reutilizável
* Input component
* Design System simples

---

# 6️⃣ Rotas com React Router

## Instalação

```bash
npm install react-router-dom
```

## Exemplo

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

---

# 7️⃣ Consumo de APIs

## Fetch

```jsx
const response = await fetch("https://api.github.com/users")
const data = await response.json()
```

## Axios

```bash
npm install axios
```

```jsx
import axios from "axios"

const api = axios.create({
  baseURL: "https://api.github.com"
})
```

---

# 8️⃣ Gerenciamento de Estado

## Context API

* Estado global simples
* Tema
* Usuário autenticado

## Zustand

```bash
npm install zustand
```

```jsx
import { create } from "zustand"

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}))
```

---

# 9️⃣ Estilização

# CSS Modules

```jsx
import styles from "./Button.module.css"
```

# Styled Components

```bash
npm install styled-components
```

# Tailwind CSS

```bash
npm install -D tailwindcss
```

---

# 🔟 TypeScript com React

## Criar projeto

```bash
npm create vite@latest my-app --template react-ts
```

## Tipagem

```tsx
type ButtonProps = {
  title: string
}

function Button({ title }: ButtonProps) {
  return <button>{title}</button>
}
```

---

# 1️⃣1️⃣ Testes

## Instalar Vitest

```bash
npm install -D vitest
```

## Exemplo

```jsx
import { render, screen } from "@testing-library/react"
import Button from "./Button"

test("renderiza botão", () => {
  render(<Button title="Salvar" />)

  expect(screen.getByText("Salvar")).toBeInTheDocument()
})
```

---

# 1️⃣2️⃣ Performance

## Técnicas

* Lazy Loading
* Code Splitting
* Memoization
* Suspense
* Virtualização

## Exemplo

```jsx
const Dashboard = lazy(() => import("./Dashboard"))
```

---

# 1️⃣3️⃣ Deploy

## Vercel

```bash
npm install -g vercel
```

## Build

```bash
npm run build
```

---

# 🛠 Projetos Recomendados

| Projeto                 | Nível         |
| ----------------------- | ------------- |
| Todo App                | Iniciante     |
| Weather App             | Iniciante     |
| GitHub Finder           | Intermediário |
| Dashboard Admin         | Intermediário |
| E-commerce Frontend     | Avançado      |
| Sistema de Autenticação | Avançado      |
| Clone Netflix UI        | Avançado      |

---

# 📦 Bibliotecas Importantes

```bash
npm install react-router-dom
npm install axios
npm install zustand
npm install react-hook-form
npm install zod
npm install @tanstack/react-query
npm install framer-motion
npm install react-icons
```

---

# 🎯 Objetivo Final

Ao concluir esse roadmap você deverá conseguir:

✅ Criar aplicações React modernas
✅ Estruturar projetos escaláveis
✅ Consumir APIs REST
✅ Trabalhar com autenticação
✅ Gerenciar estados globais
✅ Fazer deploy profissional
✅ Escrever código limpo e reutilizável
✅ Trabalhar com TypeScript
✅ Criar projetos para portfólio e mercado

---

# 📖 Recursos Recomendados

## Documentações

* React
* Vite
* MDN Web Docs
* TypeScript
* Tailwind CSS

## Canais

* Rocketseat
* Filipe Deschamps
* Matheus Battisti
* Web Dev Simplified

---

# 🧩 Próximos Passos

Depois de dominar React + Vite:

* Next.js
* React Native
* Node.js
* NestJS
* GraphQL
* Micro Frontends
* Docker
* CI/CD

---

# 👨‍💻 Autor

Desenvolvido para estudos de React JS + Vite 🚀
