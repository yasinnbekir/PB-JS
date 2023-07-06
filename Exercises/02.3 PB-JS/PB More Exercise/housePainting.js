function housePainting(input){

let x = Number(input[0]);
let y = Number(input[1]);
let h = Number(input[2]);
let windowSide = 1.5;
let doorW = 1.2;
let doorH = 2;
let greenPaintPerLt = 3.4 
let redPaintPerLt = 4.3

let roofSideWallW = x;
let roofSideWallH = y;
let roofSideWallArea = (x * y)*2; 
let roofFrontWallW = x;
let roofFrontWallH = h;
let roofFrontWallArea = 2*((x*h)/2);
let windowArea = windowSide * windowSide;
let doorArea = doorH * doorW;
let lateralWallArea = (2*(x * y)) - (2 *windowArea);
let frontSideArea = (2*(x * x)) - doorArea;

let totalFrontSideArea = lateralWallArea + frontSideArea;
let totalRoofArea = roofSideWallArea + roofFrontWallArea;

let greenPaintLiter = totalFrontSideArea / greenPaintPerLt;
let redPaintLiter = totalRoofArea / redPaintPerLt;

console.log(greenPaintLiter.toFixed(2));
console.log(redPaintLiter.toFixed(2));




}

housePainting(["6", "10", "5.2"])