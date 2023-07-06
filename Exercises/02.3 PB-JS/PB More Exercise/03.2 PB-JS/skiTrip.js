function skiTrip(input){

let downtimeDays = (Number(input[0])) - 1 ;
let roomType = input[1] ; 
let feedback = input[2] ; 
let finalSum = 0 ; 

if(roomType === "room for one person"){
    if(downtimeDays < 10 ){
        finalSum = downtimeDays * 18 ; 

    }
    else if(downtimeDays >= 10 && downtimeDays <= 15){
        finalSum = downtimeDays * 18 ; 

    }else{
        finalSum = downtimeDays * 18 ;
    }
}
else if(roomType === "apartment"){
    finalSum = downtimeDays * 25;
    if(downtimeDays < 10){
        finalSum -=(finalSum * 0.30);
    }
    else if(downtimeDays >= 10 && downtimeDays <= 15){
        finalSum -=(finalSum * 0.35);
    }else{
        finalSum -=(finalSum * 0.50);
    }
}
else if(roomType === "president apartment"){
    finalSum = downtimeDays * 35; 
    if(downtimeDays < 10){
        finalSum -=(finalSum * 0.10);
    }
    else if(downtimeDays >= 10 && downtimeDays <= 15){
        finalSum -=(finalSum * 0.15);
    }else{
        finalSum -=(finalSum * 0.20);
    }
}
if(feedback === "positive"){
    finalSum +=(finalSum * 0.25);

}
else if(feedback === "negative"){
    finalSum -= (finalSum * 0.10);

}
console.log(finalSum.toFixed(2));



}
skiTrip(["14","apartment","positive"])
