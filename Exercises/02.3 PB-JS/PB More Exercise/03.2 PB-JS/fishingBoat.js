function fishingBoat(input){

let budget = Number(input[0]);
let season = input[1] ; 
let countFishers = Number(input[2]) ; 
rentPrice = 0;

if(season === "Spring"){
    rentPrice = 3000 ;
    if(countFishers <= 6 ){
        rentPrice = rentPrice - (rentPrice * 0.10);

    }
    else if(countFishers >= 7 && countFishers <= 11){
        rentPrice = rentPrice - (rentPrice * 0.15);
    }
    else if(countFishers > 12 ){
        rentPrice = rentPrice - (rentPrice * 0.25);
    }
    else if(countFishers % 2 == 0 ){
            rentPrice = rentPrice - (rentPrice * 0.05)
        }
}
else if(season === "Summer"){
    rentPrice = 4200 ; 
    if(countFishers <= 6){
        rentPrice = rentPrice - (rentPrice * 0.10);
    }
    else if(countFishers >= 7 && countFishers <= 11){
        rentPrice = rentPrice - (rentPrice * 0.15);
    }
    else if(countFishers > 12 ){
        rentPrice = rentPrice - (rentPrice * 0.25);
    }
    else if(countFishers % 2 == 0  ){
        rentPrice = rentPrice - (rentPrice * 0.05);
    }
}
else if(season === "Autumn"){
    rentPrice = 4200 ; 
    if(countFishers <= 6 ){
        rentPrice = rentPrice - (rentPrice * 0.10);
    }
    else if(countFishers >= 7 && countFishers <= 11){
        rentPrice = rentPrice - (rentPrice * 0.15);
    }
    else if(countFishers > 12 ){
        rentPrice = rentPrice - (rentPrice * 0.25) ; 
    }
}
else if(season === "Winter"){
    rentPrice = 2600 ; 
    if(countFishers <= 6 ){
        rentPrice = rentPrice - (rentPrice * 0.10);
    }
    else if(countFishers >= 7 && countFishers <= 11){
        rentPrice = rentPrice - (rentPrice * 0.15);

    }
    else if(countFishers > 12 ){
        rentPrice = rentPrice - (rentPrice * 0.25);

    }
    else if(countFishers % 2 == 0){
        rentPrice = rentPrice - (rentPrice * 0.05)
    }
}
if(rentPrice <= budget){
    console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)

}else{
    console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`);
}




}

fishingBoat(["2000",
"Winter",
"13"])

