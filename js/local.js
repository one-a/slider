$(function(){
  var count = $('.slider li').length;
  var liWidth = $('.slider li').width();
  var width = liWidth * count;

  var interval = 3000;
  var duration = 500;
  var delay = 0;

  $('.slider').css('width', liWidth+40);
  $('.slider ul').css('width', width);

  var autoSlider;
  var startSlider = function() {
    autoSlider = setTimeout(function() {
      $('.slider li:first').delay(delay).animate({'marginLeft': '-='+ (liWidth)},{
        duration: duration,
        complete: function() {
          $('.slider li:first').appendTo('.slider ul').removeAttr('style');
        }
      });
      startSlider();
    }, interval);
  };

  var stopSlider = function() {
    console.log('stop');
    clearTimeout(autoSlider);
  };

  $('.slider_next').on('click', function() {
    stopSlider();
    $('.slider li:first').delay(delay).animate({'marginLeft': '-='+ (liWidth)},{
      duration: duration,
      complete: function() {
        $(this).queue([]);
        $(this).stop();
        $('.slider li:first').appendTo('.slider ul').removeAttr('style');
      }
    });
    startSlider();
  });

  $('.slider_prev').on('click', function() {
    stopSlider();
    $('.slider ul li:last-child').prependTo('.slider ul').css('margin-left', '-' + liWidth + 'px');
    $('.slider li:first-child').delay(delay).animate({'marginLeft': '+='+ (liWidth)},{
      duration: duration,
      complete: function() {
        $(this).queue([]);
        $(this).stop();
        $(this).removeAttr('style');
      }
    });
    startSlider();
  });

  startSlider();

});
