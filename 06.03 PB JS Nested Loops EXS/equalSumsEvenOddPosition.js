function equalSumsEvenOddPosition (input){

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let buff = "";

    for(let currNum = startNum; currNum <= endNum; currNum++){
        let evenPositionSum = 0;
        let oddPositionSum = 0;

        let currNumAsString = currNum.toString()

        for(let i = 0; i < currNumAsString.length; i++){
            let currDigit = Number(currNumAsString[i]);

            if(i % 2 === 0){
                evenPositionSum += currDigit

            }else{
                oddPositionSum += currDigit
            }
        }
        if(evenPositionSum == oddPositionSum){
            buff += currNumAsString + " ";

        }


    }
    console.log(buff)


}


equalSumsEvenOddPosition(["100000",
"100050"])
 