function pipesInPool(input){

    let V  = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let p1After = P1 * H;
    let p2After = P2 * H;

    let totalP1P2Volume = p1After + p2After
    let totalP1P2Percent = 100*(totalP1P2Volume / V);
    let p1AfterVolume = 100 * (p1After  / totalP1P2Volume );
    let p2AfterVolume = 100 * (p2After / totalP1P2Volume);
    if(totalP1P2Volume <= V){
        console.log(`The pool is ${totalP1P2Percent.toFixed(2)}% full. Pipe 1: ${p1AfterVolume.toFixed(2)}%. Pipe 2: ${p2AfterVolume.toFixed(2)}%.`)

    }else{
        console.log(`For ${H} hours the pool overflows with ${totalP1P2Volume - V} liters.`)
    }



}

pipesInPool(["100", "100", "100", "2.5"])