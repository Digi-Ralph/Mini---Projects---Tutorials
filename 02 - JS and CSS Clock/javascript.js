const hourHand = document.querySelector('.hour-hand')
const mindHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setdate() {
    console.log('hi')
    
    const now = new Date() // creat a new date instance 

    const seconds = now.getSeconds(); // get the seconds

    const minutes = now.getMinutes() // get the minutes

    const hours = now.getHours() // get the hours

    let sdegree = seconds * 6; // the seconds and minutes have 
    // 60 increments per rotation so we just divide 360 by 60 which gives us 6
    secondHand.style.transform = `rotate(${sdegree}deg)`


    let mdegree = minutes * 6 
    mindHand.style.transform = `rotate(${mdegree}deg)`


    
    let hdegree = hours * 30 + (minutes / 2) ; // here are 12 increments per rotation the angle 
    // for each hour is 30 degrees. That’s 360/12=30
    // clocks hour doesn't move in hour increments ,  It moves in smaller amounts 
    // based on the minute value
    hourHand.style.transform = `rotate(${hdegree}deg)`





    console.log(hours + ':' + minutes + ':' + seconds) // TEST
}

setInterval(setdate, 1000) // repeat function each second.
