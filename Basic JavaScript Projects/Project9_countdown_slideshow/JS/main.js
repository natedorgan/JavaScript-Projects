function countdown() {
    var seconds = document.getElementById("seconds").value;                                    /*sets variable seconds to the input provided in the browser*/

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout (tick, 1000);                                                    
        if (seconds == -1) {                                                                 /*simulates ticking down of a timer by decreasing the value of the variable "seconds" by 1 each second*/
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);                                                   /*sets default slide and calls the showSlides function to display the current slide*/

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {                                               /*displays the given slide*/
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}