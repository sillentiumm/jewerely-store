const detail = document.getElementById('productDetail')
const question = document.getElementById('productDetailQuestion')
const colors = document.querySelectorAll('.product-descr-color-element__big')
const sizes = document.querySelectorAll('.product-descr-size__element')
const menu = document.getElementById('productMenu')
const arrows = document.querySelectorAll('.sale-menu-arrow')
const timer = {hours: 12, minutes: 46, seconds: 51}
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let a = 0

window.onload = setInterval(timerStart, 1000)

arrows.forEach(el => {
    el.addEventListener('click', e => {
        menu.style.opacity = '0'
        setTimeout(time, 200)
    })

    function time() {
        menu.style.opacity = '1'
    }
})

question.addEventListener('click', e => {
    if (a==0) {
        detail.style.display = 'flex'
        question.children[0].style.opacity = 0
    }
    else {
        detail.style.display ='none'
        question.children[0].style.opacity = 1
    }
    a =!a
})

colors.forEach(el => {
    el.addEventListener('click', e => {
        colors.forEach(ele => {
            ele.style.border = '1px solid #DADADA'
        })
        el.style.border= '1px solid #303030'   
    })
})

sizes.forEach(el => {
    el.addEventListener('click', e => {
        sizes.forEach(ele => {
            ele.style.color= '#303030'
            ele.style.backgroundColor = '#fff'
        })  
        el.style.color= '#fff'
        el.style.backgroundColor = '#303030'
    })
})

function timerStart() {
    if(timer.seconds > 0) {
        timer.seconds = timer.seconds - 1
    }
    else {
        if (timer.minutes > 0) {
            timer.minutes = timer.minutes - 1
        }
        else {
            timer.minutes = 59
            timer.hours = timer.hours - 1
            hours.innerHTML= timer.hours
        }
        timer.seconds = 59
        minutes.innerHTML = timer.minutes
    }
    seconds.innerHTML = timer.seconds
}