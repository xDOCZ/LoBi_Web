# Lo&Bi - Locacao de Imoveis (SPODWE2)

Aplicação SPA em React para o tema Locação de Imóveis da disciplina SPODWE2.

## Entidades de negocio

- Imobiliarias
- Imoveis
- Corretores
- Propostas

## Requisitos implementados

- React com arquitetura SPA
- Componentização da interface
- JSX
- Props e state
- Navegação por rotas
- Carregamento dinâmico de dados por JSON
- Uso de repositório local de imagens
- Tabelas com criar, alterar e excluir registros
- Projeto exclusivamente front-end

## Estrutura principal

- `src/data/locacao.json`: base de dados do domínio
- `src/lib/data-loader.js`: carregamento dinâmico do JSON
- `src/lib/data-context.js`: estado global e operações CRUD
- `src/components/entity-crud-table.jsx`: tabela CRUD reutilizável
- `src/components/app-layout.jsx`: layout com menu e cabeçalho
- `src/pages/*.jsx`: páginas da aplicação
- `src/react-router-app.jsx`: tabela de rotas React Router

## Acesso admin

- Usuario: `admin`
- Senha: `admin123`

Sem login, o usuário navega e consulta os dados.
Com login, habilita criar, editar e excluir nas tabelas.

## Execucao

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Entrega no Moodle

- Remover `node_modules` antes de compactar
- Compactar em `.zip` ou `.rar`
- Nomear o arquivo conforme a regra da disciplina

