function bonusScore(input){
    let stake = Number(input[0]);
    let bonus = 0;
    
    if(stake <= 100){
        bonus = 5;
    }else if(stake > 1000){
        bonus = stake * 0.2;
    }else if(stake > 100){
        bonus = stake * 0.1;
    }
        if(stake % 2 == 0){
        bonus = bonus + 1;
        }else if(stake % 10 == 5){
        bonus = bonus + 2;
         
        }
        console.log(bonus);
        console.log(bonus + stake); 





}

bonusScore(["20"])