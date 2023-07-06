function smallShop(input){

let product = (input[0])
let city = (input[1])
let count = Number(input[2])
let totalPrice = 0 ;

switch(city){
    case "Sofia" :
        switch(product){
            case "coffe" : totalPrice=count * 0.5  
            break;
            case "water" : totalPrice=count * 0.8 
            break;
            case "beer" : totalPrice=count * 1.2 
            break;
            case "sweets" : totalPrice = count * 1.45 
            break;
            case "peanuts" : totalPrice=count * 1.6 
            break;
        
        }
        
        break;
    case "Plovdiv" :
        switch(product){
            case "coffe" : totalPrice = count * 0.4  
            break;
            case "water" : totalPrice = count * 0.7 
            break;
            case "beer" : totalPrice = count * 1.15 
            break;
            case "sweets" : totalPrice = count * 1.30  
            break;
            case "peanuts" : totalPrice = count * 1.50 
            break; 
        }
        
        break;
    case "Varna" :
        switch(product){
            case "coffe" : totalPrice = count * 0.45 ; 
            break;
            case "water" : totalPrice = count * 0.7 ; 
            break;
            case "beer" : totalPrice = count * 1.1 ; 
            break;
            case "sweets" : totalPrice = count * 1.35 ; 
            break;
            case "peanuts" : totalPrice = count * 1.55 ;
            break; 

        }
        
        break;

}

 
console.log(totalPrice)



}

smallShop(["coffe",
"Varna",
"2"])

