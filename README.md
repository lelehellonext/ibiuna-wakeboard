# Ibiúna Wake & Surf — Campeonato Brasileiro 2026

Site institucional do Campeonato Brasileiro de Wakeboard e WakeSurf de Ibiúna.
Construído em **Next.js (App Router) + TypeScript** com **export estático**, pronto para
publicar em qualquer hospedagem (IIS, Apache, Nginx, Vercel, Netlify, GitHub Pages, etc.).

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Gerar a versão para publicar (build estático)

```bash
npm run build
```

Os arquivos finais ficam na pasta **`out/`**. Basta enviar TODO o conteúdo de `out/`
para a raiz do site no servidor.

> O projeto usa `output: "export"`, então **não** precisa de Node no servidor —
> é HTML/CSS/JS estático puro.

## Estrutura

- `app/page.tsx` — todas as seções do site (capa, sobre, cronograma, local, categorias,
  barco oficial, galeria, apoiadores, vídeo, inscrições/contato).
- `app/SiteChrome.tsx` — cabeçalho, menu lateral, barra de progresso, scrollspy e botão "voltar ao topo".
- `app/sections.ts` — lista de navegação e dados de contato (WhatsApp, e-mail, Instagram, Google Maps).
- `app/globals.css` — sistema de design (cores, tipografia, componentes).
- `public/img/` — fotos e vídeo do evento.

## Como atualizar conteúdo

- **Datas / textos:** editar `app/page.tsx`.
- **Contato (WhatsApp, e-mail, Instagram):** editar `app/sections.ts`.
- **Fotos:** substituir os arquivos em `public/img/` (mantendo os nomes).

## Publicar em subpasta do domínio

Se o site não ficar na raiz do domínio (ex.: `dominio.com.br/2026/`), defina o caminho
em `next.config.ts`:

```ts
basePath: "/2026",
assetPrefix: "/2026",
```
