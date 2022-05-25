import styles from "./styles/App.module.scss";
import { MainNavigation } from "./components/navigation/MainNavigation";
import { Hero } from "./components/hero/Hero";
import { CallToAction } from "./components/hero/CallToAction";
import { ServiceBanner } from "./components/service-banner/ServiceBanner";
import { FullRoomSection } from "./components/full-rooms/FullRoomSection";
import { BestSellerSection } from "./components/best-sellers/BestSellersSection";
import { PromotionLarge } from "./components/promotion-large/PromotionLarge";
import { CallToAction as PromoCTA } from "./components/promotion-large/CallToAction";
//import { FeaturedProducts } from "./components/featured-products/FeaturedProducts";
import { MailingListSection } from "./components/mailing-list/MailingListSection";
//import { UserReviews } from "./components/user-reviews/UserReviews";
import { Footer } from "./components/footer/Footer";

const heroImgUrlArr = [
  "bg/hero-bg-1.jpg",
  "bg/hero-bg-2.jpg",
  "bg/hero-bg-3.jpg",
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
      <BestSellerSection />
      <PromotionLarge>
        <PromoCTA />
      </PromotionLarge>
      <MailingListSection />

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
