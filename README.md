# Software explanation

This is an example application which has been made in response to a recruitment task given by Nemesys.

The application uses the free open API from: [Patentti- ja kaupparekisteri](https://avoindata.prh.fi/fi/krek/swagger-ui).
The application fetches data from their registration API and returns a list of companies that are registered in Finland and some basic information about them.
Due to the fact that there are hundreds of thousands of companies in Finland the API only returns up to 50 hits per fetch so I've implemented a simple pagination.

## How to improve?
- Add better error handling
- Implement possible unit tests e.g. malformed data fetch/handle
- Add "favorites" functionality where user can click a star and save a company to a list of favorites stored in PostgreSQL
- Add "search" functionality where user can search for specific company e.g. using either company ID or name
- Add "jump to page" functionality where user can jump to a specific page instead of clicking next/previous


## DEPRECATED INFO - Left for learning purposes just in case

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

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

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.