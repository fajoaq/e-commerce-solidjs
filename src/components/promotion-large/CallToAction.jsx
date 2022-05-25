import styles from "./promotion.module.scss";

const CallToAction = (props) => (
  <div class={styles.cta_container} {...props}>
    <h2>Our Monthly Sale</h2>
    <p class={styles.promo_p}>
      <span>20% Off</span>
      <br />
      <span>All Bedroom Items</span>
    </p>
    <p>Take advantage and order your next bedroom furnishing today!</p>
    <div class={styles.cta_button}>
      <a>Shop Now</a>
    </div>
  </div>
);

export { CallToAction };
