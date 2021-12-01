document.getElementById("countdown-display").innerHTML = renderCountdown()

function renderCountdown(){
    const christmas = 25
    let days = christmas - parseInt((new Date()).toString().split(" ")[2])
    return days
}

setInterval(myHours, 1000)
function myHours() {
    const d = new Date();
    document.getElementById("hours").innerHTML = 23 - d.getHours() + " hours"

}

setInterval(myMinutes, 1000)
function myMinutes() {
    const d = new Date();
    document.getElementById("minutes").innerHTML = 60 - d.getMinutes() + " minutes"

}

setInterval(mySeconds, 1000);
function mySeconds() {
  const d = new Date();
  document.getElementById("seconds").innerHTML = 60 - d.getSeconds() + " seconds"
}
