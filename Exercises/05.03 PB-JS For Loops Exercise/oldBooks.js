function oldBooks(input) {
    let index = 0;
    let searchBook = input[index];
    index++;

    let searchBookCounter = 0;

    let command = input[index]
    index++;
    isBookFound = false;


    while (command !== "No More Books") {
        let currentBook = command;
         
        if (searchBook === currentBook) {
            isBookFound = true;
            break;

        }
        searchBookCounter++;
        command = input[index]
        index++;


    }
    if (!isBookFound) {
        console.log("The book you search is not here!");
        console.log(`You checked ${searchBookCounter} books.`);
    } else {
        console.log(`You checked ${searchBookCounter} books and found it.`);
    }

}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


