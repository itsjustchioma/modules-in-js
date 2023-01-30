import depositMoney from "./modules/depositMoney.js";
import withdrawMoney from "./modules/withdrawMoney.js";
import { getInputNumb, updateSpanTest } from "./modules/checkBalance.js";

console.log("Importing module");
depositMoney();
withdrawMoney();
getInputNumb();
updateSpanTest();
