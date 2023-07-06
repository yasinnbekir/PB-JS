function trainingLab(input){
 
    let h= Number(input[0]) * 100;
    let w = Number((input[1]) * 100)-100;
    let tableW = 70;
    let tableH = 120;
    let wTableCountPerRow = Math.floor(w / tableW);
    let hTableCountPerRow = Math.floor(h / tableH)
    let totalCount = (wTableCountPerRow * hTableCountPerRow) - 3 
    console.log(totalCount);




}
trainingLab(["8.4", "5.2"])