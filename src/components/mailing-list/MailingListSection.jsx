import { createSignal, createEffect, onCleanup } from "solid-js";
import { throttle } from "lodash";
import styles from "./mailing-list.module.scss";

const MailingListSection = (props) => {
  return (
    <div
      class={styles.container}
      style={`--bgPosition: 50% 10px;--bgImg: url(/bg/mailing-list-bg.jpg);`}
    >
      <div class={[styles.inner_container, styles.width_constraint].join(" ")}>
        {props.children}
      </div>

      <div class={styles.overlay} />
    </div>
  );
};

export { MailingListSection };
