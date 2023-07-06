function celsiustoFahrenheit(input){

    let celsius = Number(input[0]);

    let farenheit = ((1.8*celsius)+32).toFixed(2);
    console.log(farenheit)


}

celsiustoFahrenheit(["25"])