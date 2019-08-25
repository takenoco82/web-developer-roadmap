import $ from "jquery";
import { addCalc } from "./modules/addition-calculator";
import { taxCalc } from "./modules/tax-calculator";

const item1Price = 400;
const item2Price = 600;

const totalPrice = addCalc(item1Price, item2Price);
const tax = 1.08;
const priceIncludeTax = taxCalc(totalPrice, tax);

console.log(`税込価格=${priceIncludeTax}`);
$('body').html(priceIncludeTax);
