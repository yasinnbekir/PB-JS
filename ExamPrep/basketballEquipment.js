function basketballEquipment(input){
let yearFee = Number(input[0]);

let basketballShoes = yearFee - (yearFee * 0.40);
let basketballOutfit = basketballShoes - (basketballShoes * 0.20);
let basketballBall = basketballOutfit * 0.25;
let basketballAcsesory = basketballBall * 0.20;

let finalCost = basketballShoes + basketballOutfit + basketballBall + basketballAcsesory + yearFee

console.log(finalCost)



}


basketballEquipment(["365 "])