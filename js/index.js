/*Бургер кнопка*/ 
document.querySelector('.burger__btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__info').classList.toggle('open')
})
// swipper

// slider trener
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
  // swipper trener mobile
  var swiper = new Swiper(".mySwiper__mobile", {
    watchSlidesProgress: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // slider feedback

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

