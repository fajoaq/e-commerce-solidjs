import { createSignal, onCleanup, splitProps, onMount } from "solid-js";

const InViewObserver = (props) => {
  const [local, rest] = splitProps(props, [
    "id",
    "Component",
    "children",
    "defaultState",
    "observeOptions",
    "callback",
  ]);
  const [inView, setInView] = createSignal(local.defaultState || false);
  let observer = undefined;

  function toggleTracking(entries) {
    if (entries[0].isIntersecting) {
      if (local.callback) local.callback(true);
      setInView(true);
    } else {
      if (local.callback) local.callback(false);
      setInView(false);
    }
  }

  onMount(() => {
    const targetEl = document.getElementById(local.id);
    observer = new IntersectionObserver(
      toggleTracking,
      local.observeOptions ? local.observeOptions : {}
    );

    observer.observe(targetEl);
  }); // setup on component mount

  onCleanup(() => {
    observer.unobserve(targetEl);
    observer.disconnect();
  }); // cleanup on unmount

  return (
    <local.Component id={local.id} inView={inView()} {...rest}>
      {local.children}
    </local.Component>
  );
};

export { InViewObserver };
