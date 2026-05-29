# Lo&Bi - Locacao de Imoveis (SPODWE2)

Aplicacao SPA em React para o tema Locacao de Imoveis da disciplina SPODWE2.

## Entidades de negocio

- Imobiliarias
- Imoveis
- Corretores
- Propostas

## Requisitos implementados

- React com arquitetura SPA
- Componentizacao da interface
- JSX
- Props e state
- Navegacao por rotas
- Carregamento dinamico de dados por JSON
- Uso de repositorio local de imagens
- Tabelas com criar, alterar e excluir registros
- Projeto exclusivamente front-end

## Estrutura principal

- `src/data/locacao.json`: base de dados do dominio
- `src/lib/data-loader.js`: carregamento dinamico do JSON
- `src/lib/data-context.js`: estado global e operacoes CRUD
- `src/components/entity-crud-table.jsx`: tabela CRUD reutilizavel
- `src/components/app-layout.jsx`: layout com menu e cabecalho
- `src/routes/*.jsx`: paginas e rotas da aplicacao

## Acesso admin

- Usuario: `admin`
- Senha: `admin123`

Sem login, o usuario navega e consulta os dados.
Com login, habilita criar/editar/excluir nas tabelas.

## Execucao

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run build
```

## Entrega no Moodle

- Remover `node_modules` antes de compactar
- Compactar em `.zip` ou `.rar`
- Nomear o arquivo conforme a regra da disciplina

