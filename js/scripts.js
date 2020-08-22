document.addEventListener('DOMContentLoaded', function() {

  const menuSlideOpen = document.querySelector('[data-js="menu-slide-open"]');
  if (menuSlideOpen) {
    menuSlideOpen.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.classList.add('has-menu-slide');
      document.querySelector('.menu-slide-block').
          classList.
          add('menu-slide-block--show');
    });
  }

  const menuslideClose = document.querySelector('[data-js="menu-slide-close"]');
  if (menuslideClose) {
    menuslideClose.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.classList.remove('has-menu-slide');
      document.querySelector('.menu-slide-block').
          classList.
          remove('menu-slide-block--show');
    });
  }

  new Swiper('.schedule-block__container', {
    slidesPerView: 4,
    spaceBetween: 30,


    navigation: {
      nextEl: '.schedule-block__slider-nav .swiper-button-next',
      prevEl: '.schedule-block__slider-nav .swiper-button-prev',
    },
  });

  new Swiper('.busses-block__container', {
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: '.busses-block__slider-nav .swiper-button-next',
      prevEl: '.busses-block__slider-nav .swiper-button-prev',
    },
  });

  new Swiper('.actions-block__container', {
    slidesPerView: 3,
    spaceBetween: 28,

    navigation: {
      nextEl: '.actions-block__slider-nav .swiper-button-next',
      prevEl: '.actions-block__slider-nav .swiper-button-prev',
    },
  });

  if (typeof ymaps !== 'undefined') {
    //about map
    ymaps.ready(function() {
      const myMap = new ymaps.Map('map', {
            center: [55.56200306919632, 42.02501499999997],
            zoom: 15,
          }, {
            searchControlProvider: 'yandex#search',
          }),
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div>$[properties.iconContent]</div>',
          ),
          myPlacemarkWithContent = new ymaps.Placemark(
              [55.56323306919632, 42.04301499999997], {}, {

                iconLayout: 'default#imageWithContent',
                iconImageHref: 'img/svg/map.svg',
                iconImageSize: [75, 75],
                iconImageOffset: [-30, -66],
                iconContentLayout: MyIconContentLayout,
              });
      myMap.geoObjects.add(myPlacemarkWithContent);
    });
  }

});