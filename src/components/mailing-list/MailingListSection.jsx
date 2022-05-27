import styles from "./mailing-list.module.scss";

const MailingListSection = (props) => {
  return (
    <div
      class={styles.container}
      style={`--bgPosition: 50% 10px;--bgImg: url(/bg/mailing-list-bg.jpg);`}
    >
      <div class={[styles.inner_container].join()}>{props.children}</div>

      <div class={styles.overlay} />
    </div>
  );
};

export { MailingListSection };
