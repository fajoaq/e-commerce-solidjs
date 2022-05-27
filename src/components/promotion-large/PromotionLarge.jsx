import { splitProps } from "solid-js";
import styles from "./promotion.module.scss";
import appstyles from "../../styles/App.module.scss";

const PromotionLarge = (props) => {
  // preserver reactivity while splitting props
  const [local, others] = splitProps(props, ["bgPosY"]);

  return (
    <div
      class={styles.container}
      id="promo-bg-target"
      style={`--bgPosition: 50% ${local.bgPosY}px;--bgImg: url(/bg/promo-bg.jpg);`}
      {...others}
    >
      <div
        class={[
          styles.inner_container,
          appstyles.width_constraint__global,
        ].join(" ")}
      >
        {props.children}
      </div>

      <div class={styles.overlay} />
    </div>
  );
};

export { PromotionLarge };
