import styles from "./main-navigation.module.scss";
import { splitProps } from "solid-js";

const ButtonWithSubMenu = (props) => {
  const [local, rest] = splitProps(props, ["children", "title", "class"]);
  return (
    <button
      class={
        local.class
          ? local.class
          : [styles.button_with_sub, styles.button].join(" ")
      }
      {...rest}
    >
      <p>
        {local.title} <span class={styles.menu_indicator}> &gt;</span>
      </p>
      <div>{local.children}</div>
    </button>
  );
};
const Button = (props) => {
  const [local, rest] = splitProps(props, ["children", "title", "class"]);
  return (
    <button
      class={local.class ? local.class : styles.button_with_sub}
      {...rest}
    >
      <p>{local.title}</p>
    </button>
  );
};

export { ButtonWithSubMenu, Button };
