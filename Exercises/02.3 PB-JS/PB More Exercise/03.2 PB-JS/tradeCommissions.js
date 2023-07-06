function tradeCommssions(input){

    let city = input[0] ;
    let saleVolume = Number(input[1]) ; 
    let totalPrice = 0; 

    if(city === "Sofia"){
        if(saleVolume >= 0 && saleVolume <= 500){
        totalPrice = saleVolume * 0.05 ; 
        }
        else if(saleVolume > 500 && saleVolume <= 1000){
        totalPrice = saleVolume * 0.07 ; 
        }
        else if(saleVolume > 1000 && saleVolume <= 10000){
        totalPrice = saleVolume * 0.08 ; 
        }
        else if(saleVolume > 10000){
            totalPrice = saleVolume * 0.12 ; 
        }
    }
    else if(city === "Varna"){
        if(saleVolume >= 0 && saleVolume <= 500){
            totalPrice = saleVolume * 0.045 ; 
        }
        else if(saleVolume > 500 && saleVolume <= 1000){
            totalPrice = saleVolume * 0.075 ; 
        }
        else if(saleVolume > 1000 && saleVolume <= 10000){
            totalPrice = saleVolume * 0.10 ; 
        }
        else if(saleVolume > 10000){
                totalPrice = saleVolume * 0.13 ;
        }
    
    }
    else if(city === "Plovdiv"){
        if(saleVolume >= 0 && saleVolume <= 500){
            totalPrice = saleVolume * 0.055 ;
        }
        else if(saleVolume > 500 && saleVolume <= 1000){
            totalPrice = saleVolume * 0.08 ;
        }
        else if(saleVolume > 1000 && saleVolume <= 10000)
        {
            totalPrice = saleVolume * 0.12 ; 
        }
        else if(saleVolume > 10000){
            totalPrice = saleVolume * 0.145
        }
    }else{
        console.log("error")
    }


console.log(totalPrice.toFixed(2))

}

tradeCommssions(["Kaspichan",
"-50"])


