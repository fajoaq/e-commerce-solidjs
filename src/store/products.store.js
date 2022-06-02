import { createStore } from "solid-js/store";

const [homepageProducts, setHomepageProducts] = createStore({
  featuredProducts: [],
  bestSellers: [],
});

const FULL_ROOM_FEATURED = [
  { type: "Bedrooms", url: "bg/bedroom-full-room.jpg" },
  { type: "Living Rooms", url: "bg/living-room-full-room.jpg" },
];

export { FULL_ROOM_FEATURED, homepageProducts, setHomepageProducts };

/* 


const BEST_SELLERS = [
  {
    src: "bg/featured-sofa.jpg",
    alt: "picture of a Wooden Dining Table",
    title: "Wooden Dining Table",
    price: 299,
  },
  {
    src: "bg/featured-table.jpg",
    alt: "picture of a table",
    title: "L-Sectional",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Bed",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
];

const BEST_SELLERS_DUMMY = [
  {
    src: CONSTANTS.imgPlaceholderMd,
    alt: "                                ",
    title: "                       ",
    price: "   ",
  },
];

const FEATURED_PRODUCTS = [
  {
    src: "bg/featured-sofa.jpg",
    alt: "picture of a Wooden Dining Table",
    title: "Wooden Dining Table",
    price: 299,
  },
  {
    src: "bg/featured-table.jpg",
    alt: "picture of a table",
    title: "L-Sectional",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Bed",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Bed",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
  {
    src: "bg/featured-bed.jpg",
    alt: "picture of a bed",
    title: "Bed",
    price: 299,
  },
  {
    src: "bg/featured-dresser.jpg",
    alt: "picture of a dresser drawer",
    title: "End Table",
    price: 299,
  },
];
*/
