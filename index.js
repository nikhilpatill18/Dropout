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
let t1 = gsap.timeline()

gsap.to("body ", {
    backgroundColor: "white",
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 60%",
        end: "bottom 70%",
        scroll: "body",
        scrub: 1,
        // pin: true,
        marker: true
    }
})
gsap.to("#section-1", {
    scale: 0,
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 60%",
        end: "top -100%",
        scroll: "body",
        scrub: 1,
        // pin: true,
        marker: true
    }
})
gsap.to("#video_section", {
    opacity: 0,
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 60%",
        end: "top 100%",
        scroll: "body",
        scrub: 1,
        // pin: true,
        marker: true
    }
})
