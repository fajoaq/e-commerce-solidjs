import { createSignal, createEffect, onCleanup, splitProps } from "solid-js";
import { throttle } from "lodash";

const ScrollBgPosYProvider = (props) => {
  const [local, others] = splitProps(props, [
    "children",
    "Component",
    "scrollThreshold",
  ]); // preserver reactivity while splitting props
  const [bgPosY, setBgPosY] = createSignal(100);
  const [tracking, setTracking] = createSignal(undefined);
  let observer = undefined;
  let targetEl = undefined;
  let oldYValue = 0;
  let newYValue = 0;

  function toggleTracking(entries) {
    if (tracking() === undefined) {
      setTracking(false);
      return null;
    } // initial page load

    if (entries[0].isIntersecting) setTracking(true);
    else setTracking(false);
  }

  function getScrollDirection() {
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
  }

  function onScroll() {
    if (tracking() === false || targetEl === undefined) return null;

    if (bgPosY() > local.scrollThreshold || bgPosY() < -local.scrollThreshold) {
      oldYValue = 100;
      setBgPosY(100);
      return null;
    }

    setBgPosY(bgPosY() + getScrollDirection() * 4);
  }

  const throttledOnScroll = throttle(onScroll, 60);

  createEffect(() => {
    targetEl = document.getElementById("promo-bg-target");
    window.addEventListener("scroll", throttledOnScroll);
    observer = new IntersectionObserver(toggleTracking);
    observer.observe(targetEl);
  }); // setup on component mount

  onCleanup(() => {
    window.removeEventListener("scroll", throttledOnScroll);
    observer.unobserve(targetEl);
  }); // cleanup on unmount

  return (
    <local.Component {...others} bgPosY={bgPosY()}>
      {local.children}
    </local.Component>
  );
};

export { ScrollBgPosYProvider };
