import styles from "./service-banner.module.scss";
import appstyles from "../../styles/App.module.scss";

const ServiceBanner = (props) => (
  <div
    class={[styles.container, appstyles.container__global].join(" ")}
    {...props}
  >
    <div
      class={[styles.inner_container, appstyles.width_constraint__global].join(
        " "
      )}
    >
      <div class={styles.feature_container}>
        <div
          class={styles.features_icon}
          style={"--bgImg: url(/icons/shipping.svg);"}
        />

        <div class={styles.feature}>
          <h2>Free Shipping</h2>
          <p>On All Orders Over $99.99</p>
        </div>
      </div>

      <div class={styles.feature_container}>
        <div
          class={styles.features_icon}
          style={"--bgImg: url(/icons/handshake.svg);"}
        />

        <div class={styles.feature}>
          <h2>Warranty &amp; Money-Back Guarantee</h2>
          <p>We Stand By Our Quality</p>
        </div>
      </div>

      <div class={styles.feature_container}>
        <div
          class={styles.features_icon}
          style={"--bgImg: url(/icons/support.svg);"}
        />

        <div class={styles.feature}>
          <h2>Telephone &amp; Web Support</h2>
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>
      </div>
    </div>
  </div>
);

export { ServiceBanner };
