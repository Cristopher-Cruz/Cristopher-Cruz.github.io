// ----------------> Highlight NavLink

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})


// ----------------> Light/Dark mode

window.addEventListener('load', () => {
  const LOCAL_VARIABLES = Object.freeze({
    ALPHA: '@darklightmode:alpha',
    MODE: '@darklightmode:mode'
  });

  feather.replace();

  function applyBrightness() {
    let alpha = localStorage.getItem(LOCAL_VARIABLES.ALPHA);

    document
      .querySelector('#mask')
      .style
      .backgroundColor = `rgba(0, 0, 0, ${alpha})`;
  }

  function downBrightness() {
    let alpha = parseFloat(localStorage.getItem(LOCAL_VARIABLES.ALPHA));

    if(alpha > 0) {
      alpha -= 0.1;
    }

    localStorage.setItem(LOCAL_VARIABLES.ALPHA, alpha.toFixed(1));

    applyBrightness();
  }

  function upBrightness() {
    let alpha = parseFloat(localStorage.getItem(LOCAL_VARIABLES.ALPHA));

    if(alpha < 0.7) {
      alpha += 0.1;
    }

    localStorage.setItem(LOCAL_VARIABLES.ALPHA, alpha.toFixed(1));

    applyBrightness();
  }

  function useDarkMode() {
    localStorage.setItem(LOCAL_VARIABLES.MODE, 'dark');

    document
      .querySelector('#light-mode')
      .classList
      .remove('mode-selected');

    document
      .querySelector('#dark-mode')
      .classList
      .add('mode-selected');

    document
      .querySelector('body')
      .classList
      .add('dark-mode');
  }

  function useLightMode() {
    localStorage.setItem(LOCAL_VARIABLES.MODE, 'light');

    document
      .querySelector('#dark-mode')
      .classList
      .remove('mode-selected');

    document
      .querySelector('#light-mode')
      .classList
      .add('mode-selected');

    document
      .querySelector('body')
      .classList
      .remove('dark-mode');
  }

  let mode = localStorage.getItem(LOCAL_VARIABLES.MODE);
  useDarkMode();
  // useLightMode();


  if(mode && mode === 'dark') {
    useDarkMode();
  } else {
    useLightMode();
  }

  let alpha = localStorage.getItem(LOCAL_VARIABLES.ALPHA);

  if(!alpha) {
    localStorage.setItem(LOCAL_VARIABLES.ALPHA, 0.0);
    useDarkMode();
    // useLightMode();
    
  }

  applyBrightness(); 

  document
    .querySelector('#settings')
    .addEventListener('click', () => {
      document
        .querySelector('#settings-block')
        .classList
        .toggle('hide');
    });

  document
    .querySelector('#light-mode')
    .addEventListener('click', useLightMode);

  document
    .querySelector('#dark-mode')
    .addEventListener('click', useDarkMode);

  document
    .querySelector('#down-brightness')
    .addEventListener('click', upBrightness);

  document
    .querySelector('#up-brightness')
    .addEventListener('click', downBrightness);
});


// ----------------> slideshow  


(function() {

  init(); //on page load - show first slide, hidethe rest

  function init() {

    parents = document.getElementsByClassName('slideshow-container');

    for (j = 0; j < parents.length; j++) {
      var slides = parents[j].getElementsByClassName("mySlides");
      var dots = parents[j].getElementsByClassName("dot");
      slides[0].classList.add('active-slide');
      dots[0].classList.add('active');
    }
  }

  dots = document.getElementsByClassName('dot'); //dots functionality

  for (i = 0; i < dots.length; i++) {

    dots[i].onclick = function() {

      slides = this.parentNode.parentNode.getElementsByClassName("mySlides");

      for (j = 0; j < this.parentNode.children.length; j++) {
        this.parentNode.children[j].classList.remove('active');
        slides[j].classList.remove('active-slide');
        if (this.parentNode.children[j] == this) {
          index = j;
        }
      }
      this.classList.add('active');
      slides[index].classList.add('active-slide');

    }
  }
//prev/next functionality

  links = document.querySelectorAll('.slideshow-container a');

  for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      current = this.parentNode;

      var slides = current.getElementsByClassName("mySlides");
      var dots = current.getElementsByClassName("dot");
      curr_slide = current.getElementsByClassName('active-slide')[0];
      curr_dot = current.getElementsByClassName('active')[0];
      curr_slide.classList.remove('active-slide');
      curr_dot.classList.remove('active');
      if (this.className == 'next') {

        if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
          curr_slide.nextElementSibling.classList.add('active-slide');
          curr_dot.nextElementSibling.classList.add('active');
        } else {
          slides[0].classList.add('active-slide');
          dots[0].classList.add('active');
        }

      }

      if (this.className == 'prev') {

        if (curr_slide.previousElementSibling) {
          curr_slide.previousElementSibling.classList.add('active-slide');
          curr_dot.previousElementSibling.classList.add('active');
        } else {
          slides[slides.length - 1].classList.add('active-slide');
          dots[slides.length - 1].classList.add('active');
        }

      }

    }

  }
})();
