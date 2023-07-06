function specialNumbers(input){

    let n = Number(input[0]) 
    let specialNum = "";
    let startNum = 1111;
    let endNum = 9999;
    let buff = ""
    

    for(let currNum = startNum; currNum <= endNum; currNum++){

        let currNumAsString = String(currNum)
        let isSpecial = true;

        for(let i = 0; i < currNumAsString.length; i++){
            let currDigit = Number(currNumAsString[i]);
            
            if(n %  currDigit !== 0 ){
                isSpecial = false;
                break;
            }           
        }
        if(isSpecial){
            buff += `${currNumAsString} `
            
        }
    }
    
   console.log(buff);
}

specialNumbers(["3"])