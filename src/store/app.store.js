import { createStore } from "solid-js/store";

const [appState, setAppState] = createStore({
  deviceType: undefined,
});

export { appState, setAppState };
