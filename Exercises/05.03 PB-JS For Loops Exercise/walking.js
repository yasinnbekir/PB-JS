function walking(input) {

    let index = 0 ; 
    let command = input[index]
    index++;
    let goal = 10000 ; 
    let stepCounter = 0 ; 
    while(command !== "Going home"){
        let steps = Number(command)
         stepCounter += steps
        
        if(stepCounter > goal){
            break;

        }

        command = input[index]
        index++;
        
    }
    
    if(command === "Going home"){
        command = input[index]
        index++;
        let stepToHome = Number(command)
        stepCounter += stepToHome
        
    }
    if(stepCounter >= 10000){
        console.log("Goal reached! Good job!")
        console.log(`${stepCounter - 10000} steps over the goal!`);

    }else{
        console.log(`${10000 - stepCounter} more steps to reach goal.`);
    }




}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

