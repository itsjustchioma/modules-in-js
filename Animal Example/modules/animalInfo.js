import { animalClass, animalName, binomialName } from "./animal.js";

// console.log("Exporting module: animalInfo");

const animalInfo = function () {
    const message = `Animal name: ${animalName}. Binomial name: ${binomialName}. Class: ${animalClass}`;
    document.getElementById("demo").innerHTML = message;
};

export default animalInfo;
