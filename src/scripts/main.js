
const range = document.getElementById('myRange');
const rangeOutput = document.getElementById('range-output-input');
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');


document.addEventListener("DOMContentLoaded", () => {

  range.oninput = function() {
    rangeOutput.value = range.value + ' литров';
  }

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('opened');
    burgerBtn.classList.contains('opened') ? burgerBtn.setAttribute('data','aria-expanded') : burgerBtn.removeAttribute('data');
    mobileMenu.classList.toggle('d-block');

    if (mobileMenu.classList.contains("d-block")) {
      mobileMenu.style.display = "block";
    } else if (!mobileMenu.classList.contains("d-block")) {
      mobileMenu.style.display = "none";
    }
  })


  $('.certificates__bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="dist/img/icons/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="dist/img/icons/arrow-next.svg" alt="arrow-next"></button>',
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.reviews__body').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><img src="dist/img/icons/arrow-prev.svg" alt="arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="dist/img/icons/arrow-next.svg" alt="arrow-next"></button>',
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.partners__items').slick({
    slidesToShow: 4,
    dots: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
  
})


