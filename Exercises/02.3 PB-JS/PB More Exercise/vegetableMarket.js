function vegetableMarket(input){


    let pricePerKgVegetable = Number(input[0]);
    let pricePerKgFruits = Number(input[1]);
    let vegetablesPrice = Number(input[2]);
    let fruitsPrice = Number(input[3]);
    let totalPrice = (pricePerKgVegetable * vegetablesPrice) + (pricePerKgFruits * fruitsPrice)
    let priceInEuro = (totalPrice / 1.94)
    console.log(priceInEuro.toFixed(2))


}
vegetableMarket(["0.194", "19.4", "10", "10"])