const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const time = new Date();

    const hours = time.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    const minutes = time.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;


    const seconds = time.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    console.log(`${hours} , ${minutes}, ${seconds} Laikas eina`);
}

setInterval(setDate, 1000);


