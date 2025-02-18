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
// console.log(window.location.pathname)


if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    // console.log("User is on the Dashboard page.");
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

    const navoption = document.querySelectorAll(".solution,.products,.get-app")
    navoption.forEach(option => {
        option.addEventListener("mouseover", () => {

            document.querySelector("nav").style.backgroundColor = 'black'

        })
        option.addEventListener("mouseout", () => {
            document.querySelector("nav").style.backgroundColor = 'rgba(9, 9, 9, 0.8)'

        })
    })


    function togetstarted() {
        window.location.replace("http://127.0.0.1:5503/getstarted.html")
    }

}


const line1 = document.querySelector(".trusted-section>div")
console.log(line1)




// const imagepath = [
//     './assest/trusted_1.svg',
//     './assest/trusted_2.svg',
//     "./assest/trusted_3.svg",
//     "./assest/trusted_4.svg",
//     "./assest/trusted_5.svg",
//     "./assest/trusted_6.svg",
//     "./assest/trusted_7.svg",
//     "./assest/trusted_8.svg",
//     "./assest/trusted_9.svg",
// ]



function addelement(index) {
    const div = document.createElement('div')
    div.classList.add('flex', 'min-w-fit')
    div.innerHTML = `<img src="${imagepath[index]}" alt="company">`
    // console.log(div)
    line1.appendChild(div)
    div.style.transform = `transalteX(${500}px)`
    div.style.transition = 'transform 1s linear'

}

// let start = 0

// setInterval(() => {
//     if (start == imagepath.length) {
//         start = 0
//     }
//     addelement(start)
//     start = start + 1

// }, 100);

// for (let index = 0; index < 9; index++) {
//     addelement(index)
// }

// const line2 = document.querySelectorAll(".trusted-section div")


// let start = 0
// function animateleft() {
//     if (start == line2.length) {
//         start = 0
//     }
//     else {
//         // console.log(start)
//         line2[start].style.transform = `translateX(-${1000}px)`
//         line2[start].style.transition = 'transform 1s linear '
//         start = start + 1
//     }
// }
// setInterval(() => {
//     animateleft()
//     start = 0
//     console.log("hi")

// }, 0);



const animateleft = () => {
    document.querySelector(".trusted-section>div").style.transform = 'translateX(-200%)'
    document.querySelector(".trusted-section>div").style.transition = 'transform 10s linear'
}
const animaright = () => {
    document.querySelector(".trusted-section>div").style.transform = 'translateX(10 0%)'
    document.querySelector(".trusted-section>div").style.transition = 'transform 10s linear'

}

let a = true
// setInterval(() => {

//     if (a) {
//         animateleft()
//         a = false
//     }
//     else {
//         animaright()
//         a = true
//     }



// }, 10000);










//  for getstarted page js


const monbill = document.getElementById('billmontly')
const yearbill = document.getElementById('billyearly')
console.log(monbill.checked)
console.log(yearbill.checked)


const onchangeprice = () => {
    const plusPrice = document.querySelector(".plus-price .price")
    const essentialsPrice = document.querySelector(".essentials-price .price")
    const busniessPrice = document.querySelector(".busniess-price .price")
    const busniessplusPrice = document.querySelector(".busniess-plus-price .price")

    if (yearbill.checked) {
        plusPrice.innerHTML = "$9.99/month"
        essentialsPrice.innerHTML = "$16.58/month"
        busniessPrice.innerHTML = "$15 / user / month"
        busniessplusPrice.innerHTML = "$24 / user / month"
    }
    else {
        plusPrice.innerHTML = "$11.99/month"
        essentialsPrice.innerHTML = "$19.99/month"
        busniessPrice.innerHTML = "$18 / user / month"
        busniessplusPrice.innerHTML = "$30 / user / month"

    }
}