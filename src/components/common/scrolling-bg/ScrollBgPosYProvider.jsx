import { createSignal, onCleanup, splitProps } from "solid-js";
import { throttle } from "lodash";

import { getScrollDirection } from "../../../utils/get-scroll-direction";

/* 
    Component - JSX wrapper, props are passed in
    scrollThreshold - Bg scroll snapping threshold
    observeOptions - Options passed to the observer
*/

const ScrollBgPosYProvider = (props) => {
  const [local, others] = splitProps(props, [
    "id",
    "children",
    "Component",
    "scrollThreshold",
    "observeOptions",
  ]); // preserve reactivity while splitting props
  const [bgPosY, setBgPosY] = createSignal(100);
  const [tracking, setTracking] = createSignal(undefined);
  let observer = undefined;
  let targetEl = undefined;
  let yVal = 0;

  function toggleTracking(entries) {
    if (tracking() === undefined) {
      setTracking(false);
      return null;
    } // initial page load

    if (entries[0].isIntersecting) setTracking(true);
    else setTracking(false);
  }

  function onScroll() {
    if (tracking() === false || targetEl === undefined) return null;

    if (bgPosY() > local.scrollThreshold || bgPosY() < -local.scrollThreshold) {
      yVal = 100;
      setBgPosY(100);
      return null;
    }

    setBgPosY(bgPosY() + getScrollDirection(yVal) * 4);
    yVal = window.scrollY;
  }

  const throttledOnScroll = throttle(onScroll, 60);

  function setTargetEl() {
    targetEl = document.getElementById(local.id);

    window.addEventListener("scroll", throttledOnScroll);
    observer = new IntersectionObserver(
      toggleTracking,
      local.observeOptions ? local.observeOptions : {}
    );

    observer.observe(targetEl);
  } // setup observer on Component mount

  onCleanup(() => {
    window.removeEventListener("scroll", throttledOnScroll);
    observer.unobserve(targetEl);
    observer.disconnect();
  }); // cleanup on unmount

  return (
    <local.Component
      {...others}
      id={local.id}
      bgPosY={bgPosY()}
      onLoad={setTargetEl}
    >
      {local.children}
    </local.Component>
  );
};

export { ScrollBgPosYProvider };
