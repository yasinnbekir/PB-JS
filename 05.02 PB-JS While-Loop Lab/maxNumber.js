function maxNumber(input) {
    let index = 0;
    let command = input[index] ; 
    index++ ; 
    let maxNum = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
        let currNumber = Number(command)

        if(currNumber > maxNum){
            maxNum = currNumber

        }
        command = input[index] ; 
        index++;
    }

    console.log(maxNum);
}

maxNumber([
    "100",
    "99",
    "80",
    "70",
    "Stop"])
