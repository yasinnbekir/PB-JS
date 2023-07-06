function trekkingMania(input){

let groupCount = Number(input[0]);

let group1 = 0;
let group2 = 0;
let group3= 0;
let group4 = 0;
let group5 = 0;

for(let i = 1; i <= groupCount;i++){
   let currGroup = Number(input[i]) 
   if(currGroup <= 5 ){
    group1 += currGroup;
   }
   else if( currGroup <= 12){
    group2 += currGroup;

   }
   else if(currGroup <= 25){
    group3 += currGroup;
   }
   else if(currGroup <= 40 ){
    group4 += currGroup;

   }
   else if(currGroup >= 41){
    group5 += currGroup
   }


}
let totalPeopleSum=(group1+group2+group3+group4+group5)

console.log(`${(group1/totalPeopleSum*100).toFixed(2)}%`)
console.log(`${(group2/totalPeopleSum*100).toFixed(2)}%`)
console.log(`${(group3/totalPeopleSum*100).toFixed(2)}%`)
console.log(`${(group4/totalPeopleSum*100).toFixed(2)}%`)
console.log(`${(group5/totalPeopleSum*100).toFixed(2)}%`)



}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

