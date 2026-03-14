# Harry Potter — Enciclopédia Bruxa

Aplicação web desenvolvida como projeto de estudo e portfólio, explorando o universo de Harry Potter através de dados reais consumidos via API externa.

## Acesso

[harry-potter-landing.vercel.app](https://harry-potter-landing.vercel.app)

## Sobre o projeto

Interface que reúne informações sobre personagens, casas de Hogwarts, patronos e atores do universo de Harry Potter. Os dados são consumidos da [HP API](https://hp-api.onrender.com) e servidos internamente através de uma camada GraphQL própria, com cache de servidor para otimizar o tempo de resposta.

## Funcionalidades

- Tabela de personagens com foto, casa, patrono, ator, status e data de nascimento
- Grid das quatro casas de Hogwarts com contagem de membros e modal de detalhes
- Carrossel de membros por casa com avatares e fallback para sem foto
- Listagem de patronos paginada
- Tabela de atores com paginação
- Animação de boas-vindas com texto progressivo
- Player de áudio ambiente
- Responsivo para mobile, tablet e desktop

## Tecnologias

**Frontend**
- Next.js 15 (App Router)
- TypeScript
- SCSS Modules
- Apollo Client

**Backend / API**
- Apollo Server (`@apollo/server`)
- GraphQL com schema e resolvers próprios
- Next.js Route Handler (`/api/graphql`)

**Infraestrutura**
- Vercel (deploy e variáveis de ambiente)
- HP API externa com revalidação de cache a cada hora

## Estrutura relevante

src/
app/
api/graphql/route.ts # Endpoint Apollo Server
graphql/
schema.ts # Tipos: Character, House
resolvers.ts # Queries: characters, character, houses, house
queries.ts # Queries Apollo Client
hooks/
useCharacters.ts
useHouses.ts
lib/
apollo-client.ts
hp-api.ts
types/
character.ts
house.ts



## Como rodar localmente

```bash
git clone https://github.com/seu-usuario/harry-potter-landing
cd harry-potter-landing
npm install
Crie um arquivo .env.local:


NEXT_PUBLIC_GRAPHQL_URL=http://localhost:3000/api/graphql
bash
npm run dev
Acesse http://localhost:3000.
