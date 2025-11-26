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
function leftarrowchange() {


}
/*not working start making*/

function showdownload(){
    document.getElementById("downloadpopup").classList.add("visible");
    var button = document.getElementById("button1");
    button.disabled = true;
    button = document.getElementById("button2");
    button.disabled = true;
}
function hidedDownload(){
    document.getElementById("downloadpopup").classList.remove("visible");
    var button = document.getElementById("button1");
    button.disabled = false;
    button = document.getElementById("button2");
    button.disabled = false;
}