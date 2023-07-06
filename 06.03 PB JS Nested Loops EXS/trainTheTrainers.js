function trainTheTrainers(input){

        let index = 0;
        let n = Number(input[index]);
        index++;

        let command = input[index];
        index++;
       
        let FinalTotalSum = 0;
        let presentationCounter = 0;
        
        while(command !== "Finish"){
            let presentationName = command;
            presentationCounter++;
            let averagePreSum = 0;
            let totalSum = 0;
            let examCounter = 0;

            for(let i = 0; i < n;i++){
                let examRating = Number(input[index])
                index++;
                examCounter++;
                totalSum += examRating 
            }

            
            FinalTotalSum += totalSum
            averagePreSum = totalSum / examCounter
            console.log(`${presentationName} - ${averagePreSum.toFixed(2)}.`);

            
                

            command = input[index];
            index++;
        }
        let finalAverageSum = FinalTotalSum / (presentationCounter * n)
        console.log(`Student's final assessment is ${finalAverageSum.toFixed(2)}.`);

}


trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


