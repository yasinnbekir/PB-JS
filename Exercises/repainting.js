function repeating(input){

let nylonAmount = Number(input[0]);
let paintAmount = Number(input[1]);
let thinnerAmount = Number(input[2])
let hourNeed = Number(input[3])
let bagSum = 0.40
let nylonAmountSum = (nylonAmount + 2 ) * 1.50;
let paintAmountSum = ((paintAmount * 0.10) + paintAmount) * 14.50;
let thinnerAmountSum = thinnerAmount * 5

let finalSumMaterials = bagSum + nylonAmountSum + paintAmountSum + thinnerAmountSum
let WorkersAmount = (finalSumMaterials * 0.30) * hourNeed
let finalSum = finalSumMaterials + WorkersAmount
console.log(finalSum)


}

repeating(["10", "11", "4", "8"])