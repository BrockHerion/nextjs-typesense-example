This is a simple example of using TypeSense with Next.js 14 and InstantSearch.js

## Prerequisites

Before you get started, make sure you have the following installed:

- Docker
- Bun

## Getting Started

First, start TypeSense with Docker:

```bash
docker compose up -d
```

Next, go ahead and install the app dependencies:

```bash
bun install
```

Once installed, we can then seed TypeSense with our sample data:

```bash
bun ./scripts/seed.ts
```

If seeding doesn't work there, you can seed via cURL:

```bash
curl http://localhost:8108/collections/movies/documents/import \
-X POST \
-H "X-TYPESENSE-API-KEY: xyz" \
--data-binary @./data/movies.jsonl
```

Now, run the Next.js development dev server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. You should see a listing of movies and be able to search through them!
