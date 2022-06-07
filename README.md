## Setup Steps

<h1 align="center">
  <br>
  <a href="https://e-commerce-solidjs.vercel.app/"><img src="/public/site_image.jpg" alt="E-Commerce by Francis Joaquin" width="200"></a>
  <br>
    E-Commerce with Solidjs
  <br>
</h1>

<h4 align="center">An example E-Commerce site built by Francis Joaquin using SolidJs + Contenful api.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#learning-solidjs">Learning</a> •
  <a href="#license">License</a>
</p>

## Key Features

* Contentful - Graphql like data fetching
  - Products and their details come from the Contenful data store.

* Responsive - For all devices
  - Fully responsive layout from 320px onward.

* Data (cart) persistence between sessions

* Lightning quick first paint - Above the fold first
  - Only critical resources are loaded above the fold, and the rest when they're needed.

* Vertical Rhythm - Flowing design
  - Interactivity as you scroll.

* Responsive menu - Animated and interactive
  - Mobile friendly and interactive cart animations.

* Loading animations

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. A Contentful account with api keys is also required (create .env files). From your command line:

```bash
# Clone this repository
$ git clone https://github.com/fajoaq/e-commerce-solidjs

# Go into the repository
$ cd e-commerce-solidjs

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## Learning Solidjs

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

  ```
  const client = createClient({...})
  ```

- Created a new resource from solidjs to fetch data

  ```
  const [productData] = createResource(async () => {})
  ```

- Test data with For primitive from solidjs

  ```
  <For each={productData()}>{(item) => <li>{item.fields.title}</li>}</For>
  ```

- Added App layout

- Added Sass for global variables within media queries

  ```
  @media (max-width: vars.$breakpoint-sm)
  ```

- Added public folder for static file serve. Static assets can be handled in two different ways:

  > Imported in JavaScript or referenced in templates/CSS via relative paths. Such references will be handled by webpack.

  > Placed in the public directory and referenced via absolute paths. These assets will simply be copied and not go through webpack.

- Added a store for product and customer data. It's as simple as importing the "homepageProducts, setHomepageProducts" etc where needed.

```
  import { createStore } from "solid-js/store";

  const [homepageProducts, setHomepageProducts] = createStore({
  featuredProducts: [],
  bestSellers: [],
  });
```

## Credits

This software uses the following open source packages:

- [SolidJs](https://www.solidjs.com/)
- [Node.js](https://nodejs.org/)
- [lodash](https://lodash.com/)
- [sass](https://sass-lang.com/)
- [vite](https://vitejs.dev/)
- [vite-plugin-solid](https://github.com/solidjs/vite-plugin-solid)

## Related

[joaquinc](https://joaquinc.com) - My portfolio

## License

MIT

---

> [joaquinc.com](https://www.joaquinc.com) &nbsp;&middot;&nbsp;
> GitHub [@fajoaq](https://github.com/fajoaq) &nbsp;&middot;&nbsp;
