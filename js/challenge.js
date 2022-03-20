// FIRST grab all neccessary elements

// The `counter` variable points to the h1
// element with a starting value of 0
const counter = document.getElementById("counter")
const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")
const pauseBtn = document.getElementById("pause")
const likeBtn = document.getElementById("heart")
const commentForm = document.getElementById("comment-form")
const commentsContainer = document.getElementById("list")

// All our event listeners will go here
plusBtn.addEventListener("click", incrementCounter)
minusBtn.addEventListener("click", decrementCounter)
likeBtn.addEventListener("click", likeNum)
pauseBtn.addEventListener("click", pauseTimer)
commentForm.addEventListener("submit", addComment)

// By default paused is set to false until we wwant to pause
let paused = false
// IntervalId will be a global way of keeping
// track of the current state of counter
let intervalId
let numbersArray = []
let numbersOfLikes

// Create a the timer by grabbing the counter
// element and incrementing it's innerText value
// byu one each second
function runCounter() {
    intervalId = setInterval(() => counter.innerText++, 1000)
}
// Invoke the counter to get it to start
// upon opening the app
runCounter()

function incrementCounter() {
    counter.innerText++
}

function decrementCounter() {
    counter.innerText--
}

function likeNum() {
    const likesContainer = document.querySelector(".likes")
    const likesLi = document.createElement("li")
    num = counter.innerText
    likesLi.id = num
    if (numbersArray.includes(num)) {
        let matchingLi = document.getElementById(num)
        matchingLi.innerText = `${num} was liked ${numbersOfLikes += 1} times!`
    } else {
        likesLi.innerText = `${num} was liked ${numbersOfLikes = 1} times!`
        likesContainer.appendChild(likesLi)
        numbersArray.push(num)
    }
}

function pauseTimer() {
    clearInterval(intervalId)
    paused = !paused
    pauseBtn.innerText = 'resume'
    likeBtn.setAttribute("disabled", true)
    plusBtn.setAttribute("disabled", true)
    minusBtn.setAttribute("disabled", true)
    submitBtn.setAttribute("disabled", true)
    if (!paused) {
        pauseBtn.innerText = 'pause'
        likeBtn.removeAttribute("disabled")
        plusBtn.removeAttribute("disabled")
        minusBtn.removeAttribute("disabled")
        submitBtn.removeAttribute("disabled")
        runCounter()
    }
}

function addComment(e) {
    e.preventDefault()
    console.log(e.target[0].value) // Get's the input field
    let comment = e.target[0].value
    let commentLi = document.createElement("li")
    commentLi.innerText = comment
    commentsContainer.appendChild(commentLi)
    let input = document.getElementById("comment-input")
    input.value = ""
}