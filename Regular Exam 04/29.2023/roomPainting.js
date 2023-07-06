function  roomPainting(input){
    let paintBoxCount = Number(input[0]);
    let rollCount = Number(input[1]);
    let glovesPerPrice = Number(input[2]);
    let brushPerPrice = Number(input[3]);

    let paintPrice = paintBoxCount * 21.50;
    let rollPrice = rollCount * 5.20 ; 
    let glovesNeeded = Math.ceil(rollCount * 0.35);
    let brushNeeded = Math.floor(paintBoxCount * 0.48);
    let glovesPrice = glovesNeeded * glovesPerPrice;
    let brushPrice = brushNeeded * brushPerPrice;
    let totalProductsSum = paintPrice + rollPrice+glovesPrice+brushPrice

    let deliveryPrice = totalProductsSum * Math.abs(1/15);
    console.log(`This delivery will cost ${deliveryPrice.toFixed(2)} lv.`);





    
}
roomPainting(["10", "8", "2.2", "5"])