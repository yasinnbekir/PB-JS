function puppyCare(input){
    let index = 0;
    let foodAmountKg = (Number(input[index]) * 1000);
    index++;
    let command = input[index]
    index++;
    let foodCounter = 0;
    isEnough = false;
    while(command !== "Adopted"){
        let foodPerMeal = Number(command);

        
        if(foodCounter < foodAmountKg){
            isEnough = true;

        }else{
            isEnough = false;
        }

        foodCounter += foodPerMeal
        command = input[index]
        index++;


    }
    
    if(isEnough){
        let foodEnough = foodAmountKg - foodCounter;
        console.log(`Food is enough! Leftovers: ${foodEnough} grams.`);
    }else{
        let foodNeeded = foodCounter - foodAmountKg
        console.log(`Food is not enough. You need ${foodNeeded} grams more. `);
    }


}

puppyCare(["3", "1000", "1000", "1000", "Adopted"])