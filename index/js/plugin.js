//splitting
$(function () {
   Splitting();
});

//simpleParallax
$(function () {
   var image = document.getElementsByClassName('aboutImgBox');
   new simpleParallax(image, {
      scale: 1.2,
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
   })
});

// mouse cursor
const cursor = curDot({
   easing: 5,
   diameter: 40,
   zIndex: 100,
   borderWidth: 2
});

cursor.over(".clickable", {
   scale: '1.4'
});
