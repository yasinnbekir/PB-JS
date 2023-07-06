function areaOfFigures(input){
    let shape = (input[0]);
    let dimension = 0;
    if(shape =="square"){
        let side = Number(input[1]);
        let dimension = side * side
        console.log(dimension.toFixed(3))
    }else if(shape == "rectangle"){
        let side = Number(input[1]);
        let side1 = Number(input[2]);
        let dimension = side * side1
        console.log(dimension.toFixed(3));
    }else if (shape =="triangle"){
        let side = Number(input[1]);
        let side1 = Number(input[2]);
        let dimension = (side*side1)/2
        console.log(dimension.toFixed(3))

    }



}
areaOfFigures(["triangle", "4.5", "20"])
 