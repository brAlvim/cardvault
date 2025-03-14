# CardVault - Sistema de Gerenciamento de Gift Cards

CardVault é uma aplicação SaaS para gerenciamento de gift cards, desenvolvida com Next.js e TypeScript. O sistema permite o controle completo de gift cards, fornecedores, transações e relatórios.

## Funcionalidades

- Dashboard com visão geral de gift cards, fornecedores, transações e saldo
- Gerenciamento de gift cards (cadastro, edição, exclusão)
- Controle de fornecedores
- Registro e acompanhamento de transações
- Relatórios e análises
- Interface responsiva e intuitiva

## Tecnologias Utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- React
- SVG Icons

## Estrutura do Projeto

```
cardvault-project/
├── public/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── styles/
├── package.json
├── tailwind.config.js
└── README.md
```

## Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/brAlvim/cardVault.git
cd cardVault
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:3000`

## Credenciais de Acesso (Desenvolvimento)

- Email: admin@cardvault.com
- Senha: admin123

## Screenshots

![Dashboard](screenshots/dashboard.png)
![Gift Cards](screenshots/gift-cards.png)

## Licença

Este projeto está licenciado sob a licença MIT.
