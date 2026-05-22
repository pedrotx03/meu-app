# Catálogo de Filmes em React

##  Descrição
Este é um projeto de uma aplicação web desenvolvida em React para listagem e gerenciamento de filmes favoritos. O objetivo principal foi consolidar o aprendizado em navegação de rotas, gerenciamento de estados globais e consumo de dados.

## Tecnologias Utilizadas
* **React** (com Vite)
* **React Router DOM** (Navegação)
* **Context API** (Gerenciamento de estados globais)
* **CSS** (Estilização global da interface)
* **LocalStorage** (Persistência de dados)

##  Instalação e Execução
1. Clone este repositório no seu computador:
   `git clone [https://github.com/pedrotx03/meu-app.git]`
2. Entre na pasta do projeto:
   `cd meu-app`
3. Instale as dependências:
   `npm install`
4. Inicie o servidor de desenvolvimento:
   `npm run dev`

##  Funcionalidades
* **Tema Claro/Escuro:** Alternância de tema com persistência de estado.
* **Sistema de Autenticação (Simulado):** Login com nome de usuário e persistência de sessão.
* **Rotas Protegidas:** Acesso à página de Favoritos bloqueado para usuários não logados.
* **Catálogo de Filmes:** Consumo de um arquivo JSON local simulando uma API via `fetch`.
* **Detalhes Dinâmicos:** Rota dinâmica para exibir informações completas (sinopse, diretor, elenco) de cada filme.
* **Meus Favoritos:** Adicionar e remover filmes da lista de favoritos (com feedback visual e salvamento no navegador).

## Conceitos Aplicados
* **Hooks do React:** `useState`, `useEffect`, `useContext`.
* **Hooks de Rota:** `useParams` (rotas dinâmicas), `useNavigate` (redirecionamento de ações).
* **Context API:** Criação de múltiplos provedores (`ThemeContext`, `AuthContext`, `FavoritosContext`).
* **Renderização Condicional:** Exibição dinâmica de componentes baseada no estado de autenticação ou de carregamento.
* **Tratamento de Erros:** Respostas amigáveis da UI caso falhe o `fetch` ou o usuário busque um ID inexistente.