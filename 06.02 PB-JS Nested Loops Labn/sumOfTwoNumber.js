function sumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCounter = 0
    isFound = false
    firstNumber = 0;
    secondNumber = 0 ; 

    for (let x = startNum; x <= endNum; x++) {
        for (let y = startNum; y <= endNum; y++) {
            let sum = x + y;
            combinationCounter++;
            if (sum === magicNum) {
                firstNumber = x;
                secondNumber = y;
                isFound = true

                break;

            }
            
        }
        if (isFound) {
            break;
        }


    }

    if (isFound) {
        console.log(`Combination N:${combinationCounter} (${firstNumber} + ${secondNumber} = ${magicNum})`);
    } else {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);


    }


}
sumOfTwoNumbers(["88",
"888",
"1000"])


