import appstyles from "./styles/App.module.scss";
import { createEffect, createResource } from "solid-js";

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
import { CustomerQuotes } from "./components/user-reviews/CustomerQuotes";
import { Footer } from "./components/footer/Footer";
import { ScrollBgPosYProvider } from "./components/common/scrolling-bg/ScrollBgPosYProvider";
import { CUSTOMER_QUOTES } from "./store/quotes.store";
import { getProductData } from "./utils/get-product-data";
import { InViewObserver } from "./components/common/observer/InViewObserver";
import {
  FULL_ROOM_FEATURED,
  homepageProducts,
  setHomepageProducts,
} from "./store/products.store";

const heroImgUrlArr = [
  { url: "bg/hero-bg-1.jpg" },
  { url: "bg/hero-bg-2.jpg" },
  { url: "bg/hero-bg-3.jpg" },
];

const DEFAULT_QUERY = {
  content_type: "product",
  "fields.featuredLocations[exists]": true,
};

function App() {
  const [productData] = createResource(DEFAULT_QUERY, getProductData);

  createEffect(async () => {
    // get homepage featured products after init render
    // these items are below the fold
    if (productData.loading || homepageProducts.featuredProducts.length) return;

    let featuredArr = [];
    let bestSellerArr = [];

    productData().forEach((prod) => {
      const reducedLocationsArr = new Set(prod.featuredLocations);
      if (reducedLocationsArr.has("featured_products")) featuredArr.push(prod);

      if (reducedLocationsArr.has("best_sellers")) bestSellerArr.push(prod);
    });

    setHomepageProducts({
      featuredProducts: featuredArr,
      bestSellers: bestSellerArr,
    });
  });

  return (
    <div class={appstyles.App}>
      <MainNavigation />

      <InViewObserver
        Component={(props) => <Hero {...props} slidesOn={props.inView} />}
        imgUrlList={heroImgUrlArr}
      >
        <CallToAction />
      </InViewObserver>

      <ServiceBanner />

      <FullRoomSection featured={FULL_ROOM_FEATURED} />

      <ProductShowcase
        products={homepageProducts.bestSellers}
        loading={productData.loading}
      >
        <p>Start By Browsing What People Love</p>
        <h2>Best Sellers</h2>
      </ProductShowcase>

      {/* HOC takes an jsx component and passes reactive props to it */}
      {/* Promotion Section */}
      <ScrollBgPosYProvider
        scrollThreshold={200}
        Component={(props) => <PromotionLarge {...props} />}
      >
        <PromoCTA />
      </ScrollBgPosYProvider>

      <ProductShowcase
        products={homepageProducts.featuredProducts}
        loading={productData.loading}
      >
        <p>Our Staff's Personal Picks</p>
        <h2>Featured Products</h2>
      </ProductShowcase>

      <MailingListSection>
        <MailingCTA />
      </MailingListSection>

      <CustomerQuotes userQuotes={CUSTOMER_QUOTES}>
        <h2>Satisfied Customer Quotes</h2>
      </CustomerQuotes>

      <Footer />
    </div>
  );
}

export default App;
