function catFood(input){

    let catCount = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let foodAmount = 0

    for(let i = 1; i <= catCount; i++){

        let grFood = Number(input[i])

        if(grFood >= 100 && grFood < 200){
            group1++;

        }
        else if(grFood >= 200 && grFood < 300){
            group2++;

        }
        else if(grFood >= 300 && grFood < 400){
            group3++;

        }
        foodAmount += grFood

    }
    let foodAmountKg = foodAmount / 1000
    let foodPrice = foodAmountKg * 12.45
    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${foodPrice.toFixed(2)} lv.`);


}

catFood(["6", "102", "236", "123", "399", "342", "222"])