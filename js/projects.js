/*Size is  set in pixels... supports being written as: '250px' */
var magnifierSize = 450;
// var magnifierSize2 = 350;

/* How many times magnification of image on page. */
var magnification = 1.5;

function magnifier() {

  this.magnifyImg = function(ptr, magnification, magnifierSize) {

    // Check if the device is mobile
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    if (isMobile()) {
      var container = document.querySelector('.container');
      container.style.scrollSnapType = 'none';
      var sections = document.querySelectorAll('section');
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.scrollSnapAlign = 'none';
      }
    }
    var $pointer;
    if (typeof ptr == "string") {
      $pointer = $(ptr);
    } else if (typeof ptr == "object") {
      $pointer = ptr;
    }
    
    if(!($pointer.is('img'))) {
      return false;
    }

    magnification = +(magnification);

    $pointer.hover(function() {
    if (isMobile()) {
      return; // Hide the magnifier for mobile devices
    }

    if ($(this).hasClass("work__code") || $(this).hasClass("footer__social-image")) {
        return; // Exit the function, do nothing
        }
      $(this).css('cursor', 'none');
      $('.magnify').show();

      var width = $(this).width();
      var height = $(this).height();
      var src = $(this).attr('src');
      var imagePos = $(this).offset();
      var image = $(this);


      $('.magnify').css({
        'background-size': width * magnification + 'px ' + height * magnification + "px",
        'background-image': 'url("' + src + '")',
        'width': magnifierSize,
        'height': magnifierSize
      });

      //Setting a few more...
      var magnifyOffset = +($('.magnify').width() / 2);
      var rightSide = +(imagePos.left + $(this).width());
      var bottomSide = +(imagePos.top + $(this).height());

      $(document).mousemove(function(e) {
        if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
          $('.magnify').hide();
          $(document).unbind('mousemove');
        }
        var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
        $('.magnify').css({
          'left': e.pageX - magnifyOffset,
          'top': e.pageY - magnifyOffset,
          'background-position': backgroundPos
        });
      });
    }, function() {

    });
  };

  this.init = function() {
    $('body').prepend('<div class="magnify"></div>');
  }

  return this.init();
}

var magnify = new magnifier();

magnify.magnifyImg('img', magnification, magnifierSize);
