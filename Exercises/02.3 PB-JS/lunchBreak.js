function lunchBreak(input){

    let serialName = (input[0]);
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2])

    let lunchTime = restDuration * 0.125;
    let restTime = restDuration * 0.25;

    let leftTime = restDuration - lunchTime - restTime;
     if(leftTime >= episodeDuration){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime - episodeDuration)} minutes free time.`)
     }else{
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeDuration - leftTime)} more minutes.`)
     }
}

lunchBreak(["Teen Wolf",
"48",
"60"])

