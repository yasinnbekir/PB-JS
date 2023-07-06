function hotelRoom(input){

    let month = input[0] ; 
    let downTimeCount = Number(input[1]) ; 
    let studioTotalDownTimeSum = 0;
    let apartmentTotalDownTimeSum = 0; 
    let studioFinalSum = 0 ;
    


    switch(month){
        case "May" :
        case "October" :
            studioTotalDownTimeSum = downTimeCount * 50
            apartmentTotalDownTimeSum = downTimeCount * 65
            if(downTimeCount > 7 && downTimeCount < 14  ){
                studioTotalDownTimeSum =studioTotalDownTimeSum - (studioTotalDownTimeSum * 0.05);
            }
            else if(downTimeCount > 14){
                apartmentTotalDownTimeSum = apartmentTotalDownTimeSum - (apartmentTotalDownTimeSum * 0.10);
                studioTotalDownTimeSum = studioTotalDownTimeSum- (studioTotalDownTimeSum * 0.30);
            }
            break;

        case "June" :
        case "September" :
            studioTotalDownTimeSum = downTimeCount * 75.20 ; 
            apartmentTotalDownTimeSum = downTimeCount * 68.70 ; 
            if(downTimeCount > 14){
                studioTotalDownTimeSum -= (studioTotalDownTimeSum *0.20) ;
                apartmentTotalDownTimeSum -= (apartmentTotalDownTimeSum * 0.10)

            }
            break;

        case "July" :
        case "August" :
            studioTotalDownTimeSum = downTimeCount * 76 ;
            apartmentTotalDownTimeSum = downTimeCount * 77 ; 
            if(downTimeCount > 14){
                apartmentTotalDownTimeSum -= (apartmentTotalDownTimeSum * 0.10) ; 
            }
            break;
    }

    console.log(`Apartment: ${apartmentTotalDownTimeSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotalDownTimeSum.toFixed(2)} lv.`);



}
hotelRoom(["August",
"20"])


