let dice = document.getElementById("dice")
dice.addEventListener("click", rollDie)

function rollDie(e) {
    const roll = Math.round(Math.random() * 5) + 1
    removeDivs(dice)
    resetDiceClass()
    addDivs(roll)
    addFaceClass(roll)
    addTextRoll(roll)
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

function addTextRoll(num) {
    let p = document.getElementById('text')
    p.textContent = `You rolled a ${num}!`
    
}