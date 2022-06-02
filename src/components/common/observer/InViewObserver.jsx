import { createSignal, createEffect, onCleanup, splitProps } from "solid-js";

let observingTotal = 0;

const InViewObserver = (props) => {
  const [local, rest] = splitProps(props, [
    "Component",
    "children",
    "observeOptions",
  ]);
  const [inView, setInView] = createSignal(true);
  const observeId = observingTotal;
  let observer = undefined;

  function toggleTracking(entries) {
    if (entries[0].isIntersecting) setInView(true);
    else setInView(false);
  }

  createEffect(() => {
    const targetEl = document.getElementById(`observeId-${observeId}`);
    observer = new IntersectionObserver(
      toggleTracking,
      local.observeOptions ? local.observeOptions : {}
    );

    observer.observe(targetEl);
    observingTotal++;
  }); // setup on component mount

  onCleanup(() => {
    observer.unobserve(targetEl);
    observer.disconnect();
  }); // cleanup on unmount

  return (
    <local.Component id={`observeId-${observeId}`} inView={inView()} {...rest}>
      {local.children}
    </local.Component>
  );
};

export { InViewObserver };
