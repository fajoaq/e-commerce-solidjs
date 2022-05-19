import styles from "./mailing-list.module.scss";

const MailingListSection = (props) => (
  <div class={styles.container} {...props}>
    <div class={[styles.inner_container, styles.width_constraint].join(" ")}>
      Join Our Mailing List
    </div>
  </div>
);

export { MailingListSection };
