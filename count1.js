


const dayEl = document.getElementById("days");
const hrsEl = document.getElementById("hrs");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

const newYear = "1 Jan 2023";


function countDown() {
  const currentDate = new Date();
      const newYearsDate = new Date(newYear);
      const totalSeconds = (newYearsDate - currentDate)/1000;

      const seconds = Math.floor(totalSeconds) % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours =   Math.floor(totalSeconds / 3600) % 24;
      const days =    Math.floor(totalSeconds  / 3600 / 24);

      secEl.innerHTML = formatTime(seconds);
      hrsEl.innerHTML = formatTime(hours);
      minEl.innerHTML = formatTime(minutes);
      dayEl.innerHTML = days;

}
 function formatTime(time){
   if (time < 10){
     return time = "0" + time;
   } else {
     return time;
   }
 }
 countDown();
setInterval(countDown, 1000);
