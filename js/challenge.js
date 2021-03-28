document.addEventListener("DOMContentLoaded", () => {
    let counterDisplay = document.getElementById('counter', timeCounter)
    let counterIncrement = document.getElementById('plus')
    let counterDecrement = document.getElementById('minus')

})


function timeCounter() {
    counterDisplay.innerText = parseInt(counterDisplay.innerText) + 1;
    let intervalID = counterDisplay.setInterval(timeCounter, 1000);
    counterDisplay.setInterval(intervalID)
}
