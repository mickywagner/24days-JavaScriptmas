let images = document.querySelectorAll('.card')

// btns
let previousBtn = document.querySelector('.previous')
let nextBtn = document.querySelector('.next')

previousBtn.addEventListener("click", backFrame)
nextBtn.addEventListener("click", nextFrame)

// 0 to -880px

function nextFrame() {
    let gallery = document.querySelector('.gallery')  
    const galleryStyle = window.getComputedStyle(gallery)
    
    let currentImage = document.querySelector('.current')
    if(currentImage === images[images.length - 1]) {
        changeOpacity()
        return
    }
    
    for(let i = 0; i < images.length; i++) {
        if(images[i].getAttribute("class") === "card current") {
             images[i].classList.remove("current")
             images[i+1].classList.add("current")
             
             let matrixArray = galleryStyle.transform.split(', ')
             const oldX = galleryStyle.transform.split(', ')[4]
             const newX = oldX - 220
             matrixArray[4] = newX
             
             gallery.style.transform = matrixArray.join(', ')
             
             changeOpacity()
             return
         }
    }   
}

function backFrame() {
    let gallery = document.querySelector('.gallery')
    const galleryStyle = window.getComputedStyle(gallery)

    
    let currentImage = document.querySelector('.current')
    if(currentImage === images[0]) {
        changeOpacity()
        return
    }
    
    for(let i = 0; i < images.length; i++) {
         if(images[i].getAttribute("class") === "card current") {
             images[i].classList.remove("current")
             images[i-1].classList.add("current")
             
             let matrixArray = galleryStyle.transform.split(', ')
             const oldX = galleryStyle.transform.split(', ')[4]
             const newX = (oldX * 1) + 220
             matrixArray[4] = newX
             gallery.style.transform = matrixArray.join(', ')
            
             changeOpacity()
             return
         }
     } 
     
}

function changeOpacity() {
    let currentImage = document.querySelector('.current')
    
    currentImage === images[0] ? previousBtn.style.opacity = .3 : previousBtn.style.opacity = 1
    currentImage === images[images.length - 1] ? nextBtn.style.opacity = .3 : nextBtn.style.opacity = 1
}

function getCurrentImage() {
    let currentImage = document.querySelector('.current')
    return currentImage
}

