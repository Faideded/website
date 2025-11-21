function showaboutme() {
     document.getElementById('aboutmepopup').style.visibility= 'visible';
     document.getElementById("abtmeexit").style.visibility= "visible";
     document.querySelector(".Aboutmebackgroundblur").style.display = "block";
    var button = document. getElementById("button1");
    button.disabled = true;
    var button = document. getElementById("button2");
    button.disabled = true;
    }
function homepagereload() {
    location = location
}

function hideaboutme() {
    document.getElementById('aboutmepopup').style.visibility= 'hidden';
    document.getElementById("abtmeexit").style.visibility= "hidden";
    document.querySelector(".Aboutmebackgroundblur").style.display = "none";
    var button = document. getElementById("button1");
    button.disabled = false;
    var button = document. getElementById("button2");
    button.disabled = false;
}

