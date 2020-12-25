/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

let dice = document.getElementById("dice")
dice.addEventListener("click", rollDie)

function rollDie(e) {
    const roll = Math.round(Math.random() * 5) + 1
    removeDivs(dice)
    resetDiceClass()
    addDivs(roll)
    addFaceClass(roll)

    
}

function addDivs(num) {
    let i = 0
    while(i < num) {
        let dot = document.createElement('div')
        dot.classList.add('dot')
        dice.appendChild(dot)
        i++
    }     
}

function removeDivs(myNode) {
    while(myNode.firstChild) {
        myNode.removeChild(myNode.lastChild)
    }
}

function resetDiceClass() {
    dice.classList = "dice"
}

function addFaceClass(num) {
    dice.classList = `dice face-${num}`
}