$(document).ready(function(){
    $('.corousel__inner').slick(
      {
        speed: 1300,
        adaptiveHeigt: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/corousel/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/corousel/right-arrow (2).svg"></button>',
        responsive: [
          {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]

      });
  });