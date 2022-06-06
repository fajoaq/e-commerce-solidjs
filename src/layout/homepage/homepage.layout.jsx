import appstyles from "../../styles/App.module.scss";
import {
  createEffect,
  lazy,
  createSignal,
  createResource,
  splitProps,
} from "solid-js";

import { getProductData } from "../../utils/get-product-data";
import { BelowFoldContainer } from "../../components/common/container/BelowFoldContainer";
import { Hero } from "../../components/hero/Hero";
import { CallToAction } from "../../components/hero/CallToAction";
import { ServiceBanner } from "../../components/service-banner/ServiceBanner";
import { FullRoomSection } from "../../components/full-rooms/FullRoomSection";
import { CUSTOMER_QUOTES } from "../../store/quotes.store";
import { InViewObserver } from "../../components/common/observer/InViewObserver";
import {
  FULL_ROOM_FEATURED,
  homepageProducts,
  setHomepageProducts,
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
  { url: "bg/hero/hero-bg-1" },
  { url: "bg/hero/hero-bg-2" },
  { url: "bg/hero/hero-bg-3" },
];

const DEFAULT_QUERY = {
  content_type: "product",
  "fields.featuredLocations[exists]": true,
};

const HomePageLayout = (props) => {
  const [local, rest] = splitProps(props, ["toggleNavPopper"]);
  const [shouldQueryApi, setShouldQueryApi] = createSignal(false);
  const [productData] = createResource(DEFAULT_QUERY, getProductData);

  function onRenderBelowFold(value) {
    if (value === true) setShouldQueryApi(true);
  }

  createEffect(async () => {
    if (!shouldQueryApi()) return;

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
    <>
      {/* nav popper actives/deactivates at fold threshold */}
      <InViewObserver
        id="above-the-fold"
        Component={(props) => <div {...props} class={appstyles.App} />}
        observeOptions={{ threshold: 0.1, rootMargin: "180px" }}
        defaultState={true}
        callback={local.toggleNavPopper}
      >
        <div class={appstyles.App}>
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
      </InViewObserver>
      {/* lazy load comps below the fold */}
      {/* HOC takes an jsx component and passes reactive props to it */}
      <InViewObserver
        id="below-the-fold"
        class={appstyles.App}
        Component={(props) => <BelowFoldContainer {...props} />}
        observeOptions={{ threshold: 0.01, rootMargin: "180px" }}
        callback={onRenderBelowFold}
      >
        {/* BEST SELLERS COMPONENT */}
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
          id="promo-with-bg-scroll"
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
      </InViewObserver>
    </>
  );
};

export { HomePageLayout };
