const left = document.getElementById('mainArrowLeft')
const right = document.getElementById('mainArrowRight')
const sliderElements = document.querySelectorAll('.main-slider-el')
const points = document.querySelectorAll('.main-nav__point')
let pointNumber = 0
const sliderArr =[]

sliderElements.forEach(el => {
    sliderArr.push(el)
})

right.addEventListener('click' , e => {
    sliderArr.push(sliderArr[0])
    sliderArr.shift()
    arrStyle()
    pointNumber == 2? pointNumber = 0 : pointNumber++
    pointColor()
})

left.addEventListener('click' , e => {
    sliderArr.unshift(sliderArr[2])
    sliderArr.pop()
    arrStyle()
    pointNumber == 0? pointNumber = 2 : pointNumber--
    pointColor()
})

function arrStyle() {
    sliderArr[0].style.left = '0'
    sliderArr[1].style.left = '100%'
    sliderArr[2].style.left = '-100%'

    sliderArr[0].style.zIndex = 5
    sliderArr[1].style.zIndex = -1
    sliderArr[2].style.zIndex = -1
}

function pointColor() {
    points.forEach(el => {
        el.style.backgroundColor = '#fff'
    })
    points[pointNumber].style.backgroundColor = '#303030'
}
