import styles from "./promotion.module.css";

const PromotionLarge = (props) => (
  <div class={styles.container} {...props}>
    <div class={[styles.inner_container, styles.width_constraint].join(" ")}>
      20% Off All Bedroom Items
    </div>
  </div>
);

export { PromotionLarge };
