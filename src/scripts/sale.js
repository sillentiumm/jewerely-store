const nav = document.querySelectorAll('.sale-menu-choise__element')
const elements = document.querySelectorAll('.sale-element')
const likes= document.querySelectorAll('.like')
const watches= document.querySelectorAll('.watch')
const likesPlace = document.getElementById('likesCount')
const arrowLeft = document.getElementById('saleArrowLeft')
const arrowRight = document.getElementById('saleArrowRight')
const sliderLine = document.getElementById('linee')

let sliderShift = 0
let likesCount = 0
let width = 0
let sliderWidth = 0
let sliderCount = 0


nav.forEach(el => {
    el.addEventListener('click', e => {
        nav.forEach(ele => {
            ele.classList.remove("sale-menu-choise__element__active");
        })
        el.classList.add("sale-menu-choise__element__active");
    })
})

elements.forEach(el => {
    el.addEventListener('click', e => {
        el.children[el.children.length-1].style.display = 'flex'
    })
})

likes.forEach(el => {
    el.addEventListener('click', e => {
        el.classList.toggle('red')
        countLikes()
    })
})

watches.forEach(el => {
    el.addEventListener('click', e => {
        el.style.display = 'none'
    })
})

arrowRight.addEventListener('click', e => {
    knowWidth()
    arrowLeft.style.opacity='1'
    if (sliderShift - sliderCount == -5) {
        arrowRight.style.opacity ='.15' 
    }
    else if(sliderShift - sliderCount == -6 ) {
        sliderShift++
    }
    sliderShift-- 
    sliderLine.style.left = sliderShift * sliderWidth + '%'
})

arrowLeft.addEventListener('click', e => {
    knowWidth()
    arrowRight.style.opacity ='1'
    if(sliderShift == -1) {
        arrowLeft.style.opacity= '.15'
    }
    else if(sliderShift == 0) {
        sliderShift--
    }
    sliderShift++
    sliderLine.style.left = sliderShift * sliderWidth + '%'
})

function countLikes() {
    likesCount = document.querySelectorAll('.red').length
    likesPlace.innerHTML = likesCount
    likesCount? likesPlace.style.opacity = '1' : likesPlace.style.opacity = '0'
}

function knowWidth() {
    width = window.innerWidth
    if(width > 1300) {
        sliderWidth = 25
        sliderCount = 4
    }
    else if(width > 768) {
        sliderWidth = 33.3
        sliderCount = 3
    }
    else if(width > 575) {
        sliderWidth = 50
        sliderCount = 2
    }
    else {
        sliderWidth = 100
        sliderCount = 1
    }
}
