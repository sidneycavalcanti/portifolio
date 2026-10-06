# portifolio

Portfólio de **Sidney Correia Cavalcanti**, analista de infraestrutura (Recife, PE).

## Stack

- [Astro](https://astro.build) gerando HTML estático (o único JS no cliente é o contador de uptime e o scroll-spy, ~1 KB)
- CSS nativo moderno, sem framework de CSS: `light-dark()` para tema claro/escuro automático, nesting, `oklch`/`color-mix`, `:focus-visible`, `<details name>` com animação via `::details-content` + `interpolate-size`
- nginx servindo `dist/` (Docker multi-stage, pronto para o Coolify)

## Editar conteúdo

Todo o texto está em `src/data/cv.ts` (perfil, experiências, entregas, competências, formação).
Layout em `src/pages/index.astro`, estilos em `src/styles/global.css`.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Deploy (Coolify)

Build pack **Dockerfile**, porta **80**, healthcheck `GET /healthz`.
O Dockerfile builda com Node e copia só `dist/` para o nginx.
