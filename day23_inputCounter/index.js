
const input = document.getElementById("string");
const button = document.getElementById("btn")
const counter = document.getElementById("counterFooter")

input.addEventListener("keyup", () => {
    const characterCount = input.value.length 
    counter.textContent = `${140 - characterCount}/140`
    setCounterColor(characterCount)
    changeBtnClass(characterCount)      
})

function changeBtnClass(chars) {
    if(chars >= 140) {
        button.setAttribute("disabled", true)
        button.classList.add("buttonDisabled")
    } else {
       button.setAttribute("disabled", false)
        button.classList.remove("buttonDisabled") 
    }
}

function setCounterColor(chars) {
     if(140 - chars < 20) {
      counter.style.setProperty("color", "red") 
    } else {
       counter.style.setProperty("color", "white")  
    }
}