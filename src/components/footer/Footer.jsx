import styles from "./footer.module.css";

const Footer = (props) => (
  <div class={styles.container} {...props}>
    <div class={styles.inner_container}>
      <div class={styles.item}>Busines Name</div>
      <div class={styles.item}>Contact</div>
      <div class={styles.item}>Menu</div>
      <div class={styles.item}>Follow Us</div>
    </div>
  </div>
);

export { Footer };
