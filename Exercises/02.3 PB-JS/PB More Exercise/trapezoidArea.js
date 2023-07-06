function trapezoidArea(input){

    let side1 = Number(input[0]);
    let side2 = Number(input[1]);
    let h = Number(input[2]);

    let area = ((side1 + side2) * (h / 2)).toFixed(2)
    console.log(area)

}
trapezoidArea(["8", "13","7"])