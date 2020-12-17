// images 
let images = document.querySelectorAll('.card')

// btns
let previousBtn = document.querySelector('.previous')
let nextBtn = document.querySelector('.next')

previousBtn.addEventListener("click", backFrame)
nextBtn.addEventListener("click", nextFrame)

// functions

function nextFrame() {
    let currentImage = document.querySelector('.current')
    if(currentImage === images[images.length - 1]) {
        changeOpacity()
        return
    }
    
    for(let i = 0; i < images.length; i++) {
        if(images[i].getAttribute("class") === "card current") {
             images[i].classList.remove("current")
             images[i+1].classList.add("current")
             getGallery('next')  
             changeOpacity()
             return
         }
    }   
}

function backFrame() {
    let currentImage = document.querySelector('.current')
    if(currentImage === images[0]) {
        changeOpacity()
        return
    }
    
    for(let i = 0; i < images.length; i++) {
         if(images[i].getAttribute("class") === "card current") {
             images[i].classList.remove("current")
             images[i-1].classList.add("current")
             getGallery('back')
             changeOpacity()
             return
         }
     } 
     
}

function changeOpacity(move) {
    let currentImage = document.querySelector('.current')
    
    currentImage === images[0] ? previousBtn.style.opacity = .3 : previousBtn.style.opacity = 1
    currentImage === images[images.length - 1] ? nextBtn.style.opacity = .3 : nextBtn.style.opacity = 1
}

function getGallery(move) {
    const gallery = document.querySelector('.gallery')
    const galleryStyle = window.getComputedStyle(gallery)
    
    let matrixArray = galleryStyle.transform.split(', ')
    const oldX = matrixArray[4] * 1
    
    let newX = move === 'next' ? oldX - 220 : oldX + 220
   
    matrixArray[4] = newX
    gallery.style.transform = matrixArray.join(', ')
}
