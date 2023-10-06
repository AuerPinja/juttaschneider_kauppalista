/* Koitettiin sählätä typewriter effectin kanssa javascriptillä, ei saatu toimimaan

var typeWriterValue = 0;
var typeWriterText = 'Mitä sinä tarvitset?';
var speed = 50;

if (typeWriterValue < typeWriterText.length) {
    document.querySelectorAll("h1")[0].innerHTML = typeWriterText.charAt(typeWriterValue);
    typeWriterValue++;
    setTimeout(typeWriter, speed);
    item.style.fontFamily = "Courier";
}
*/

let tekstikentta = document.querySelector("#item");

tekstikentta.addEventListener("focus", function(){hidePlaceholder()});

function hidePlaceholder(){
    let tekstiPlaceHolder = document.querySelector("#item");
    tekstiPlaceHolder.placeholder = "";
}

