function catLife(input){

    let breed = input[0]
    let gender = input[1]
    let catMonth = 0;
    isValid = true;

    switch(breed){
        case "British Shorthair" :
            switch(gender){
                case "m" :
                    catMonth = (13*12)/6
                    break;
                case "f" :
                    catMonth = (14*12)/6
                    break;
            }
            break;
        case "Siamese" :
            switch(gender){
                case "m" :
                    catMonth = (15*12)/6
                    break;
                case "f" :
                    catMonth = (16*12)/6
                    break;
            }
            break;
        case "Persian" :
            switch(gender){
                case "m" :
                    catMonth = (14*12)/6
                    break;
                case "f" :
                    catMonth = (15*12)/6
                    break;

            }
            break;
        case "Ragdoll" :
            switch(gender){
                case "m" :
                    catMonth = (16*12)/6
                    break;
                case "f" :
                    catMonth = (17*12)/6
                    break;

            }
            break;
        case "American Shorthair" :
            switch(gender){
                case "m" :
                    catMonth = (12*12)/6
                    break;
                case "f" :
                    catMonth = (13*12)/6
                    break;

            }
            break;
        case "Siberian" :
            switch(gender){
                case "m" :
                    catMonth = (11*12)/6
                    break;
                case "f" :
                    catMonth = (12*12)/6
                    break;

            }
            break;
        default :
          console.log(`${breed} is invalid cat!`)
          isValid = false;
          break;

          
          
          
        
    }
   if(isValid){
    console.log(`${catMonth} cat months`);
   }


}
catLife(["Tom", "m"])