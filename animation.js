
const lenis = new Lenis({
    duration: 1
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)




gsap.to("body ", {
    backgroundColor: "white",
    duration: 3,
    delay: 1,
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 50%",
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
        start: "top 50%",
        end: "bottom 20%",
        scroll: "body",
        scrub: true,
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
        scrub: true,
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
        scrub: true,
        pin: true
    }
})

gsap.from("#section-4", {
    opacity: 0,
    duration: 3,
    y: 100,
    delay: 2,
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 40%",
        end: "bottom 60%",
        scroll: "body",
        scrub: true,
        // pin: true,
        marker: true
    }
})
gsap.from("#section-4 #document", {
    opacity: 0,
    y: -100,
    delay: 2,
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 35%",
        end: "bottom 50%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-4 #instant", {
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-4",
        start: "top 35%",
        end: "bottom 50%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-4 #para", {
    y: 50,
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-4",
        start: "top 35%",
        end: "bottom 50%",
        scroll: "body",
        scrub: true
    }
})
gsap.from("#section-4 #buttons", {
    y: 50,
    opacity: 0,
    delay: 1,

    scrollTrigger: {
        trigger: "#section-4",
        start: "top 35%",
        end: "bottom 50%",
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
        end: "bottom 60%",
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
        end: "bottom 50%",
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
        end: "bottom 50%",
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
        end: "bottom 50%",
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
        end: "bottom 50%",
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
    scale: 0.5,
    delay: 10,
    scrollTrigger: {
        trigger: "#hero",
        start: "top 90%",
        // end: "top 10%",
        scroll: "body",
        scrub: true
    }
})

// section -8 animation
function section8Animation() {
    let sc_8t = gsap.timeline(
        {
            scrollTrigger: {
                trigger: "#section-8",
                scroller: "body",
                start: "top 70%",
                scrub: true,
                end: "top 0%"
            }
        }
    )


    sc_8t.from("#section-8>div>h2", {
        y: -20,
        duration: 2,
        opacity: 0
    })
    sc_8t.from("#section-8>div>div>div .left", {
        x: -20,
        duration: 3,
        opacity: 0
    })
    sc_8t.from("#section-8>div>div>div .right", {
        x: 30,
        duration: 3,
        opacity: 0
    })
}
section8Animation()


// animation for the section-9


function section9Aniamtion() {
    let sec_9t = gsap.timeline({
        scrollTrigger: {
            trigger: "#section-9",
            scroller: "body",
            start: "top 70%",
            scrub: true,
            end: "top 0%"
        }
    })
    sec_9t.from("#section-9", {
        y: -40,
        delay: 1,
        duration: 5,
        opacity: 0
    })
    sec_9t.from("#section-9>div>div>p", {
        y: -40,
        delay: 0.5,
        duration: 5,

        opacity: 0
    })
    sec_9t.from("#section-9>div>div>div>.left", {
        x: -40,
        delay: 0.5,
        duration: 3,
        opacity: 0
    })
    sec_9t.from("#section-9>div>div>div>.right", {
        x: 40,
        delay: 0.5,
        duration: 3,
        opacity: 0
    })
    sec_9t.from("#section-9>div>div>div>.middle", {
        y: -40,
        delay: 0.5,
        duration: 3,
        opacity: 0
    })

}
section9Aniamtion()

