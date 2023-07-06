function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let aveGrade = 0;
    let badGradeCounter = 0;
    let hasExcluded = false;
    let i = 1;

    while (i <= 12) {
        let grade = Number(input[index])
        index++
        if (grade < 4) {
            badGradeCounter++;
            if (badGradeCounter > 1) {
                hasExcluded = true
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }



        aveGrade += grade

        i++;
    }
    if(!hasExcluded){
    console.log(`${name} graduated. Average grade: ${(aveGrade / 12 ).toFixed(2)}`)
    }


}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

