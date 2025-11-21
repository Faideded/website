function showaboutme() {
     document.getElementById('aboutmepopup').style.visibility= 'visible';
     document.getElementById("abtmeexit").style.visibility= "visible";
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
        var button = document. getElementById("button1");
        button.disabled = false;
        var button = document. getElementById("button2");
        button.disabled = false;
}

