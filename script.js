
const swiper1 = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 48,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },


});

const swiper2 = new Swiper('.my-swiper', {
  slidesPerView: 3,
  spaceBetween: 60,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },



});