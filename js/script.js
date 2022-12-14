
gsap.registerPlugin( DrawSVGPlugin);


if (document.querySelector(".side-nav")) {
    let menuBtn = document.querySelector(" .menu");
    let page = document.querySelector(".nav_hub");

    menuBtn.addEventListener('click', ()=> {
        page.classList.toggle('active')
        menuBtn.classList.toggle('active')
    })
}


// var swiper = new Swiper(".slider", {
//     loop: true,
//     autoplay: 5500,
//     spaceBetween: 20,
//     breakpoints: {
//         1024: {
//             slidesPerView: 6,
//         },
//         400: {
//             slidesPerView: 2,
//         },
//     },
// });


gsap.from(".svgName", { drawSVG: 0, duration: 4, ease: "Linear.easeNone", repeat: 1, repeatDelay: 8 });

gsap.from(".drawMe", { drawSVG: 0, duration: 6, ease: "Linear.easeNone", repeat: -1,});
