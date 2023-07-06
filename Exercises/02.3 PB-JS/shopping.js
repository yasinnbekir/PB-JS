function shopping(input){
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardSum = videoCardCount * 250;
    let cpuSum = (videoCardSum * 0.35) * cpuCount;
    let ramSum = (videoCardSum * 0.10) * ramCount;
    let totalSum = videoCardSum + cpuSum + ramSum;
    
    if(videoCardCount > cpuCount){
        totalSum = totalSum - (totalSum *0.15);
    }
    let moneyLeft = (budget - totalSum).toFixed(2);
    let moneyNeeded = (totalSum - budget).toFixed(2);
    if(budget >= totalSum){
        console.log(`You have ${moneyLeft} leva left`)
    }else{
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`)
    }

}
 
shopping(["920.45",
"3",
"1",
"1"])
