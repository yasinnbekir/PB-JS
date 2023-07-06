function coffeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let count = Number(input[2]);
    let price = 0;

    switch (drink) {

        case "Espresso":
            switch (sugar) {
                case "Without":
                    price = count * 0.90;
                    price *= 0.65;
                    break;
                case "Normal":
                    price = count * 1;
                    break;
                case "Extra":
                    price = count * 1.2;
                    break;
                    
            }
            if(count >= 5){
                price *= 0.75
            }
            
            break;

        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    price = count * 1;
                    break;
                case "Normal":
                    price = count * 1.20;
                    break;
                case "Extra":
                    price = count * 1.60;
                    break;
            }
            break;

        case "Tea":
            switch (sugar) {
                case "Without":
                    price = count * 0.50;
                    break;
                case "Normal":
                    price = count * 0.60;
                    break;
                case "Extra":
                    price = count * 0.70;
                    break;

            }
            
            break;
            
    }
    if(price > 15){
        price *= 0.80;

    }
    console.log(`You bought ${count} cups of ${drink} for ${price.toFixed(2)} lv.`)



}


coffeMachine(["Tea",
"Extra",
"3"])

