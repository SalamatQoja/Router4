import Coldcuts from "./image/Coldcuts.jpg";
import pepperoni from "./image/pepperoni.jpg";
import feta from "./image/feta.png";
import Mozzarella from "./image/Mozzarella.png";
import Spices from "./image/Spices.jpg";
import Vegetables from "./image/Vegetables.jpg";

const ingredients = [
    { id: 1, code: "XOo01",name: "Cold cuts", price: 0.35, image: Coldcuts },
    { id: 2, code: "Xow02", name: "Pepperoni", price: 0.25, image: pepperoni },
    { id: 3, code: "Xoe03", name: "Feta", price: 0.15, image: feta},
    { id: 4, code: "Xot04", name: "Mozzarella", price: 0.10, image: Mozzarella},
    { id: 5, code: "Xos05", name: "Spices", price: 0.25, image: Spices },
    { id: 6, code: "Xou06", name: "Vegetabless", price: 0.75, image: Vegetables},
];

export default ingredients;