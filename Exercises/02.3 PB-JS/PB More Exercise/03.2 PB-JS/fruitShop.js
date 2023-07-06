function fruitShop(input){

let fruit = input[0] ;
let day = input[1] ; 
let count = Number(input[2]) ; 
let totalPrice = 0 ; 

switch(day){
    case "Monday" :
    case "Tuesday" : 
    case "Wednesday":
    case "Thursday" : 
    case "Friday" : 
        switch(fruit){
            case "banana" : totalPrice = count * 2.50 ;
            break;
            case "apple" : totalPrice = count * 1.20 ;
            break;
            case "orange"  : totalPrice = count * 0.85 ;
            break;
            case "grapefruit" : totalPrice = count * 1.45 ;
            break;
            case "kiwi" : totalPrice = count * 2.70 ; 
            break;
            case "pineapple" : totalPrice = count * 5.50 ;
            break; 
            case "grapes" : totalPrice = count * 3.85 ;
            break;
            
        }
    break;

    case "Saturday" :
    case "Sunday" :
        switch(fruit){
            case "banana" : totalPrice = count * 2.70 ; 
            break;
            case "apple" : totalPrice = count * 1.25 ; 
            break; 
            case "orange" : totalPrice = count * 0.90 ; 
            break; 
            case "grapefruit" : totalPrice = count * 1.60 ; 
            break;
            case "kiwi" : totalPrice = count * 3 ;
            break; 
            case "pineapple" : totalPrice = count * 5.60 ; 
            break;
            case "grapes" : totalPrice = count * 4.20 ;
            break;
            default : 
                console.log("error")
            break;
        }


    break;  
}
console.log(totalPrice.toFixed(2))


}

fruitShop(["karpuz",
"Sunday",
"3"])

