function basketballTournament(input) {

    let index = 0;
    let command = input[index]
    index++;
    let gamesWin = 0;
    let gamesLost = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        let gameCount = Number(input[index]);
        index++;

        for (let i = 0; i < gameCount; i++) {
            let teamA = Number(input[index]);
            index++;
            let teamB = Number(input[index]);
            index++;

            if (teamA > teamB) {

                console.log(`Game ${i + 1} of tournament ${tournamentName}: win with ${Math.abs(teamA - teamB)} points.`)
                gamesWin++;

            }

            else if (teamA < teamB) {

                console.log(`Game ${i + 1 } of tournament ${tournamentName}: lost with ${Math.abs(teamB - teamA)} points.`)
                gamesLost++;

            }

        }
        command = input[index]
        index++;
    }
    let totalTournamentGames = gamesWin + gamesLost
    let gamesWinPer = (gamesWin / totalTournamentGames) * 100;
    let gamesLostPer = (gamesLost / totalTournamentGames) * 100;

    console.log(`${gamesWinPer.toFixed(2)}% matches win`);
    console.log(`${gamesLostPer.toFixed(2)}% matches lost`);
}

basketballTournament([
    "Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"
])
