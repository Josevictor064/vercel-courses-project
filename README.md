# Projeto: Plataforma de Cursos Online com Next.js + NextUI

## Descrição  
A **Plataforma de Cursos Online** é uma aplicação web para gestão e visualização de cursos, desenvolvida com **Next.js (App Router)** e **TypeScript**. Utiliza componentes do **NextUI** e estilização com **Tailwind CSS** para uma interface moderna e responsiva. O sistema inclui autenticação via token no localStorage, proteção de rotas, e navegação fluida.

## Tecnologias Utilizadas  
- **Next.js 15+** (App Router)  
- **TypeScript**  
- **Tailwind CSS**  
- **NextUI**  
- **Autenticação via localStorage**  
- **Vercel** (Deploy)  

## Funcionalidades  
- Tela de login simples (`/login`)  
- Verificação de token para acesso a páginas protegidas  
- Listagem de cursos com detalhes (`/cursos`)  
- Navegação protegida redirecionando deslogados para `/login`  
- Componentes reutilizáveis com NextUI  
- Animações simples com framer-motion  
- Layout responsivo e estilizado com Tailwind CSS  

## Como Rodar o Projeto Localmente

**Pré-requisitos:**
- Node.js (versão 18 ou superior)
- npm (ou yarn/pnpm)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Josevictor064/vercel-courses-project.git
    ```

2.  **Navegue até a pasta do frontend:**
    ```bash
    cd vercel-courses-project/frontend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Abra no navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em execução.

## Links
- **Deploy na Vercel:** [https://vercel-courses-project.vercel.app/](https://vercel-courses-project.vercel.app/)
- **Repositório GitHub:** [https://github.com/Josevictor064/vercel-courses-project](https://github.com/Josevictor064/vercel-courses-project)