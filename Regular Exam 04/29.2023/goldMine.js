function goldMine(input){
    let index = 0;
    let locationsCount = Number(input[index]);
    index++;
    
    
    for(let currLocation = 1; currLocation <= locationsCount; currLocation++){
        let averageAwait = Number(input[index])
        index++;
        let dayCount = Number(input[index])
        index++;
        let averageProducePerLocation = 0;
        let totalProduce = 0
        for(let day = 1; day <= dayCount; day++){
            let produce = Number(input[index]);
            index++;

            totalProduce += produce


            
        }

        averageProducePerLocation = totalProduce / dayCount
        if(averageProducePerLocation >= averageAwait){
            console.log(`Good job! Average gold per day: ${averageProducePerLocation.toFixed(2)}.`);

        }
        else if(averageProducePerLocation < averageAwait){
            let needGold = averageAwait - averageProducePerLocation
            console.log(`You need ${needGold.toFixed(2)} gold.`);

        }

       


    }
}

goldMine(["2", "10", "3", "10", "10","11", "20", "2", "20", "10"])