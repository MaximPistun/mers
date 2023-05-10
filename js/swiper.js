


const swiperOne = new Swiper(".blog__swiper", {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: ".blog__button-next",
      prevEl: ".blog__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});