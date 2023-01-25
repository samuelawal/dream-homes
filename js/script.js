// Change background header
function scrollHeader() {
    const scrollY = window.pageYOffset
    const header = document.getElementById('nav__list');
    if (scrollY >=200) {
        header.classList.add('scroll-header')
    }else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)