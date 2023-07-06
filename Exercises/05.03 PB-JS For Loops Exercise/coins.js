function coins(input){
    let moneyInLv = Math.trunc(Number(input[0]) * 100) ;
    let moneyCounter = 0;
    while(moneyInLv > 0 ){
        if(moneyInLv >= 200){
            moneyInLv -= 200;

        }
        else if(moneyInLv >= 100){
            moneyInLv -= 100;

        }
        else if(moneyInLv >= 50){
            moneyInLv -= 50;

        }
        else if(moneyInLv >= 20){
            moneyInLv -= 20;
            
        }
        else if(moneyInLv >= 10){
            moneyInLv -= 10;

        }
        else if(moneyInLv >= 5){
            moneyInLv -= 5;
            
        }
        else if(moneyInLv >= 2 ){
            moneyInLv -= 2;

        }
        else if(moneyInLv >= 1){
            moneyInLv -= 1;
        }
        moneyCounter++;


    }
    console.log(moneyCounter)

}

coins(["0.56"])