const navbarButton = document.querySelector('#navButton');
const navbar = document.querySelector('.responsiveNav');

let isopen = false

navbarButton.onclick = () => {
    if (isopen) {
        navbar.style.cssText = `height: 0px`
        isopen = false
    } else {
        navbar.style.cssText = `height:${navbar.scrollHeight}px`
        isopen = true
    }
}