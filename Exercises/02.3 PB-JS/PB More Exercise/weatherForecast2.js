function weatherForecast2(input){

let celsius = Number(input[0]);

if(celsius >= 26 && celsius <= 35){
    console.log("Hot");
    
}
else if(celsius >= 20.1 && celsius <=25.9){
    console.log("Warm");
}
else if(celsius >= 15 && celsius <= 20){
    console.log("Mild");
}
else if(celsius >= 12 && celsius <=14.9){
    console.log("Cool");
}
else if(celsius >= 5 && celsius <= 11.9){
    console.log("Cold");
}else{
    console.log("unknown");
}








}
weatherForecast2([6])