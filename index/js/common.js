// f5 when window resize
// window.addEventListener('resize', function () {
//    location.reload();
// });

// Ban '#' click jump
$(document).on('click', 'a[href="#"]', function (e) {
   e.preventDefault();
});

//header hidden
$(function () {
   var prevScrollTop = 0;
   $(window).scroll(function () {
      var nowScrollTop = $(this).scrollTop();

      if (nowScrollTop > prevScrollTop) {
         $('header').addClass('active');
      } else {
         $('header').removeClass('active');
      }
      prevScrollTop = nowScrollTop;
   });
});

//gnb active
$(function () {
   $('.gnb ul').mouseenter(function () {
      $(this).addClass('active');
   });
   $('.gnb ul').mouseleave(function () {
      $(this).removeClass('active');
   });
});

//gnb bg
$(function () {
   $(".gnb ul li a").mouseenter(function () {
      var bgPosition = $("#gnb-background").css("background-position");
      var newX = parseInt(bgPosition.split(" ")[0]);
      var newY = parseInt(bgPosition.split(" ")[1]) - 250;

      $("#gnb-background").css("background-position", newX + "px " + newY + "px");
   });
   $(".gnb ul li a").mouseleave(function () {
      var bgPosition = $("#gnb-background").css("background-position");
      var newX = parseInt(bgPosition.split(" ")[0]);
      var newY = parseInt(bgPosition.split(" ")[1]) + 250;

      $("#gnb-background").css("background-position", newX + "px " + newY + "px");
   });
});

// menu open and close
$(function () {
   $('.menuOpen').on('click', function () {
      $('.gnb').addClass('on');
      $('body').css('overflow', 'hidden');
      $('.wrap').delay(0).animate({ opacity: 0 }, 500);
      $('#gnb-background').delay(500).animate({ opacity: 1 }, 500);
   });

   $('.close').on('click', function () {
      $('.gnb').removeClass('on');
      $('body').css('overflow', 'auto');
      $('.wrap').delay(500).animate({ opacity: 1 }, 500);
      $('#gnb-background').delay(0).animate({ opacity: 0 }, 500);
   });
});

//topbtn
$(function () {
   $('.topBtn').on('click', function () {
      ScrollTrigger.getAll().forEach(trigger => trigger.disable());

      let top = $('body').offset().top;
      $('html, body').animate({ scrollTop: (top) }, 1500, function () {
         ScrollTrigger.getAll().forEach(trigger => trigger.enable());
      });
   });
});