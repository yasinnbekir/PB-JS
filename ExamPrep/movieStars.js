function movieStars(input){

    let index = 0;
    let budget = Number(input[index]);
    index++;

    let command = input[index]
    index++;

    while(command !== "ACTION"){
        let actorName = command
        let salary = 0;
         
        if(actorName.length <= 15 ){
            salary = Number(input[index])
            index++;
        
        }else{
            salary = budget * 0.20;
        }

        budget -= salary;
        if(budget < 0 ){
            break;

        }
        



        command = input[index]
        index++;
    }

    if(budget < 0){
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    }else{
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }


}

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])

