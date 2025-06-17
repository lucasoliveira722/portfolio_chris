Nome da agência ainda em construção

# Blog da Agência "Nome"

Este é o repositório do blog desenvolvido para a agência de marketing e SEO "Nome". A aplicação web foi projetada para ser uma plataforma **robusta e escalável** para a publicação de conteúdo relevante sobre marketing digital e SEO.

## Tecnologias Utilizadas

Este projeto foi construído utilizando uma stack baseada em Node JS e React:

* **Frontend:** Desenvolvido com **Next.js**, um framework React poderoso que oferece **renderização server-side (SSR)** e **geração de sites estáticos (SSG)**, resultando em melhor desempenho, SEO otimizado e uma excelente experiência de usuário.
* **Backend:** Construído com **Express.js**, um framework web minimalista e flexível para Node.js, proporcionando uma **API RESTful eficiente e escalável** para gerenciar o conteúdo do blog.
* **Banco de Dados:** Utiliza **PostgreSQL**, um sistema de gerenciamento de banco de dados relacional objeto-relacional open source, conhecido por sua **robustez, confiabilidade e performance** para armazenar os dados do blog.

## Funcionalidades Principais

* Criação, edição e publicação de posts.
* Visualização de posts com interface amigável.
* Categorização e tags para organização do conteúdo.
* Otimização para SEO (SEO-friendly URLs, meta descrições, etc.).

## Como Rodar o Projeto (Desenvolvimento)

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/lucasoliveira722/portfolio_chris.git
    cd portfolio_chris
    ```
2.  **Configure o Backend:**
    * Navegue até a pasta `backend` (ou o nome da sua pasta backend).
    * Crie um arquivo `.env` com suas variáveis de ambiente (ex: `DATABASE_URL`, `PORT`).
    * Instale as dependências: `npm install` ou `yarn install`.
    * Inicie o servidor: `npm start` ou `yarn start`.
3.  **Configure o Frontend:**
    * Navegue até a pasta `frontend` (ou o nome da sua pasta frontend).
    * Crie um arquivo `.env.local` com suas variáveis de ambiente (ex: `NEXT_PUBLIC_API_URL`).
    * Instale as dependências: `npm install` ou `yarn install`.
    * Inicie o servidor de desenvolvimento: `npm run dev` ou `yarn dev`.

O frontend estará disponível em `http://localhost:3000` e o backend em `http://localhost:XXXX` (porta configurada no seu `.env`).

---
