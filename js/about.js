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