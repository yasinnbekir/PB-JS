function backToThePast(input){
let moneyHeritage = Number(input[0]); 
let ivanAge = Number(input[1])
let yearsToLive = Number(input[2]);
let sumLeft = 0;
let moneySpend = 0 ; 
let finalSum= 0;



for(let pastYear = 1800; pastYear <= yearsToLive;pastYear++){
    
if(pastYear % 2 === 0){
   moneySpend = 12000
   moneyHeritage -= moneySpend
    
    
    
}else{
moneySpend = 1200+ivanAge*50 
moneyHeritage -= moneySpend
    
}
ivanAge++
}



}
backToThePast(["50000","18", "1802"])