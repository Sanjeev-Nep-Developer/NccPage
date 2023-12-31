const h = document.querySelector("#h");
const h2 = document.querySelector("#h2")
const text = "New Capital College";
const header = document.querySelector("header");


let i = 0;
var t;
setInterval(() => {
    if (i < text.length) {

        textValue = text.slice(0, i + 1)
        h.textContent = textValue;
        i++;
    } else {
        t = true;
    }

}, 100)

const text2 = "center of excellence"
setInterval(() => {
    if (t) {
        if (i < text2.length) {

            textValue = text2.slice(0, i + 1)
            h2.textContent = textValue;
            i++;
        }
    }

}, 100)


//! js for header 

 // Clicking away from dropdown will remove the dropdown class
 document.addEventListener('click', function () {
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].style.display = 'none';
  }
});

// Toggle open and close nav styles on click
var navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', function () {
  var nav = document.querySelector('nav ul');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

// Hamburger to X toggle
navToggle.addEventListener('click', function () {
  this.classList.toggle('active');
});



// Initialize Swiper after the DOM has loaded


document.addEventListener('DOMContentLoaded', function () {
  // Check if Swiper is defined before initializing
  if (typeof Swiper !== 'undefined') {
      var mySwiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  } else {
      console.error('Swiper is not defined. Make sure the Swiper library is properly loaded.');
  }

  // Rest of your existing code...
});



/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});