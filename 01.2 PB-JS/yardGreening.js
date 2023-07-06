function yardGreening(input){

    let yardArea = Number(input[0]);
    let finalPrice = yardArea * 7.61
    let discount = (finalPrice * 0.18)
    let finalPriceWithDiscount = finalPrice-discount
    console.log(`The final price is: ${finalPriceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`)




}

yardGreening(["550"])