
const range = document.getElementById('myRange');
const rangeOutput = document.getElementById('range-output-input');


document.addEventListener("DOMContentLoaded", () => {

  range.oninput = function() {
    rangeOutput.value = range.value + ' литров';
  }


  $('.certificates__bottom').slick({
    slidesToShow: 4,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="dist/img/icons/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="dist/img/icons/arrow-next.svg" alt="arrow-next"></button>'
  });

  $('.reviews__body').slick({
    slidesToShow: 2,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="dist/img/icons/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="dist/img/icons/arrow-next.svg" alt="arrow-next"></button>'
  });

  $('.partners__items').slick({
    slidesToShow: 4,
    adaptiveHeight: true,
    dots: true,
    nextArrow: false,
    prevArrow: false
  });
  
})


