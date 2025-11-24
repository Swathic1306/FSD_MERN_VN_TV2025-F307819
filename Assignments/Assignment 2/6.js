const totalSeats=120
let bookedSeats=78
const checkavailability=((totalSeats,bookedSeats)=>
{
    let availableseats=totalSeats-bookedSeats
    if(availableseats<20){
        console.log(`Almost Full Only ${availableseats} Available.`)
    }
    else if(availableseats>20 && availableseats<=60){
        console.log(`Moderate Availabilty With ${availableseats} Seats.`)
    }
    else{
        console.log('Plenty of Seats Available.')
    }
})
checkavailability(totalSeats,bookedSeats)