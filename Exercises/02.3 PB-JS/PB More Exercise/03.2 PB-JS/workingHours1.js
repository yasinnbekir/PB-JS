function workingHours(input){

let hour = Number(input[0]);
let day = input[1]

if(hour >= 10 && hour <= 18 && day === "Monday" && "Tuesday" && "Wednesday" && "Thursday" && "Friday" &&"Saturday"){
    
    

console.log("open")
}else{
    console.log("closed")
}




}
workingHours(["19",
"Friday"])
