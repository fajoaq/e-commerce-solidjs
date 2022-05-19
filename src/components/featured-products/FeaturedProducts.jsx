import styles from "./featured-products.module.scss";

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
