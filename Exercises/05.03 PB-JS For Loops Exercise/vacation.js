function vacation(input) {
    let index = 0;
    let moneyNeed = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;
    let spendDayCounter = 0;
    let dayCounter = 0 ; 
    let isPosibleToSave = true ; 

    
    

    while(moneyAvailable < moneyNeed){
        let operation = input[index];
        index++;
        let presentSum = Number(input[index])
        index++;
        dayCounter++;
        switch(operation){
            case "spend" :
                moneyAvailable -= presentSum
                spendDayCounter++;
                if(moneyAvailable < 0 ){
                 moneyAvailable = 0;
                }
                if(spendDayCounter === 5 ){
                    isPosibleToSave = false;
                }
               
                break;
               
            case "save" :
                moneyAvailable += presentSum
                spendDayCounter = 0;
                break;
        }
        if(!isPosibleToSave){
            break;

        }
       
        
    }
    if(isPosibleToSave){
        console.log(`You saved the money for ${dayCounter} days.`);
    }else{
        
        console.log("You can't save the money.");
        console.log(`${dayCounter}`);

    }


}


vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
