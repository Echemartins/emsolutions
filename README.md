# emsolutions — Software engineering portfolio

Next.js App Router, TypeScript, Tailwind CSS. Designed for deployment on Vercel.

## Develop

```sh
npm install
npm run dev
```

## Verify

```sh
npm run typecheck
npm run build
```

## Personalize before publishing

The name is emsolutions and the contact address is echemartins47@gmail.com. Page content and interactions live in `app/page.tsx`; all design tokens, layout, responsive styling, and motion are consolidated in `app/globals.css`. Metadata lives in `app/layout.tsx`. The original logo is preserved at `public/logo.png`. The current design uses a light, image-free hero and real project screenshots.

## Add projects

Add an object to the exported `projects` array in `app/projects.ts`. Each entry needs a unique `slug`, `name`, full HTTPS `url`, display `domain`, `category`, `description`, and `accent` (`forest` or `clay`). Cards update automatically. No layout edits are necessary. Optional `screenshot` and `screenshotAlt` fields provide a local project preview. Use accurate descriptions and save screenshots under `public/projects/`. Add `mobileScreenshot` for a separate phone capture; the card selects it on screens up to 760px wide. Cards grow automatically as the list expands.

```ts
{
  slug: 'new-project',
  name: 'New Project',
  url: 'https://example.com',
  domain: 'example.com',
  category: 'WEB DEVELOPMENT',
  description: 'Describe the project and your contribution.',
  accent: 'forest',
},
```

Import this directory into Vercel and select the Next.js preset. No environment variables are required.
