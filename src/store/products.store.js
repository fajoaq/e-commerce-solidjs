import { createStore } from "solid-js/store";

const [homepageProducts, setHomepageProducts] = createStore({
  featuredProducts: [],
  bestSellers: [],
});

const FULL_ROOM_FEATURED = [
  { type: "Bedrooms", url: "bg/bedroom-full-room" },
  { type: "Living Rooms", url: "bg/living-room-full-room" },
];

export { FULL_ROOM_FEATURED, homepageProducts, setHomepageProducts };
