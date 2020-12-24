//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
        let time = 0
        spinningElem.textContent = time
        
        while(!pushed) {
            time++
            await sleep(75)
            spinningElem.textContent = time
        }
        const difference = targetInt - time
        stop(difference)

}

//EDIT THIS FUNCTION
function stop(i){
    var result = document.getElementById('result'); //display your result message here
    if(i === 0) {
        result.textContent = "You Win! You were right on target!"
    } else {
        result.textContent = `Oh no, you lose! Off by ${Math.abs(i)}` 
    }
     
}


//main
setTargetInt();
spin()