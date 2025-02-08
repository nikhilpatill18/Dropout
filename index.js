const menu = document.querySelector('.menu_icon')
const x_icon = document.querySelector('.x_icon')
const toggle_menu_section = document.querySelector('.toggle_menu_section')
menu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    x_icon.classList.toggle('hidden')
    toggle_menu_section.classList.toggle('hidden')
    gsap.from(toggle_menu_section, {
        y: -30,
        duration: 0.5
    })
})
x_icon.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    x_icon.classList.toggle('hidden')
    toggle_menu_section.classList.toggle('hidden')

})
// console.log(window.scrollY)

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        document.querySelector("nav").style.backgroundColor = 'rgba(9, 9, 9, 0.8)'
        // document.querySelector("nav").style.height = '80px'
    }
    else {
        document.querySelector("nav").style.background = 'black '
        // document.querySelector("nav").style.height = '100px'
    }
})
