# Sri Kanaka Durga Caterings

Marketing and booking site for Sri Kanaka Durga Caterings — premium multi-cuisine
catering across Andhra Pradesh. Bilingual (English / Telugu), with a browsable
menu of 250+ dishes and a multi-step catering enquiry form.

## Stack

- [TanStack Start](https://tanstack.com/start) (SSR) + TanStack Router (file-based routes)
- React 19, TypeScript (strict)
- Tailwind CSS 4
- GSAP for the cinematic brand intro
- Nitro → Cloudflare Workers for deployment
- EmailJS for booking and contact enquiries

## Development

Requires Node.js 20+ and npm.

```sh
npm install
npm run dev
```

The dev server listens on <http://localhost:8080>.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (client + SSR + Cloudflare bundle) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npx tsc --noEmit` | Typecheck |

## Project layout

```
src/
  routes/       file-based routes (TanStack Router)
  components/   layout and shared UI
  data/         dishes, services, packages, gallery, contact details
  i18n/         en.ts / te.ts translation maps
  assets/dishes/  dish photography, resolved by filename
  server.ts     SSR entry with the error wrapper
```

### Adding a dish photo

Dish images resolve by convention. Drop a JPG into `src/assets/dishes/` named
after the dish `id` in [`src/data/dishes.ts`](src/data/dishes.ts) — for example
`mutton-dum-biryani.jpg`. No code change is needed. Dishes without a photo render
a branded placeholder tile instead of a broken image.
