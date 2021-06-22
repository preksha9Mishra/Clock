const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function SetSeconds(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360 ) + 90 ;
  secondHand.style.transform =  `rotate(${secondsDegree}deg)`


  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360 ) + 90 ;
  minHand.style.transform =  `rotate(${minutesDegree}deg)`
 //console.log(minutes);

  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360 ) + 90 ;
  hourHand.style.transform =  `rotate(${hoursDegree}deg)`
}

setInterval(SetSeconds, 1000);
