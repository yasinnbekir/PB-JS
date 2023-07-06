function FishTank(input){

    let lenght = Number (input[0]);
    let width = Number (input[1]);
    let height = Number (input[2]);
    let percentFilled = Number (input[3]) / 100;

    let akvaVolume = (lenght * width * height) * 0.001;
    
    let finalLiters = akvaVolume * (1 - percentFilled); 
    console.log(finalLiters)


}

FishTank(["85", "75", "47", "17"])
