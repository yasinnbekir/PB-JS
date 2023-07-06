function projectCreation(input){

    let name = input[0];
    let projectCount = Number(input[1]);
    let hoursNeed = projectCount * 3
    console.log(`The architect ${name} will need ${hoursNeed} hours to complete ${projectCount} project/s.`)


}

projectCreation(["George", "4"])