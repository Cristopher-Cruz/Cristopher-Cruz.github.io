$(document).ready(function() {
  
  var currentSection = 0;
  var sectionPositions = [];
  
  // get positions of each section
  $('section').each(function() {
    sectionPositions.push($(this).offset().top);
  });
  
  // scroll down on click
  $('.scroll-down').click(function(e) {
    e.preventDefault();
    currentSection++;
    if (currentSection >= sectionPositions.length) {
      currentSection = 1;
    }
    $('html, body').animate({
      scrollTop: sectionPositions[currentSection]
    }, 30);
  });
  
  // scroll up on click
  $('.scroll-up').click(function(e) {
    e.preventDefault();
    currentSection--;
    if (currentSection < 0) {
      currentSection = 0;
    }
    $('html, body').animate({
      scrollTop: sectionPositions[currentSection]
    }, 30);
  });
  
});

 /* ----------- Back To Top (Scroll up) ----------- */

 if (window.innerWidth >= 1400) {
const backToTopButton = document.querySelector(".scroll-up");
backToTopButton.style.visibility = "visible";
let isBackToTopRendered = true;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= $('#footer').offset().top - window.innerHeight) {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  }
});
}


/* ----------- Scroll down  ----------- */
if (window.innerWidth >= 1400) {
const scrollDownButton = document.querySelector(".scroll-down");
scrollDownButton.style.visibility = "visible";
let isScrollDownRendered = true;

let alterStyles2 = (isScrollDownRendered) => {
  scrollDownButton.style.visibility = isScrollDownRendered ? "visible" : "hidden";
  scrollDownButton.style.opacity = isScrollDownRendered ? 1 : 0;
  scrollDownButton.style.transform = isScrollDownRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= $('#footer').offset().top - window.innerHeight) {
    isScrollDownRendered = false;
    alterStyles2(isScrollDownRendered);
  } else {
    isScrollDownRendered = true;
    alterStyles2(isScrollDownRendered);
  }
});
}



/* ----------- Back to 0  ----------- */
if (window.innerWidth >= 1400) {
const backto0 = document.querySelector(".back-to-0");
backto0.addEventListener("click", () => {
  $('html, body').animate({
    scrollTop: 0
  }, 100);

  currentSection = 0; // add this line
});
let isbackto0Rendered = false;

let alterStyles0 = (isbackto0Rendered) => {
  backto0.style.visibility = isbackto0Rendered ? "visible" : "hidden";
  backto0.style.opacity = isbackto0Rendered ? 1 : 0;
  backto0.style.transform = isbackto0Rendered? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  const footer = document.querySelector("#footer");
  const footerHeight = footer.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > windowHeight && scrollPosition + windowHeight >= document.body.offsetHeight - footerHeight && !isbackto0Rendered) {
  isbackto0Rendered = true;
  alterStyles0(isbackto0Rendered);
  } else if (scrollPosition <= windowHeight && isbackto0Rendered) {
  isbackto0Rendered = false;
  alterStyles0(isbackto0Rendered);
  }
  });
}



