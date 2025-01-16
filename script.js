
function updateClock(){
    let now= new Date();
    let hours=now.getHours().toString().padStart(2,0);
    let minutes=now.getMinutes().toString().padStart(2,0);
    let seconds=now.getSeconds().toString().padStart(2,0);
    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock,1000);