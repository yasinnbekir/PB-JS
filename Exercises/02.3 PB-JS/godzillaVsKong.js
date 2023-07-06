function godzillaVsKong(input){
    let budget = Number(input[0]);
    let actor = Number(input[1]);
    let  clothesPerActor = Number(input[2]);
    if(actor > 150){
        clothesPerActor = clothesPerActor - (clothesPerActor * 0.10);
    }
    let decorSum = budget * 0.10;
    let clothesSum = actor * clothesPerActor
    let finalfilmSum = decorSum + clothesSum
    if(finalfilmSum <= budget){
        console.log(`
Action! 
Wingard starts filming with ${(budget - finalfilmSum).toFixed(2)} leva left.`
        )
    }else if(finalfilmSum > budget){
        console.log(`
Not enough money!"
Wingard needs ${(finalfilmSum - budget).toFixed(2)} leva more.`
        )    

    }

}

godzillaVsKong(["9587.88",
"222",
"55.68"])


