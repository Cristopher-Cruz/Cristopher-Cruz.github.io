// ----------------> Highlight NavLink

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})

// ----------------> Light/Dark mode

// Get the checkbox element and the HTML body
const checkbox = document.getElementById('slider');
const body = document.body;

// Check the saved theme preference, if any
const theme = localStorage.getItem('theme') || 'dark-mode';
if (theme) {
  body.classList.add(theme);
  checkbox.checked = theme === 'dark-mode';
}

// Set the theme based on the checkbox state and save the preference
function setTheme() {
  body.classList.toggle('dark-mode', checkbox.checked);
  body.classList.toggle('light-mode', !checkbox.checked);
  localStorage.setItem('theme', checkbox.checked ? 'dark-mode' : 'light-mode');
}

// Add an event listener to the checkbox to set the theme on change
checkbox.addEventListener('change', setTheme);

// Set the theme on page load
setTheme();




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
