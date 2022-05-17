import styles from "./featured-products.module.css";

const FeaturedProducts = (props) => (
  <div class={styles.container} {...props}>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
    <div class={styles.item}>Image</div>
  </div>
);

export { FeaturedProducts };
