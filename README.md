<a href="https://ai-sdk-chrome-ai.vercel.app/">
  <img alt="Next.js 14 and App Router Semantic Search." src="https://ai-sdk-chrome-ai.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js Chrome AI Chatbot</h1>
</a>

<p align="center">
  An open-source chatbot built with Next.js, the Vercel AI SDK, and the Chrome AI provider.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for interacting with `window.ai` Gemini Nano model (using [ChromeAI provider](https://github.com/jeasonstudio/chrome-ai))
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives


## Deploy Your Own

You can deploy your own version of the Chrome AI Chatbot to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnicoalbanese%2Fai-sdk-chrome-ai)

## Running locally

Install dependencies:

```bash
pnpm install
```

Run the dev server:
```bash
pnpm run dev
```
Your app template should now be running on [localhost:3000](http://localhost:3000/).
