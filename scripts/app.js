alert("tap the cat to earn points")

const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result = 0
let currentTime = 60
let hitPosition = null
let timerId = null
let countDownTimerId = null

// to choose a random square
function randomSquare() {
    // removing mole class and event listener each time new square is chosen
    squares.forEach(square => {
        square.classList.remove("mole")
        square.removeEventListener("mousedown", scorer)
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole")

    // assigning the id of randomSquare to hitPosition
    hitPosition = randomSquare.id

    randomSquare.addEventListener("mousedown", scorer)
}

function scorer(square) {
    if (square.id = hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
    }
}

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        hitPosition = null
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Your time is up! Final score is : " + result)
    }
}

moveMole()
countDownTimerId = setInterval(countDown, 1000)
