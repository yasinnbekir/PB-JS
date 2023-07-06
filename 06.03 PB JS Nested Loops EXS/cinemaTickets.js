function cinemaTickets(input){

    let index = 0;

    let command = input[index]
    index++;

    let studenTickets = 0;
    let kidTickets = 0; 
    let standardTickets = 0 ; 

    

    while(command !== "Finish"){
        let movieName = command
        let placesAvailable = Number(input[index])
        index++;

        let command1 = input[index]
        index++;
        let placesTaken = 0;
        
        while(command1 !== "End"){
            let ticketType = command1

            if(ticketType === "student"){
                studenTickets++;
            }
            else if(ticketType === "standard"){
                standardTickets++;

            }
            else if(ticketType === "kid"){
                kidTickets++;

            }
            
            placesTaken++;

            if(placesTaken === placesAvailable){
                break;

            }

            command1 = input[index]
            index++;
        }

        let placesTakenPercent = (placesTaken / placesAvailable) * 100

        console.log(`${movieName} - ${placesTakenPercent.toFixed(2)}% full.`)

        command = input[index]
        index++;
    }

    let totalTickets = studenTickets + kidTickets + standardTickets
    console.log(`Total tickets: ${totalTickets}`)

    let studentTicketsPer = (studenTickets / totalTickets) * 100 ; 
    console.log(`${studentTicketsPer.toFixed(2)}% student tickets.`);

    let standardTicketsPer = (standardTickets / totalTickets) * 100 ; 
    console.log(`${standardTicketsPer.toFixed(2)}% standard tickets.`);

    let kidTicketsPer = (kidTickets / totalTickets) * 100 ; 
    console.log(`${kidTicketsPer.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

 