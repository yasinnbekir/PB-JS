function spaceship(input){

    let shipWidth = Number(input[0]);
    let shipLength = Number(input[1]);
    let shipHeight = Number(input[2]);
    let astronautAverHeight = Number(input[3]);

    let shipVolume = shipWidth * shipLength * shipHeight;
    let roomVolume = (astronautAverHeight + 0.40)*2*2;
    let spaceForPerson = Math.floor(shipVolume / roomVolume);
    if(spaceForPerson >= 3 && spaceForPerson <= 10){
        console.log(`The spacecraft holds ${spaceForPerson} astronauts.`);
    }
    else if(spaceForPerson < 3 ){
        console.log("The spacecraft is too small.");
        
    }
    else if(spaceForPerson > 10 ){
        console.log("The spacecraft is too big.");
    }



}
spaceship(["3.5", "4", "5", "1.70"])