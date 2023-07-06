function vacationBookList(input) {

let bookPageNumber = Number(input[0])
let pagePerHour = Number(input[1])
let daysForReading = Number(input[2])


let hourPagePerDay = (bookPageNumber / pagePerHour / daysForReading)
console.log(hourPagePerDay)

}

vacationBookList(["212", "20", "2"])
