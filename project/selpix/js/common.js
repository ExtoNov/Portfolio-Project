document.addEventListener('DOMContentLoaded', function(){
  let swiper = new Swiper('.main-slide', {
    loop: true,
    height: 500,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction : false
    },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  });
let photoSlider = new Swiper('.photo', {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }
  });
})
//mobile banner swiper
let init = false;

function swiperBanner() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".banner-swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        height: "auto",
        pagination: {
          el: ".swiper-pagination",
        }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperBanner();
window.addEventListener("resize", swiperBanner);
