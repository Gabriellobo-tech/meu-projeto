# CineWave 🎬

Interface de streaming inspirada em grandes plataformas, criada como projeto de portfólio com **React + Vite**.

> Este projeto é educacional e não possui vínculo com a Netflix ou qualquer serviço de streaming real.

## Funcionalidades

- Home responsiva com banner de destaque
- Catálogos horizontais por categoria
- Busca por título, descrição e gênero
- Modal com detalhes do filme
- "Minha lista" com persistência via `localStorage`
- Layout responsivo para desktop e celular
- Navegação sem recarregar a página
- Dados demonstrativos prontos para uso

## Tecnologias

- React
- Vite
- JavaScript
- CSS responsivo
- Lucide React
- LocalStorage

## Como executar

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Estrutura

```text
src/
├── components/
│   ├── Hero.jsx
│   ├── MovieCard.jsx
│   ├── MovieModal.jsx
│   ├── MovieRow.jsx
│   └── Navbar.jsx
├── data/
│   └── movies.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Próximos passos sugeridos

- Integrar a API do TMDB
- Adicionar autenticação com Firebase
- Criar perfis de usuário
- Salvar favoritos em banco de dados
- Adicionar trailers
- Fazer deploy na Vercel

## Autor

Gabriel Lobo — projeto para estudos e portfólio.
