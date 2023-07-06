function newHouse(input){

let type = input[0] ; 
let count = Number(input[1]) ; 
let budget = Number(input[2]) ; 
let totalPrice = 0 ; 
let finalPrice  = 0 ; 

if(type === "Roses"){
    totalPrice = count * 5 ;
    if(count > 80){
    finalPrice = totalPrice - (totalPrice * 0.10) ;
    }else{
    finalPrice = totalPrice ; 
     }
}
else if(type === "Dahlias"){
    totalPrice = count * 3.80 ; 
    if(count > 90){
    finalPrice = totalPrice - (totalPrice * 0.15) ;
    }else{
        finalPrice = totalPrice ;
    }
}
else if(type === "Tulips"){
    totalPrice = count * 2.80 ; 
    if(count > 80  ){
        finalPrice = totalPrice - (totalPrice * 0.15);
    }else{
        finalPrice = totalPrice ;
    }
}
else if(type === "Narcissus"){
    totalPrice = count * 3 ;
    if(count < 120){
        finalPrice = totalPrice + (totalPrice * 0.15);
    }else{
        finalPrice = totalPrice ;
    }
}
else if(type === "Gladiolus"){
    totalPrice = count * 2.50 ;
    if(count < 80 ){
        finalPrice = totalPrice + (totalPrice * 0.20 );
    }else{
        finalPrice = totalPrice ;
    }
}
if(finalPrice <= budget){
    console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget-finalPrice).toFixed(2)} leva left.`) 

}else{
    console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`)
}






 
    
}

newHouse(["Tulips",
"88",
"260"])

