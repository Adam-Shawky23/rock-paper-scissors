const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")
const paper = document.getElementById("paper")
const rock1 = document.getElementById("rock1")
const scissors1 = document.getElementById("scissors1")
const paper1 = document.getElementById("paper1")
const rock2 = document.getElementById("rock2")
const scissors2 = document.getElementById("scissors2")
const paper2 = document.getElementById("paper2")
const score = document.getElementById("score")
const win = document.getElementById("win")
const section = document.getElementById("section")
const main = document.getElementById("main")
const again = document.getElementById("again")

let choice = ''

let randomChoice = ['rock','scissors','paper']

rock.addEventListener("click", ()=>{
    const Computer = Math.floor(Math.random() * 3)
    choice = "rock"
    main.style.display ="none"
    section.style.display="flex"
    rock1.style.display = "block"
    if (randomChoice[Computer] == "rock"){
        win.innerHTML = "Tie"
        rock2.style.display = "block"
    }
    if (randomChoice[Computer] == "scissors"){
        win.innerHTML = "You Win"
        scissors2.style.display = "block"
        score.innerHTML ++
    }
    if (randomChoice[Computer] == "paper"){
        win.innerHTML = "You Lose"
        paper2.style.display = "block"
        score.innerHTML --
    }
})
scissors.addEventListener("click", ()=>{
    const Computer = Math.floor(Math.random() * 3)
    choice = "scissors"
    main.style.display ="none"
    section.style.display="flex"
    scissors1.style.display = "block"
    if (randomChoice[Computer] == "rock"){
        score.innerHTML --
        win.innerHTML = "You Lose"
        rock2.style.display = "block"
    }
    if (randomChoice[Computer] == "scissors"){
        scissors2.style.display = "block"
        win.innerHTML = "Tie"
    }
    if (randomChoice[Computer] == "paper"){
        win.innerHTML = "You Win"
        paper2.style.display = "block"
        score.innerHTML ++
    }
})
paper.addEventListener("click", ()=>{
    const Computer = Math.floor(Math.random() * 3)
    choice = "paper"
    main.style.display ="none"
    section.style.display="flex"
    paper1.style.display = "block"
    if (randomChoice[Computer] == "rock"){
        win.innerHTML = "You Win"
        rock2.style.display = "block"
        score.innerHTML ++
    }
    if (randomChoice[Computer] == "scissors"){
        score.innerHTML --
        win.innerHTML = "You Lose"
        scissors2.style.display = "block"
    }
    if (randomChoice[Computer] == "paper"){
        paper2.style.display = "block"
        win.innerHTML = "Tie"
    }
})
again.addEventListener("click",()=>{
    rock1.style.display = "none"
    scissors1.style.display = "none"
    paper1.style.display = "none"
    rock2.style.display = "none"
    scissors2.style.display = "none"
    paper2.style.display = "none"
    section.style.display = "none"
    main.style.display = "block"
})
