function summerOutfit(input){

let temperature = Number(input[0]);
let time = input[1] ; 
let outfit 
let shoes

if(time === "Morning"){
    if(temperature >= 10  && temperature <= 18){
        outfit = "Sweatshirt" ;
        shoes = "Sneakers" ; 
    }
    else if(temperature > 18 && temperature <= 24){
        outfit = "Shirt" ; 
        shoes = "Moccasins" ; 
    }
    else if(temperature >= 25){
        outfit = "T-Shirt" ;
        shoes = "Sandals" ;
    }
}
else if(time === "Afternoon"){
    if(temperature >= 10 && temperature <= 18){
        outfit = "Shirt" ;
        shoes = "Moccasins" ; 
    }
    else if(temperature > 18 && temperature <= 24 ){
        outfit = "T-Shirt" ;
        shoes = "Sandals" ;
    }
    else if(temperature >= 25){
        outfit = "Swim Suit" ; 
        shoes = "Barefoot" ; 
    }
}
else if(time === "Evening"){
    if(temperature >= 10 && temperature <= 18  ){
        outfit = "Shirt" ;
        shoes = "Moccasins" ; 

    }
    else if(temperature > 18 && temperature <= 24){
        outfit = "Shirt" ;
        shoes = "Moccasins" ; 
    }
    else if(temperature >= 25 ){
        outfit = "Shirt" ; 
        shoes = "Moccasins"
    }






}

console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)







}


summerOutfit(["16",
"Morning"])
