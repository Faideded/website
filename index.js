function showaboutme() {
    document.getElementById('aboutmepopup').classList.add('visible');
    document.getElementById("abtmeexit").style.visibility= "visible";
    document.querySelector(".Aboutmebackgroundblur").style.display = "block";
    var button = document.getElementById("button1");
    button.disabled = true;
    button = document.getElementById("button2");
    button.disabled = true;
}

function homepagereload() {
    location = location;
}

function hideaboutme() {
    document.getElementById('aboutmepopup').classList.remove('visible');
    document.getElementById("abtmeexit").style.visibility= "hidden";
    document.querySelector(".Aboutmebackgroundblur").style.display = "none";
    var button = document.getElementById("button1");
    button.disabled = false;
    button = document.getElementById("button2");
    button.disabled = false;
}

/*not working start making*/
function rightarrowchange() {
    document.getElementById("maintext2").classList.add ("visible");
    document.getElementById("text2").style.visibility = "hidden";
    var button = document.getElementById("buttonright");
    button.disabled = true;
}

function leftarrowchange() {
    document.getElementById("maintext2").classList.remove ("visible");
    document.getElementById("text2").style.visibility = "visible";

}
/*not working start making*/

function showdownload(){
    document.getElementById("downloadpopup").classList.add("visible");
    document.getElementById("Downloadexit").style.visibility= "visible";
    document.querySelector(".Aboutmebackgroundblur").style.display = "block";
    var button = document.getElementById("button1");
    button.disabled = true;
    button = document.getElementById("button2");
    button.disabled = true;
}
function hideDownload(){
    document.getElementById("downloadpopup").classList.remove("visible");
    document.getElementById("Downloadexit").style.visibility= "hidden";
    document.querySelector(".Aboutmebackgroundblur").style.display = "none";
    var button = document.getElementById("button1");
    button.disabled = false;
    button = document.getElementById("button2");
    button.disabled = false;
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlidesfade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}

