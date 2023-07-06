function toyShop(input){

    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCoount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalToysPrice = (puzzleCount * 2.60) + (dollCount * 3) + (bearCoount * 4.10) + (minionCount  * 8.20) + (truckCount * 2 );
    let totalToyCount = puzzleCount + dollCount + bearCoount + minionCount + truckCount;

    if(totalToyCount >= 50){
        totalToysPrice = totalToysPrice - (totalToysPrice*0.25);
    }
    let rent = totalToysPrice * 0.10
    let finalProfit = totalToysPrice - rent
    let moneyLeftAfterPay = finalProfit - vacationPrice;

    if(finalProfit > vacationPrice){
        console.log(`Yes! ${(moneyLeftAfterPay).toFixed(2)}  lv left.`)
    }else{
        console.log(`Not enough money! ${(vacationPrice - finalProfit).toFixed(2)} lv needed.`)
    }



}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


