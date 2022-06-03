import appstyles from "../../styles/App.module.scss";
import { lazy, splitProps } from "solid-js";

import { BelowFoldContainer } from "../../components/common/container/BelowFoldContainer";
import { MainNavigation } from "../../components/navigation/MainNavigation";
import { Hero } from "../../components/hero/Hero";
import { CallToAction } from "../../components/hero/CallToAction";
import { ServiceBanner } from "../../components/service-banner/ServiceBanner";
import { FullRoomSection } from "../../components/full-rooms/FullRoomSection";
import { CUSTOMER_QUOTES } from "../../store/quotes.store";
import { InViewObserver } from "../../components/common/observer/InViewObserver";
import {
  FULL_ROOM_FEATURED,
  homepageProducts,
} from "../../store/products.store";

const MailingListSection = lazy(() =>
  import("../../components/mailing-list/MailingListSection").then((module) => ({
    default: module.MailingListSection,
  }))
);
const ProductShowcase = lazy(() =>
  import("../../components/common/product/ProductShowcase").then((module) => ({
    default: module.ProductShowcase,
  }))
);
const ScrollBgPosYProvider = lazy(() =>
  import("../../components/common/scrolling-bg/ScrollBgPosYProvider").then(
    (module) => ({
      default: module.ScrollBgPosYProvider,
    })
  )
);
const PromotionLarge = lazy(() =>
  import("../../components/promotion-large/PromotionLarge").then((module) => ({
    default: module.PromotionLarge,
  }))
);
const PromoCTA = lazy(() =>
  import("../../components/promotion-large/CallToAction").then((module) => ({
    default: module.CallToAction,
  }))
);
const MailingCTA = lazy(() =>
  import("../../components/mailing-list/CallToActions").then((module) => ({
    default: module.CallToAction,
  }))
);
const CustomerQuotes = lazy(() =>
  import("../../components/user-reviews/CustomerQuotes").then((module) => ({
    default: module.CustomerQuotes,
  }))
);
const Footer = lazy(() =>
  import("../../components/footer/Footer").then((module) => ({
    default: module.Footer,
  }))
);

const heroImgUrlArr = [
  { url: "bg/hero-bg-1.jpg" },
  { url: "bg/hero-bg-2.jpg" },
  { url: "bg/hero-bg-3.jpg" },
];

const HomePageLayout = (props) => {
  const [local, rest] = splitProps(props, ["productData", "loading"]);

  return (
    <>
      <div class={appstyles.App}>
        <MainNavigation />
        {/* HOC takes an jsx component and passes reactive props to it */}
        {/* HERO COMPONENT */}
        <InViewObserver
          id="hero-component"
          Component={(props) => <Hero {...props} slidesOn={props.inView} />}
          imgUrlList={heroImgUrlArr}
          defaultState={true}
        >
          <CallToAction />
        </InViewObserver>

        <ServiceBanner />

        <FullRoomSection featured={FULL_ROOM_FEATURED} />
      </div>
      {/* lazy load comp below the fold */}
      {/* HOC takes an jsx component and passes reactive props to it */}
      <InViewObserver
        id="below-the-fold"
        class={appstyles.App}
        Component={(props) => <BelowFoldContainer {...props} />}
        observeOptions={{ threshold: 0.01, rootMargin: "180px" }}
      >
        {/* BEST SELLERS COMPONENT */}
        <ProductShowcase
          products={homepageProducts.bestSellers}
          loading={local.loading}
        >
          <p>Start By Browsing What People Love</p>
          <h2>Best Sellers</h2>
        </ProductShowcase>

        {/* HOC takes an jsx component and passes reactive props to it */}
        {/* Promotion Section */}
        <ScrollBgPosYProvider
          id="promo-with-bg-scroll"
          scrollThreshold={200}
          Component={(props) => <PromotionLarge {...props} />}
        >
          <PromoCTA />
        </ScrollBgPosYProvider>

        <ProductShowcase
          products={homepageProducts.featuredProducts}
          loading={local.loading}
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
      </InViewObserver>
    </>
  );
};

export { HomePageLayout };
