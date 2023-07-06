function histogram(input){
let n = Number(input[0]);


let range1Count = 0;
let range2Count = 0;
let range3Count = 0;
let range4Count = 0;
let range5Count = 0;

for(let i = 1; i <= n;i++){
    let currNum = Number(input[i]);
    
    if(currNum < 200){
        range1Count++ ; 
    }
    else if(currNum <= 399){
            range2Count++ ;
    }
    else if(currNum <= 599){
        range3Count++ ;
    }
    else if(currNum <= 799){
        range4Count++ ; 
    }else{
        range5Count++ ; 
    }
}
let range1Per = (range1Count / n) * 100;
let range2Per = (range2Count / n) * 100;
let range3Per = (range3Count / n) * 100;
let range4Per = (range4Count / n) * 100;
let range5Per = (range5Count / n) * 100;

console.log(`${range1Per.toFixed(2)}%`);
console.log(`${range2Per.toFixed(2)}%`);
console.log(`${range3Per.toFixed(2)}%`);
console.log(`${range4Per.toFixed(2)}%`);
console.log(`${range5Per.toFixed(2)}%`);

}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

