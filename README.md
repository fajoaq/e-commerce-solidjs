## Setup Steps

These are the steps I took to build my example E-Commerce site.

- Cloned the SolidJs Vite template:

  > npx degit solidjs/templates/js my-app
  > cd my-app
  > npm i # or yarn or pnpm
  > npm run dev # or yarn or pnpm

- Installed the Contenful package:

  > npm i contentful

- Created a new Space/Organization on Contenful

- Created a new Content Model (products)

- Created a few example products

- Generated a new API Key on Contentful

- Created development env file (.env.development)

  > only variables prefixed with VITE will be exposed to the client

- Created client with createClient from contentful

  > const client = createClient({...})

- Created a new resource from solidjs to fetch data

  > const [productData] = createResource(async () => {})

- Test data with For primitive from solidjs

  > <For each={productData()}>{(item) => <li>{item.fields.title}</li>}</For>

- Added App layout

- Added Sass for global variables within media queries

  > @media (max-width: vars.$breakpoint_sm)
