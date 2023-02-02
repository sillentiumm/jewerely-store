const arrowsRight = document.querySelectorAll('.arrow-right')
const arrowsLeft = document.querySelectorAll('.arrow-left')


arrowsRight.forEach(el => {
    el.addEventListener('mousedown' , e => {
        el.childNodes[3].style.left= '27px'
        el.childNodes[5].style.left = '38px'
    })
    el.addEventListener('mouseup' , e => {
        el.childNodes[3].style.left= '19px'
        el.childNodes[5].style.left = '30px'
    })
})

arrowsLeft.forEach(el => {
    el.addEventListener('mousedown' , e => {
        el.childNodes[3].style.left= '11px'
        el.childNodes[5].style.left = '10px'
    })
    el.addEventListener('mouseup' , e => {
        el.childNodes[3].style.left= '19px'
        el.childNodes[5].style.left = '18px'
    })
})

