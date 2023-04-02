var numbClick = 0;
var elemToGo;

/* ----------- Scroll down: on click  ----------- */
$(document).ready(function() {
 	
  
  $('a[href*="#work"]').click(function(){
    
    var elemToGo = $(this).attr('href');
    var speed = 50;
    
    if(numbClick!=0){
      elemToGo += numbClick;
      prevElem = elemToGo;

       if(!$(elemToGo).length){ 
         elemToGo = "#work";
         numbClick=0; 
       }
    }
    numbClick++;
    $('html,body').animate(
    {
      scrollTop: $(elemToGo).offset().top
    },speed
    );
    return false;
  });

});


/* ----------- Scroll up: on click  ----------- */

function scrollUp() {
  numbClick--;
  elemToGo = numbClick;
  window.scrollBy(0, -1000);
}

 /* ----------- Back To Top (Scroll up) ----------- */


const backToTopButton = document.querySelector(".scroll-up");
backToTopButton.style.visibility = "visible";
let isBackToTopRendered = true;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if ( window.scrollY >= 7900) {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  } 
});


/* ----------- Scroll down  ----------- */

const scrollDownButton = document.querySelector(".scroll-down");
scrollDownButton.style.visibility = "visible";
let isScrollDownRendered = true;

let alterStyles2 = (isScrollDownRendered) => {
  scrollDownButton.style.visibility = isScrollDownRendered ? "visible" : "hidden";
  scrollDownButton.style.opacity = isScrollDownRendered ? 1 : 0;
  scrollDownButton.style.transform = isScrollDownRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY >=7900) {
    isScrollDownRendered = false;
    alterStyles2(isScrollDownRendered);
  }
});



/* ----------- Back to 0  ----------- */

const backto0 = document.querySelector(".back-to-0");
let isbackto0Rendered = false;

let alterStyles0 = (isbackto0Rendered) => {
  backto0.style.visibility = isbackto0Rendered ? "visible" : "hidden";
  backto0.style.opacity = isbackto0Rendered ? 1 : 0;
  backto0.style.transform = isbackto0Rendered? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 7900) {
    isbackto0Rendered = true;
    alterStyles0(isbackto0Rendered);
  } else if (window.scrollY <= 7900) {
    isbackto0Rendered = false;
    alterStyles0(isbackto0Rendered);

    backToTopButton.style.visibility = "visible";
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);

    scrollDownButton.style.visibility = "visible";
    isScrollDownRendered = true;
    alterStyles2(isScrollDownRendered);
  }
});

/*---------------------------------------- */

function showDigit(selector, digitClass) {
  let digitHTML = document.querySelector(selector);

  let digit = parseInt(digitClass[digitClass.length - 1]);
  let previusDigit = digit === 0 ? 9 : digit - 1;

  if(digitHTML.classList.contains(`digit-${previusDigit}`)) {
    digitHTML.classList.replace(`digit-${previusDigit}`, `digit-${digit}`);
  } else {
    digitHTML.classList.add(`digit-${digit}`);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateDigitalClock() {
  while(true) {
    await sleep(1000).then(() => {
      let now = new Date();

      let hour = now.getHours().toString();
      let minute = now.getMinutes().toString();

      if(hour.length === 1) {
        hour = `0${hour}`;
      }

      if(minute.length === 1) {
        minute = `0${minute}`;
      }

      let firstDigitHour = hour[0];
      let secondDigitHour = hour[1];

      let firstDigitMinute = minute[0];
      let secondDigitMinute = minute[1];

      showDigit('#hour .first-digit', `digit-${firstDigitHour}`);
      showDigit('#hour .second-digit', `digit-${secondDigitHour}`);

      showDigit('#minute .first-digit', `digit-${firstDigitMinute}`);
      showDigit('#minute .second-digit', `digit-${secondDigitMinute}`);
    });
  }
}

updateDigitalClock();