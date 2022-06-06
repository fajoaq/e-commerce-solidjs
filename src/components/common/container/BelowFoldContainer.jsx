import { createEffect, createSignal, splitProps } from "solid-js";

// conditionally render components below the fold
const BelowFoldContainer = (props) => {
  const [local, rest] = splitProps(props, ["inView", "children"]);
  const [render, setRender] = createSignal(false);

  createEffect(() => {
    if (render()) return;

    if (local.inView) setRender(true);
  });

  return <div {...rest}>{render() && local.children}</div>;
};

export { BelowFoldContainer };
