document.querySelector('.burger__btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__info').classList.toggle('open')
})
// swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });