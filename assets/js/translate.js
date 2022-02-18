// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
var height = window.innerHeight; //Get inner height of window depending on user
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    // Do something with the scroll position
    var target = document.getElementById("target"); //The target is the Image on index.html

    percentScroll = 0.10; //Percentage of change
    deltaY = scrollPos*percentScroll;
    deltaOpacity = (height-scrollPos)/height;

    // Change this if you want it to fade faster
    target.style.opacity = deltaOpacity //Opacity changes when the user scrolls down
    target.style.transform = "translate3d(0px, "+`${deltaY}`+"px, 0px)"; //Transformation of the image, to give "perspective"
    //console.log("Changed! " + target.style.transform);
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});