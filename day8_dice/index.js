/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

function rollDie(e) {
    const roll = Math.round(Math.random() * 5) + 1
    removeDivs(dice)
    addDivs(roll)
}

let dice = document.getElementById("dice")
dice.addEventListener("click", rollDie)

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


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
