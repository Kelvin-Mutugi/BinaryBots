let startBtn = document.getElementById ('activate')
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let mins = 0;
startBtn.addEventListener('click', () =>{
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalid = setInterval(updateTime, 75);
  }
}) 
function updateTime() {
  elapsedTime = Date.now() - startTime;
  secs = Math.floor((elapsedTime / 1000) % 60)
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)
  console.log(secs)
  if (mins >= 2) {
document.getElementById ('download').disabled = false
  }

}
function slidedown() {
let sess = document.getElementById ('activationsec')
sess.style.maxHeight='100%'

} 
