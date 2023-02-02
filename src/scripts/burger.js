const burger = document.getElementById('burger')
const burger1 = document.getElementById('burgerOpen1')
const burger2 = document.getElementById('burgerOpen2')
const burger3 = document.getElementById('burgerOpen3')
const burgerOpen = document.getElementById('burgerOpen')
const body = document.body 

burgerOpen.addEventListener('click' , e => {
    burger.classList.toggle('hide_burger')
    burger1.classList.toggle('header-burger-open__element_close')
    burger2.classList.toggle('header-burger-open__element2_close')
    burger3.classList.toggle('hide')
    body.classList.toggle('body_noscroll')
})