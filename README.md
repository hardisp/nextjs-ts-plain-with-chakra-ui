# Nextjs with Chakra UI - Scratch Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Setup Husky

```bash
yarn husky install
```

Create `.husky` folder and than run this command:

```bash
yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint . && yarn prettier --write ."
```

## Lint staged: only check your code when necessary

### !!! IMPORTANT !!!

Checking your code takes time, even more so when the project gets bigger. Sometimes you change only markdown files or CI yaml files, and you don't need your TypeScript code to be checked.

Enters [Lint staged](https://github.com/okonet/lint-staged), which goal is to only run your lint scripts when necessary, and only on the necessary files.

Now we need to change our pre-commit hook (in the `.husky/pre-commit` file):
