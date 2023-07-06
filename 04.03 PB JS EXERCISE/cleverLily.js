function cleverLily(input){


let age = Number(input[0]);
let washerPrice = Number(input[1]);
let pricePerToy = Number(input[2]);

let moneyBdReceived = 10;
let totalSumSaved = 0;

for(let curBd = 1; curBd <= age; curBd++){
    if(curBd % 2 === 0){
        totalSumSaved += (moneyBdReceived - 1);

        moneyBdReceived += 10;
    }else{
        totalSumSaved += pricePerToy
    }

}
if(totalSumSaved >= washerPrice){
    console.log(`Yes! ${(totalSumSaved - washerPrice).toFixed(2)} `);

}else{
    console.log(`No! ${(washerPrice - totalSumSaved).toFixed(2)}`);
}



}

cleverLily(["21",
"1570.98",
"3"])

