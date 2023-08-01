let gnbLinks;
let gnbBg;
let gnb;
let gnbMobile;
let gnbToggle = false;
document.addEventListener("DOMContentLoaded", function (){
    gnb = document.querySelector('.gnb');
    gnbBg = document.querySelector('.gnb .bg');
    gnbLinks = document.querySelectorAll('.gnb > ul > li > a');
    gnbLinks.forEach(element => {
        element.addEventListener("mouseenter", function(event){
            let left = element.getBoundingClientRect().left - gnb.getBoundingClientRect().left - 1;
            gnbBg.style.width = element.getBoundingClientRect().width + "px";
            gnbBg.style.left = left + "px";
        });
        element.addEventListener("mouseleave", function(){
            gnbBg.style.left = "-" + gnbBg.style.width;
        });
    });
    gnbMobile = document.querySelector(".gnb-mobile");
    gnbMobile.addEventListener("click", function(){
        gnbToggle = !gnbToggle;
        let list = document.querySelector('.gnb-mobile > ul');
        let links = document.querySelectorAll('.gnb-mobile > ul > li');
        if(gnbToggle){
            gnbMobile.style.backgroundImage = "url('./image/close.svg')";
            list.style.display = "flex";
            setTimeout(() => {
                links.forEach(element => {
                    element.style.height = "1em";
                });
                list.style.opacity = 1;
            }, 1);
        } else {
            gnbMobile.style.backgroundImage = "";
            list.style.opacity = 0;
            links.forEach(element => {
                element.style.height = "0";
            });
            setTimeout(() => {
                list.style.display = "none";
            }, 300);
        }
    })

    //main-visual animation
    const mainIO = new IntersectionObserver((entries, observer) => {
        entries.forEach(element => {
            //on view
            if(element.isIntersecting){
                element.target.style.opacity = 1;
                element.target.style.transform = "translateY(0)";
                let btn = element.target.querySelector('a');
                if(btn){
                    btn.style.display = "inline-flex";
                    setTimeout(() => {
                        btn.style.opacity = 1;
                    }, 1250);
                }
            }
        });  
    }, {rootMargin: '0px 0px -50px 0px'})
    
    let titles = document.querySelectorAll('#main-visual > .title > *');
    if(titles) {
        titles.forEach(element => {
            mainIO.observe(element)
        });
    }

    //section typography
    const typoIO = new IntersectionObserver((entries, observer) => {
        entries.forEach(element => {
            //on view
            if(element.isIntersecting){
                element.target.classList.add("passed");
            }
        });  
    }, {rootMargin: '0px 0px -300px 0px'})
    let sections = document.querySelectorAll("section");
    if(sections){
        sections.forEach(element => {
            typoIO.observe(element);
        });
    }
});

window.addEventListener('DOMContentLoaded', function(){
    let swiper = new Swiper(".product-list", {
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});