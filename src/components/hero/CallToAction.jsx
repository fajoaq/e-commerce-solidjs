import styles from "./hero.module.css";

const CallToAction = (props) => (
  <div class={styles.cta_container} {...props}>
    Call To Action
  </div>
);

export { CallToAction };
