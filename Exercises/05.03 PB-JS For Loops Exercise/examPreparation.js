function examPreparation(input) {

    let index = 0;
    let negativeGradeCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let negativeGradeCounter = 0;
    let gradeCounter = 0;
    let sumGrade = 0;

    let isNeedBreak = false;

    let taskName = "";



    while (command !== "Enough") {
        taskName = command;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            negativeGradeCounter++;
            if (negativeGradeCount <= negativeGradeCounter) {
                isNeedBreak = true;
                break;

            }

        }


        gradeCounter++;
        sumGrade += grade;
        command = input[index];
        index++;
    }
    if(isNeedBreak){
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`)

    }else{
        let avgScore = sumGrade / gradeCounter;
        console.log(`Average score: ${avgScore.toFixed(2)}`); 
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${taskName}`);

    }
}


examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
