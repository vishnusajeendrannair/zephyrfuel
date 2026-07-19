# ZephyrFuel Inc. Website

Production website for [zephyrfuel.energy](https://zephyrfuel.energy), built with Next.js App Router and deployed through Vercel.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run build
```

## Lead-form routing

Add these environment variables in Vercel Project Settings when the HubSpot form is ready:

- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_FORM_GUID`

Without them, the site-evaluation form opens a structured email to `vishnu@zephyrfuel.energy`.

## Deployment

The connected Vercel project should use the repository root and the Next.js framework preset. Feature branches create preview deployments; merging the approved branch into `main` creates the production deployment.

Do not commit `.env` files or Vercel credentials. Do not change Cloudflare MX, SPF, or DKIM records when updating website DNS.
