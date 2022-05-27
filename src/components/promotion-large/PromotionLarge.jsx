import { createSignal, createEffect, onCleanup } from "solid-js";
import { throttle } from "lodash";
import styles from "./promotion.module.scss";
import appstyles from "../../styles/App.module.scss";

const PromotionLarge = (props) => {
  const [bgPosY, setBgPosY] = createSignal(200);
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
    if (bgPosY() > 200 || bgPosY() < -200) {
      oldYValue = 10;
      setBgPosY(10);
      return;
    }

    setBgPosY(bgPosY() + getScrollDirection() * 3);
  };

  const throttledOnScroll = () => throttle(onScroll, 60);

  createEffect(() => {
    window.addEventListener("scroll", throttledOnScroll());
  });

  onCleanup(() => {
    window.removeEventListener("scroll", throttledOnScroll);
  });

  return (
    <div
      class={styles.container}
      style={`--bgPosition: 50% ${bgPosY()}px;--bgImg: url(/bg/promo-bg.jpg);`}
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
