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
- `app/VeleirosForm.tsx` — formulário de cadastro dos condôminos Veleiros (mantido no código;
  a seção `#veleiros` do site não o exibe mais após o encerramento das inscrições).
- `hellonext/hndemowakesurfveleiros.js` — webhook do HelloNext (admin + rejeição de signup pós-corte).

## Cadastro de condôminos Veleiros (HelloNext)

**Inscrições encerradas em 13 de novembro de 2026 (13/11).** O site mostra só o aviso de
encerramento na seção `#veleiros` (não renderiza mais `VeleirosForm`). O webhook
`hndemowakesurfveleiros` rejeita novos POSTs de cadastro após essa data; comandos de
administração (`listar`, `atualizar`, `excluir`, `enviarCupons`) continuam ativos.

Enquanto as inscrições estavam abertas, o formulário enviava `POST` para o webhook da tenant
**hn-demo** (`VELEIROS_FORM_ENDPOINT` em `app/sections.ts`), que gravava uma linha por atleta na
entidade **WakeSurf Veleiros Cadastro** (`66a57953-ed15-4b2e-807a-90e7ce05a41c`) com Status
"Pendente". A administração valida pela página oculta `/veleiros-admin/` (sem link no site,
noindex, protegida por senha): lista os cadastros por status (`listar`), edita Status, Cupom e
Observações (`atualizar`) e dispara o envio. Também dá para validar direto no CRM
(Status = "Validado" + Cupom).

A senha fica em `ADMIN_SENHA` no webhook. Este repositório é público, então aqui ela fica vazia
(administração bloqueada): a senha real só existe na cópia publicada no HelloNext.

Envio do cupom: `{ "command": "enviarCupons" }`. Cada linha Validado, com Cupom e sem "Cupom enviado em" (`date1`),
vai para a estratégia `850546e9-9588-473b-8b35-483a35b11688` (`ruler.addLeadToJourney`, mailing em
`hellonext/filtro-estrategia-cupom-veleiros.xlsx`, e-mail em `hellonext/email-cupom-veleiros.html`)
e recebe a data de envio, então ninguém recebe duas vezes.

Para publicar ou alterar o webhook: no HelloNext (hn-demo), webhook com slug
`hndemowakesurfveleiros`, colar o conteúdo de `hellonext/hndemowakesurfveleiros.js`, preencher
`ADMIN_SENHA` e publicar.

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
