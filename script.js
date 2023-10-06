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

/* Tässä koitettiin saada formin placeholder-tekstiä häviämään kun onFocus-event tapahtuu mutta ei saatu tätäkään toimimaan

let tekstikentta = document.getElementById("item");

tekstikentta.addEventListener("focus", hidePlaceholder());

function hidePlaceholder(){
    let tekstiPlaceHolder = document.getElementById("item");
    tekstiPlaceHolder.inner = "";
}
 */
