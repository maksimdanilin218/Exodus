/*Бургер кнопка*/ 
document.querySelector('.burger__btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__info').classList.toggle('open')
})

// galary
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });