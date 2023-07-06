function passwordGuess(input){
let password1 = "s3cr3t!P@ssw0rd"
let password = (input[0])
    if (password == password1){
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }



}

passwordGuess(["qwerty"])