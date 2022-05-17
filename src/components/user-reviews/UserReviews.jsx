import styles from "./user-reviews.module.css";

const UserReviews = (props) => (
  <div class={styles.container} {...props}>
    <div class={styles.header}>Satisfied Customer Quotes</div>
    <div class={[styles.inner_container, styles.width_constraint].join(" ")}>
      <div class={styles.item}>Image</div>
      <div class={styles.item}>Image</div>
      <div class={styles.item}>Image</div>
    </div>
  </div>
);

export { UserReviews };
