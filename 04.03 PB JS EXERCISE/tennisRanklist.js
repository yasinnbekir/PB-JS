function tennisRanklist(input){

let tournamentCount = Number(input[0]);
let startingPoints = Number(input[1]);
let pointsWon = 0;
let tournamentsWon = 0;


for(let i = 2; i < input.length;i++){
    let tournamentResult = input[i]
    if(tournamentResult === "W"){
        pointsWon += 2000;
        tournamentsWon++;
    }
    else if(tournamentResult === "F"){
        pointsWon += 1200;
    }else{
        pointsWon +=720;
    }

    }

let totalPoints = pointsWon + startingPoints
console.log(`Final points: ${totalPoints}`);
let averagePoint = Math.floor(pointsWon/tournamentCount)
console.log(`Average points: ${averagePoint}`);
let totalWinPercent = (tournamentsWon/tournamentCount) * 100;
console.log(`${totalWinPercent.toFixed(2)}%`)




}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
