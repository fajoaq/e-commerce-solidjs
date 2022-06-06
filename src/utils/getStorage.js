import { cartState } from "../store/cart.store";

function getStorage(storage, prefix) {
  // get cart value from local storage
  let initCartValue = { ...cartState };
  try {
    initCartValue = JSON.parse(storage.getItem(prefix) ?? "{}");
  } catch (error) {
    console.log(error);
  }

  return initCartValue;
}

export { getStorage };
