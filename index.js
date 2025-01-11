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
        start: "top 65%",
        end: "bottom 70%",
        scroll: "#section-2",
        scrub: 1,
        // pin: true,
        marker: true
    }
})
gsap.to("#section-1", {
    scale: 0,
    opacity: 0,
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 70%",
        end: "bottom 50%",
        scroll: "body",
        scrub: 2,
        // pin: true,
        marker: true
    }
})
gsap.to("#video_section", {
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 50%",
        end: "top 100%",
        scroll: "body",
        scrub: 2,
        // pin: true,
        marker: true
    }
})
gsap.to("#section-3 h1", {
    transform: "translateX(-100%)",
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-3",
        start: "top 0%",
        end: "top -100%",
        scroll: "body",
        scrub: 2,
        pin: true
    }
})

gsap.from("#section-4", {
    opacity: 0,
    duration: 3,
    y: 10,
    delay: 2,
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true,
        // pin: true,
        marker: true
    }
})
gsap.from("#section-4 #document", {
    opacity: 0,
    y: -50,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-4 #instant", {
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-4",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-4 #para", {
    y: 10,
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-4",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-4 #buttons", {
    y: 20,
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-4",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-5 #img ", {
    y: 500,
    // opacity: 0,
    duration: 100,
    delay: 10,
    scrollTrigger: {
        trigger: "#section-5",
        start: "top 70%",
        // end: "top 10%",
        scroll: "body",
        scrub: true
    }
})
gsap.from(" #section-5 #video", {
    y: 700,
    duration: 100,
    delay: 10,
    scrollTrigger: {
        trigger: "#section-5",
        start: "top 70%",
        // end: "top 10%",
        scroll: "body",
        scrub: true
    }
})


gsap.from("#section-6", {
    opacity: 0,
    duration: 3,
    y: 10,
    delay: 2,
    scrollTrigger: {
        trigger: "#section-6",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true,
        // pin: true,
        marker: true
    }
})
gsap.from("#section-6 #document", {
    opacity: 0,
    y: -50,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-6",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-6 #instant", {
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-6",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-6 #para", {
    y: 10,
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-6",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-6 #buttons", {
    y: 20,
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-6",
        start: "top 40%",
        end: "bottom 100%",
        scroll: "body",
        scrub: true
    }
})



gsap.from("#section-7 #img ", {
    y: 500,
    // opacity: 0,
    duration: 100,
    delay: 10,
    scrollTrigger: {
        trigger: "#section-7",
        start: "top 70%",
        // end: "top 10%",
        scroll: "body",
        scrub: true
    }
})
gsap.from(" #section-7 #video", {
    y: 600,
    duration: 100,
    delay: 10,
    scrollTrigger: {
        trigger: "#section-7",
        start: "top 70%",
        // end: "top 10%",
        scroll: "body",
        scrub: true
    }
})

gsap.from("#hero #hero-1", {
    scale: 0.8,
    delay: 10,
    scrollTrigger: {
        trigger: "#hero",
        start: "top 90%",
        // end: "top 10%",
        scroll: "body",
        scrub: true
    }
})
