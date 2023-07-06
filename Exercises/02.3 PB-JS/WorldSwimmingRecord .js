function WorldSwimmingRecord(input){

let record = Number(input[0]);
let distance = Number(input[1]);
let timePer1Meter = Number(input[2]);
let swimDistanceTime = distance * timePer1Meter;
let delayTime = Math.floor(distance / 15 ) * 12.5
totalTime = swimDistanceTime + delayTime


if(totalTime <= record){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)

}else{
    console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
}


}

WorldSwimmingRecord(["55555.67",
"3017",
"5.03"])





