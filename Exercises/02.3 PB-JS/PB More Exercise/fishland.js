function fishland(input){

    let mackerelPricePerKg = Number(input[0]);
    let spratPricePerKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musslesKg = Number(input[4]);

    let palamudPricePerKg = mackerelPricePerKg + (mackerelPricePerKg * 0.60);
    let safridPricePerKg = spratPricePerKg + (spratPricePerKg * 0.80)
    let musslesPricePerKg = 7.50;
    let finalSum = (palamudKg * palamudPricePerKg) + (safridKg * safridPricePerKg) + (musslesKg * musslesPricePerKg)
    console.log(finalSum.toFixed(2))





}
fishland(["6.90", "4.20", "1.5", "2.5", "1"])