function cinema(input){

let projection = input[0] ; 
let rows = Number(input[1]) ; 
let colums = Number(input[2]) ; 

let profit = 0 ; 

if(projection === "Premiere"){
    profit = (rows * colums) * 12 ; 
}
else if(projection === "Normal"){
    profit = (rows * colums) * 7.50 ;
}
else if(projection === "Discount"){
    profit = (rows * colums) * 5 ;
}
console.log(`${profit.toFixed(2)} leva`) ;





}
cinema(["Discount",
"12",
"30"])
