function sleepyTomCat(input){

let daysOff = Number(input[0]);
let daysWork = 365 - daysOff;
let yearPlayMinutes = Number(30000)

let daysOffMinPerDay = daysOff * 127;
let daysWorkMinPerDay = daysWork * 63;
let totalPlayTime = daysOffMinPerDay + daysWorkMinPerDay;
let morePlay = totalPlayTime - yearPlayMinutes;
    let morePlayH = Math.floor(morePlay / 60);
    let morePlayM = (morePlay % 60);
    let lessPlay = yearPlayMinutes - totalPlayTime
    let lessPlayH = Math.floor(lessPlay / 60);
    let lessPlayM = (lessPlay % 60);

if(totalPlayTime > yearPlayMinutes){
console.log("Tom will run away");
console.log(`${morePlayH} hours and ${morePlayM} minutes more for play`);
}else{

    console.log("Tom sleeps well");
    console.log(`${lessPlayH} hours and ${lessPlayM} minutes less for play`);
}

}

sleepyTomCat(["20"])