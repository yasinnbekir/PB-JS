function timePlus15Minutes(input){

    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesFromhour = hour * 60; 
    let totalTime = minutes + minutesFromhour + 15 ;

    let totalHours = Math.floor(totalTime / 60);
    let totalMinutes = totalTime % 60;
    if(totalHours == 24){
        totalHours = 0;
    }


    if(totalMinutes <  10 ){
        console.log(`${totalHours}:0${totalMinutes}`);
    
    }else{
        console.log(`${totalHours}:${totalMinutes}`)
    }


}

timePlus15Minutes(["23", "59"])