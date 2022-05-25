import { createSignal, createEffect } from "solid-js";
import { throttle } from "lodash";
import styles from "./promotion.module.scss";

const PromotionLarge = (props) => {
  const [bgPosY, setBgPosY] = createSignal(10);
  let oldYValue = 0;
  let newYValue = 0;

  const getScrollDirection = () => {
    // Get the new Value
    newYValue = window.pageYOffset;

    //Subtract the two and conclude
    if (oldYValue - newYValue > 0) {
      // Update the old value
      oldYValue = newYValue;
      return 1;
    } else {
      // Update the old value
      oldYValue = newYValue;
      return 0 - 1;
    }
  };

  const onScroll = () => {
    if (bgPosY > 150 || bgPosY < -50) {
      setBgPosY(10);
      return;
    }

    setBgPosY(bgPosY() + getScrollDirection() * 4);
  };

  createEffect(() => {
    window.addEventListener("scroll", throttle(onScroll, 160));
  });

  return (
    <div
      class={styles.container}
      style={`--bgPosition: 50% ${bgPosY()}px;--bgImg: url(/bg/promo-bg.jpg);`}
    >
      <div class={[styles.inner_container, styles.width_constraint].join(" ")}>
        {props.children}
      </div>

      <div class={styles.overlay} />
    </div>
  );
};

export { PromotionLarge };
