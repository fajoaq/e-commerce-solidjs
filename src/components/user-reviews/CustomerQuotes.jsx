import { For } from "solid-js";
import styles from "./user-reviews.module.scss";

import { UserReview } from "./UserReview";

const CustomerQuotes = (props) => (
  <div class={styles.container} {...props}>
    {props.children}

    <div class={styles.inner_container}>
      <For each={props.userQuotes}>
        {(item) => (
          <UserReview
            src={item.src}
            alt={item.alt}
            name={item.name}
            quote={item.quote}
          />
        )}
      </For>
    </div>
  </div>
);

export { CustomerQuotes };
