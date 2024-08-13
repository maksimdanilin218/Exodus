document.querySelector('.burger__btn').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav__info').classList.toggle('open')
})

// directions navigation
// desktop version
const gymBtn = document.getElementById('gym')
const groupTrainingBtn = document.getElementById('group-training')
const poolBtn = document.getElementById('pool')
const spaBtn = document.getElementById('spa')
const childrenBtn = document.getElementById('children')
const gym = document.getElementById('gym__container')
const groupTraining = document.getElementById('group-training-container')
const pool = document.getElementById('pool-container')
const spa = document.getElementById('spa-container')
const children = document.getElementById('children-container')


gymBtn.addEventListener('click', () => {
    gym.style.display = 'block'
    groupTraining.style.display = 'none'
    pool.style.display = 'none'
    spa.style.display = 'none'
    children.style.display = 'none'
})

groupTrainingBtn.addEventListener('click', () => {
    groupTraining.style.display = 'block'
    gym.style.display = 'none'
    pool.style.display = 'none'
    spa.style.display = 'none'
    children.style.display = 'none'

})

poolBtn.addEventListener('click', () => {
    pool.style.display = 'block'
    gym.style.display = 'none'
    groupTraining.style.display = 'none'
    spa.style.display = 'none'
    children.style.display = 'none'
})

spaBtn.addEventListener('click', () => {
    spa.style.display = 'block'
    gym.style.display = 'none'
    groupTraining.style.display = 'none'
    pool.style.display = 'none'
    children.style.display = 'none'
})

childrenBtn.addEventListener('click', () => {
    children.style.display = 'block'
    gym.style.display = 'none'
    groupTraining.style.display = 'none'
    pool.style.display = 'none'
    spa.style.display = 'none'
})
// mobile version
const gymBtn__mobile = document.getElementById('gym__mobile')
const groupTrainingBtn__mobile = document.getElementById('group-training__mobile')
const poolBtn__mobile = document.getElementById('pool__mobile')
const spaBtn__mobile = document.getElementById('spa__mobile')
const childrenBtn__mobile = document.getElementById('children__mobile')
const gym__mobile = document.getElementById('gym__container__mobile')
const groupTraining__mobile = document.getElementById('group-training-container__mobile')
const pool__mobile = document.getElementById('pool-container__mobile')
const spa__mobile = document.getElementById('spa-container__mobile')
const children__mobile = document.getElementById('children-container__mobile')


gymBtn__mobile.addEventListener('click', () => {
    gym__mobile.style.display = 'block'
    groupTraining__mobile.style.display = 'none'
    pool__mobile.style.display = 'none'
    spa__mobile.style.display = 'none'
    children__mobile.style.display = 'none'
})

groupTrainingBtn__mobile.addEventListener('click', () => {
    groupTraining__mobile.style.display = 'block'
    gym__mobile.style.display = 'none'
    pool__mobile.style.display = 'none'
    spa__mobile.style.display = 'none'
    children__mobile.style.display = 'none'

})

poolBtn__mobile.addEventListener('click', () => {
    pool__mobile.style.display = 'block'
    gym__mobile.style.display = 'none'
    groupTraining__mobile.style.display = 'none'
    spa__mobile.style.display = 'none'
    children__mobile.style.display = 'none'
})

spaBtn__mobile.addEventListener('click', () => {
    spa__mobile.style.display = 'block'
    gym__mobile.style.display = 'none'
    groupTraining__mobile.style.display = 'none'
    pool__mobile.style.display = 'none'
    children__mobile.style.display = 'none'
})

childrenBtn__mobile.addEventListener('click', () => {
    children__mobile.style.display = 'block'
    gym__mobile.style.display = 'none'
    groupTraining__mobile.style.display = 'none'
    pool__mobile.style.display = 'none'
    spa__mobile.style.display = 'none'
})
// swipper__mobile
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
});