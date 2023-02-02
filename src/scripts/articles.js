const arrow = document.getElementById('articlesArrow')
const hiden = document.querySelectorAll('.articles-element')
const more = document.getElementById('articlesMore')

arrow.addEventListener('click', e => {
    hiden.forEach(el => {
        el.style.display = 'block'
        more.style.display = 'none'
    })
    console.log('artcle')
})