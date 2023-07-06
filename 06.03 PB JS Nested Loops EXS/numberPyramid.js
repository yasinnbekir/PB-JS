function numberPyramid(input) {

    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrLine = "" ;

    for(let row = 1; row <= n; row++){
        for(let cols = 1; cols <= row; cols++){
            if(current > n ){
                isBigger = true;
                break;
            }
            printCurrLine += current + " ";
            current++;

        }
        console.log(printCurrLine);
        printCurrLine = "" ; 
        if(isBigger){
            break;

        }

    }









}

numberPyramid(["7"])