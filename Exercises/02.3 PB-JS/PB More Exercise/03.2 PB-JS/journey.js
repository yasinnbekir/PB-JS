function journey(input){

let budget = Number(input[0]) ; 
let season = input[1] ; 
let destination = ""
let moneySpend = 0 ;
let restLocationType = ""
if(budget <= 100 ){
    destination = "Bulgaria"
    if(season === "summer"){
        moneySpend = budget - (budget * 0.3);
        restLocationType = "Camp"
    }
   else if(season === "winter"){
    moneySpend = budget - (budget * 0.7)
    restLocationType = "Hotel"

   }
}
else if(budget <= 1000){
    destination = "Balkans"
    if(season === "summer"){
        moneySpend = budget - (budget * 0.4);  
        restLocationType = "Camp" ; 
        
    }
    else if(season = "winter"){
        moneySpend = budget - (budget * 0.8);
        restLocationType = "Hotel" ;
    }
}
else if(budget > 1000){
    destination = "Europe"
    if(season === "summer"){
        moneySpend = budget - (budget * 0.9);
        restLocationType = "Hotel" ; 
    }
    else if(season === "winter"){
        moneySpend = budget - (budget * 0.9);
        restLocationType = "Hotel" ;

    }

}
console.log(`Somewhere in ${destination}`) ; 
console.log(`${restLocationType} - ${(budget - moneySpend).toFixed(2)}`);


}

journey(["678.53", "winter"])