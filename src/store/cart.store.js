import { createStore } from "solid-js/store";

const [cartState, setCartState] = createStore({
  content: [],
});

export { cartState, setCartState };
