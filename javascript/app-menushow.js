var ul = document.querySelector('nav ul')
var menubtn = document.querySelector('.menu-btn svg')

function menushow() {
    if(ul.classList.contains('open')) {
        ul.classList.remove('open')
    }
    else {
        ul.classList.add('open')
    }
}