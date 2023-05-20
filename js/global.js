

$(document).ready(function() {
  var currentSection = 0;
  var sectionPositions = [];
  
  // get positions of each section
  $('section').each(function() {
    sectionPositions.push(this.offsetTop);
    console.log('Section position:', this.offsetTop);
  });

  console.log('Current Section:', currentSection);
  
  // Intersection Observer function : get current section dynamically
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var sectionIndex = $('section').index(entry.target);
        currentSection = sectionIndex;
        console.log('Current Section intersectionObserver:', currentSection);

        // Remove active class from all sideNav buttons
        $('li[id^="sidebutton"]').removeClass('active');
        
        // Add active class to the corresponding sideNav button
        $('#sidebutton' + currentSection).addClass('active');

      }
    });
  }, { threshold: 0.5 });
  
  $('section').each(function() {
    observer.observe(this);
  });

  // Add onClick function to sideNav buttons
  $('li[id^="sidebutton"]').on('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor element
    
    var buttonIndex = parseInt($(this).attr('id').replace('sidebutton', ''));
    currentSection = buttonIndex;
    console.log('Current Section:', currentSection);
    
    // Remove active class from all sideNav buttons
    $('li[id^="sidebutton"]').removeClass('active');
    
    // Add active class to the clicked sideNav button
    $(this).addClass('active');
    
    // Scroll to the associated section
    var section = $('section').eq(currentSection)[0];
    section.scrollIntoView({ behavior: 'smooth' });

  });


});



// ----------------> Highlight NavLink

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})


const body = document.body;


// ------------------------------------------------> Light/Dark mode

 // Get the checkbox element and the HTML body
 const checkbox = document.getElementById('slider');

// Set the theme based on the saved preference or default to dark mode
const savedTheme = localStorage.getItem('theme');
const theme = savedTheme ? savedTheme : 'dark-mode';
body.classList.toggle('dark-mode', theme === 'dark-mode');
body.classList.toggle('light-mode', theme === 'light-mode');
checkbox.checked = theme === 'dark-mode';

// Add an event listener to the checkbox to set the theme on change
checkbox.addEventListener('change', setTheme);

// Set the theme based on the checkbox state and save the preference
function setTheme() {
  const theme = checkbox.checked ? 'dark-mode' : 'light-mode';
  body.classList.toggle('dark-mode', theme === 'dark-mode');
  body.classList.toggle('light-mode', theme === 'light-mode');
  localStorage.setItem('theme', theme);
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


// Check if the device is mobile
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Remove scroll snap behavior on mobile devices
if (isMobile()) {
  var container = document.querySelector('.container');
  container.style.scrollSnapType = 'none';
  var sections = document.querySelectorAll('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.scrollSnapAlign = 'none';
  }
}




