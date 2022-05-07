# cfe-mini-client

-   container [![client image status](https://git2.services.gamigo.com/cfe/cfe-mini-client/badges/develop/pipeline.svg)](https://git2.services.gamigo.com/cfe/cfe-mini-client/pipelines)
-   deployment [![client image status](https://git2.services.gamigo.com/cfe/helm-cfe-mini-client/badges/master/pipeline.svg)](https://git2.services.gamigo.com/cfe/helm-cfe-mini-client/pipelines)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Learn More

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Getting Started

```bash
yarn install
```

```bash
yarn dev
```

## Development Flow

-   All development going in dedicated branches
-   When you push branch CI will run and check, is your branch passes Lint, tests, build
-   Before create MR you need to rebase you branch onto master
-   Then create MR in Gitlab web interface
-   Somebody should review (CR) your branch and merge it
