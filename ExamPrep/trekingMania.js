function trekingMania(input) {
    let groupCount = Number(input[0])

    let group1 = 0 ;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for(let i = 1; i <= groupCount;i++){
        let currGroup = Number(input[i]);

        if(currGroup <= 5){
            group1 += currGroup;   
        }
        else if(currGroup <= 12){
            group2 += currGroup;
        }
        else if(currGroup <= 25){
            group3 += currGroup
        }
        else if(currGroup <= 40){
            group4 += currGroup

        }
        else if(currGroup >= 41){
            group5 += currGroup

        }
        


    }
    let totalPeopleCount = group1+group2+group3+group4+group5;
    let group1Per = (group1 / totalPeopleCount) * 100;
    let group2Per = (group2 / totalPeopleCount) * 100;
    let group3Per = (group3 / totalPeopleCount) * 100;
    let group4Per = (group4 / totalPeopleCount) * 100;
    let group5Per = (group5 / totalPeopleCount) * 100;

    console.log(`${group1Per.toFixed(2)}%`)
    console.log(`${group2Per.toFixed(2)}%`)
    console.log(`${group3Per.toFixed(2)}%`)
    console.log(`${group4Per.toFixed(2)}%`)
    console.log(`${group5Per.toFixed(2)}%`)
}


trekingMania([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])
