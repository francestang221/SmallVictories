// image carousel

// Code adapted from Medium Blog Post:
// https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9

var index = 1;  // picture index
var timer;

function displayPictures(n){
  var pictures = document.getElementsByClassName("carousel picture");
  if (n > pictures.length) {index = 1}
  if (n < 1) {index = pictures.length}
  for (var i = 0; i < pictures.length; i++) {
      pictures[i].style.display = "none";
  }
  pictures[index-1].style.display = "block";
}

// forward and backward control
function carouselControl(n){
  clearInterval(timer);
  if (n < 0){
    displayPictures(index -= 1);
  } else {
   displayPictures(index += 1); 
  }

  if (n === -1){
    timer = setInterval(function(){carouselControl(n + 2)}, 2000);
  } else {
    timer = setInterval(function(){carouselControl(n + 1)}, 2000);
  }
}

window.addEventListener("load",function() {
    displayPictures(index);
    timer = setInterval(function(){carouselControl(1)}, 2000);
})

