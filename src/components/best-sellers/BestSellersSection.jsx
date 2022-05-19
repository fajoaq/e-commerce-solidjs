import styles from "./best-sellers.module.scss";

const BestSellerSection = (props) => (
  <div class={styles.container} {...props}>
    <div class={styles.item}>Leather Sofa</div>
    <div class={styles.item}>Coffee Table </div>
    <div class={styles.item}>Queen Bed</div>
    <div class={styles.item}>Dresser</div>
  </div>
);

export { BestSellerSection };
