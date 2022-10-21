// Build a very simple 5 Dice roll game.
// 1's are worth 100 points
// 5's are worth 50 points
// Triple 1's are worth 1000
// triple 2-6's are worth the face value * 100 (2=200, 3=300, 6=600 ect) 
// Show a round score 
// Show a total score

let d1 = Math.floor(Math.random()*6)+1
let d2 = Math.floor(Math.random()*6)+1
let d3 = Math.floor(Math.random()*6)+1
let d4 = Math.floor(Math.random()*6)+1
let d5 = Math.floor(Math.random()*6)+1
let allDice = [d1,d2,d3,d4,d5]
var roundScore = 0
var totalScore = 0
let oneCount = 0
let twoCount = 0
let threeCount = 0
let fourCount = 0
let fiveCount = 0
let sixCount = 0

for(i=0;i<7;i++){
    if(allDice[i]==1){
        oneCount += 1
    }else if(allDice[i]==2){
        twoCount += 1
    }else if(allDice[i]==3){
        threeCount += 1
    }else if(allDice[i]==4){
        fourCount += 1
    }else if(allDice[i]==5){
        fiveCount += 1
    }else if(allDice[i]==6){
        sixCount += 1
    }
}

if(oneCount==5){
    roundScore += 1200
}else if(oneCount==4){
    roundScore += 1100
}else if(oneCount==3){
    roundScore += 1000
}else if(oneCount==2){
    roundScore += 200
}else if(oneCount==1){
    roundScore += 100
}

if(twoCount>=3){
    roundScore += 200
}

if(threeCount>=3){
    roundScore += 300
}


if(fourCount>=3){
    roundScore += 400
}

if(fiveCount==5){
    roundScore += 600
}else if(fiveCount==4){
    roundScore += 550
}else if(fiveCount==3){
    roundScore += 500
}else if(fiveCount==2){
    roundScore += 100
}else if(fiveCount==1){
    roundScore += 50
}

if(sixCount>=3){
    roundScore += 600
}

function addToTotalScore(){
    totalScore = totalScore + roundScore
}

addToTotalScore()


console.log(`You rolled a ${d1}, ${d2}, ${d3}, ${d4}, and ${d5}`)
console.log(`This rounds score is ${roundScore}`)
console.log(`Your total score is ${totalScore}`)