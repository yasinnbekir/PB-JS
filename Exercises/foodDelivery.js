function foodDelivery(input){

let chickenMenuCount = Number(input[0]);
let fishMenuCount = Number(input[1]);
let vegMenuCount = Number(input[2]) 

let chickenMenuPrice = chickenMenuCount * 10.35;
let fishMenuPrice = fishMenuCount * 12.40;
let vegMenuPrice = vegMenuCount * 8.15;
let dessertPrice = (chickenMenuPrice + fishMenuPrice + vegMenuPrice) * 0.20;
let deliveryPrice = 2.50;
let finalSumOrder = chickenMenuPrice + fishMenuPrice + vegMenuPrice + dessertPrice + deliveryPrice;
console.log(finalSumOrder)


}

foodDelivery(["2", "4", "3"])