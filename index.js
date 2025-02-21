const menu = document.querySelector('.menu_icon')
const x_icon = document.querySelector('.x_icon')
const toggle_menu_section = document.querySelector('.toggle_menu_section')

const togglegetApp = document.querySelector('.toggle_get-app');
const toggleProducts = document.querySelector('.toggle_products');
const toggleSolution = document.querySelector('.toggle_solution');

togglegetApp.addEventListener('click', () => {
    // console.log(togglegetApp.children)
    togglegetApp.children[1].classList.toggle('text-blue-600')
    togglegetApp.children[2].classList.toggle('hidden')
})
toggleProducts.addEventListener('click', () => {
    // console.log(togglegetApp.children)
    toggleProducts.children[1].classList.toggle('text-blue-600')
    toggleProducts.children[2].classList.toggle('hidden')
})
toggleSolution.addEventListener('click', () => {
    // console.log(togglegetApp.children)
    toggleSolution.children[1].classList.toggle('text-blue-600')
    toggleSolution.children[2].classList.toggle('hidden')
})


























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


// animatio of the comaonies


const images = document.querySelectorAll('.trusted-section>.compaies>div');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');

let intalmov = 0; // 

leftSlide.addEventListener('click', () => {
    intalmov -= images[0].clientWidth;
    images.forEach((img) => {
        img.style.transform = `translateX(${intalmov}px)`;
        img.style.transition = 'transform 0.5s linear';
    });
});

rightSlide.addEventListener('click', () => {
    intalmov += images[0].clientWidth;
    images.forEach((img) => {
        img.style.transform = `translateX(${intalmov}px)`;
        img.style.transition = 'transform 0.5s linear';
    });
});



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