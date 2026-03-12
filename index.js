let players=[]
let currentPlayer=0
let scores={}
let score=0
let currentRound=0
let totalRounds=5
let difficulty="easy"
let selectedCategories=["Countries"]

const questions={

Countries:[
{
question:"Which country is the largest?",
answers:["USA","China","Russia","Canada"],
correct:2
},
{
question:"Which country is known as the Land of the Rising Sun?",
answers:["China","Japan","Thailand","Korea"],
correct:1
}
],

Capitals:[
{
question:"What is the capital of France?",
answers:["Paris","Rome","Madrid","Berlin"],
correct:0
},
{
question:"Capital of Italy?",
answers:["Venice","Rome","Milan","Naples"],
correct:1
}
],

Oceans:[
{
question:"Largest ocean?",
answers:["Atlantic","Pacific","Indian","Arctic"],
correct:1
}
],

Mountains:[
{
question:"Highest mountain?",
answers:["Everest","K2","Mont Blanc","Elbrus"],
correct:0
}
],

Continents:[
{
question:"Which continent is Brazil in?",
answers:["Asia","Europe","South America","Africa"],
correct:2
}
]

}

function addPlayer(){

const input=document.getElementById("playerName")
const name=input.value.trim()

if(name==="")return

players.push(name)
scores[name]=0

const li=document.createElement("li")
li.textContent=name

document.getElementById("playerList").appendChild(li)

input.value=""

}

function setDifficulty(level){

difficulty=level

document.querySelectorAll(".difficulty button").forEach(btn=>{
btn.classList.remove("active")
})

event.target.classList.add("active")

}

function setRounds(n){

totalRounds=n

document.querySelectorAll(".rounds button").forEach(btn=>{
btn.classList.remove("active")
})

event.target.classList.add("active")

}

document.querySelectorAll(".category").forEach(btn=>{

btn.onclick=()=>{

btn.classList.toggle("active")

const cat=btn.textContent

if(selectedCategories.includes(cat)){

selectedCategories=selectedCategories.filter(c=>c!==cat)

}else{

selectedCategories.push(cat)

}

}

})

function startGame(){

if(players.length===0){

alert("Add at least one player")
return

}

document.getElementById("menu").classList.add("hidden")
document.getElementById("game").classList.remove("hidden")

showPlayerTurn()

nextQuestion()

}

function showPlayerTurn(){

let player=players[currentPlayer]

let info=document.createElement("p")
info.className="playerTurn"
info.id="playerTurn"

info.textContent="Player: "+player

document.getElementById("game").prepend(info)

}

function nextQuestion(){

if(currentRound>=totalRounds){

endGame()
return

}

currentRound++

let category=selectedCategories[Math.floor(Math.random()*selectedCategories.length)]

let q=questions[category][Math.floor(Math.random()*questions[category].length)]

document.getElementById("question").textContent=q.question

const answersDiv=document.getElementById("answers")
answersDiv.innerHTML=""

q.answers.forEach((ans,index)=>{

const btn=document.createElement("button")
btn.textContent=ans

btn.onclick=()=>{

if(index===q.correct){

btn.classList.add("correct")

let player=players[currentPlayer]
scores[player]++
score++

document.getElementById("score").textContent=score

}else{

btn.classList.add("wrong")

}

setTimeout(()=>{

currentPlayer=(currentPlayer+1)%players.length

document.getElementById("playerTurn").textContent="Player: "+players[currentPlayer]

nextQuestion()

},800)

}

answersDiv.appendChild(btn)

})

}

function endGame(){

document.getElementById("game").classList.add("hidden")
document.getElementById("result").classList.remove("hidden")

let results=""

players.forEach(p=>{
results+=p+" : "+scores[p]+"<br>"
})

document.getElementById("finalScore").innerHTML=results

}

function restartGame(){

location.reload()

}