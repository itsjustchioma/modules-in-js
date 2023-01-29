import add, { cart } from "./modules/shoppingCart.js";

console.log("Importing module");
add("pizza", 2);
add("pizza", 5);
add("pizza", 4);

console.log(cart);
