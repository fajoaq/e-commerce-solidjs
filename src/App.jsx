import styles from "./styles/App.module.scss";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { Hero } from "./components/hero/Hero";
import { CallToAction } from "./components/hero/CallToAction";
import { ServiceBanner } from "./components/service-banner/ServiceBanner";
import { FullRoomSection } from "./components/full-rooms/FullRoomSection";
import { PromotionLarge } from "./components/promotion-large/PromotionLarge";
import { CallToAction as PromoCTA } from "./components/promotion-large/CallToAction";
import { ProductShowcase } from "./components/common/product/ProductShowcase";
import { MailingListSection } from "./components/mailing-list/MailingListSection";
import { CallToAction as MailingCTA } from "./components/mailing-list/CallToActions";
//import { UserReviews } from "./components/user-reviews/UserReviews";
import { Footer } from "./components/footer/Footer";

const heroImgUrlArr = [
  "bg/hero-bg-1.jpg",
  "bg/hero-bg-2.jpg",
  "bg/hero-bg-3.jpg",
];

const BEST_SELLERS = [
  {
    src: "bg/featured-sofa.jpg",
    alt: "picture of a Wooden Dining Table",
    title: "Wooden Dining Table",
    price: 299,
  },
  {
    src: "bg/featured-table.jpg",
    alt: "picture of a table",
    title: "L-Sectional",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Recliner",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
];

const FEATURED_PRODUCTS = [
  {
    src: "bg/featured-sofa.jpg",
    alt: "picture of a Wooden Dining Table",
    title: "Wooden Dining Table",
    price: 299,
  },
  {
    src: "bg/featured-table.jpg",
    alt: "picture of a table",
    title: "L-Sectional",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Recliner",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Recliner",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Recliner",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
];

function App() {
  return (
    <div class={styles.App}>
      <MainNavigation />

      <Hero imgUrlList={heroImgUrlArr}>
        <CallToAction />
      </Hero>

      <ServiceBanner />

      <FullRoomSection />

      <ProductShowcase products={BEST_SELLERS}>
        <p>Start By Browsing What People Love</p>
        <h2>Best Sellers</h2>
      </ProductShowcase>

      <PromotionLarge>
        <PromoCTA />
      </PromotionLarge>

      <ProductShowcase products={FEATURED_PRODUCTS}>
        <p>Our Staff's Personal Picks</p>
        <h2>Featured Products</h2>
      </ProductShowcase>

      <MailingListSection>
        <MailingCTA />
      </MailingListSection>

      <Footer />
    </div>
  );
}

export default App;

//       <FeaturedProducts />
//      <UserReviews />

/* 
import { createResource, For } from "solid-js";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});

const [productData] = createResource(async () => {
  let data = [];
  try {
    data = await client.getEntries({
      content_type: "product",
    });
  } catch (error) {
    console.log("Unable to get data", error);
  }
  return data.items;
});

      <ul>
        <For each={productData()}>{(item) => <li>{item.fields.title}</li>}</For>
      </ul>
*/
