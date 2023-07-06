function sumPrimeNonPrime(input) {

    let PrimeNumSum = 0;
    let NonPrimeNumSum = 0;

    let index = 0;
    let command = input[index]
    index++;

    while(command !== "stop"){
        let currNum = Number(command)

        if(currNum < 0){
            console.log("Number is negative.");
            command = input[index]
            index++;
            continue;
        }

        let isPrime = true;

        for(let divisor = 2; divisor < currNum; divisor++){
            if(currNum % divisor === 0){
                isPrime = false;

            }
        }

        if(isPrime === true){
            PrimeNumSum += currNum

        }else{
            NonPrimeNumSum += currNum
        }

        command = input[index]
        index++;
        
    }

    console.log(`Sum of all prime numbers is: ${PrimeNumSum}`);

    console.log(`Sum of all non prime numbers is: ${NonPrimeNumSum}`)
}

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

