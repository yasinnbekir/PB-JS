function suppliesForSchool (input){

        let penPacket = Number (input[0]);
        let markerPacket = Number(input[1]);
        let detergentLiter = Number (input[2]);
        let discount = Number(input[3]) / 100 ; 

        let penPacketPrice = penPacket * 5.80;
        let markerPacketPrice = markerPacket * 7.20;
        let detergentLiterPrice = detergentLiter * 1.20;
        let finalSum = (penPacketPrice + markerPacketPrice + detergentLiterPrice);
        let finalSumWithDiscount = finalSum - (finalSum * discount);
        console.log(finalSumWithDiscount);

}



suppliesForSchool(["2", "3", "4", "25"])