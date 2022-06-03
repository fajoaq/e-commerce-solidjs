import { onMount, splitProps } from "solid-js";
import styles from "./promotion.module.scss";
import appstyles from "../../styles/App.module.scss";

const PromotionLarge = (props) => {
  // preserve reactivity while splitting props
  const [local, rest] = splitProps(props, ["children", "bgPosY", "onLoad"]);

  onMount(() => local.onLoad());

  return (
    <div
      class={styles.container}
      id="promo-bg-target"
      style={`--bgPosition: 50% ${local.bgPosY}px;--bgImg: url(/bg/promo-bg.jpg);`}
      {...rest}
    >
      <div
        class={[
          styles.inner_container,
          appstyles.width_constraint__global,
        ].join(" ")}
      >
        {local.children}
      </div>

      <div class={styles.overlay} />
    </div>
  );
};

export { PromotionLarge };
