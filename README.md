# Marketing Studio

Standalone website for the Marketing Studio project.

## Structure

- `index.html` — Russian landing page.
- `report/index.html` — sample research report.
- `api/contact.js` — Vercel serverless endpoint for the pilot contact form.

## Vercel

- Repository: `shashkovsystemservice-coder/marketing-studio`
- Production branch: `main`
- Root Directory: repository root (`./`)
- Framework Preset: `Other`

## Environment variables

Configure the following variables in the Vercel project before enabling contact-form notifications:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Do not commit their values to GitHub.

The founder portrait in the landing page currently references an image hosted in the separate personal-site repository. This is a runtime asset dependency, not a source-code dependency.
