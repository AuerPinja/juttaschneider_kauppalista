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

// funktio lisää uuden tuotteen listalle 





function addTuote() {
    var tuoteKentta = document.getElementById("item");
    var tuoteNimi = tuoteKentta.value.trim(); // Poista mahdolliset tyhjät välit

    if (tuoteNimi !== "") {
        var kauppalista = document.getElementById("kauppalista");
        var uusiTuote = document.createElement("li");
        uusiTuote.textContent = tuoteNimi;
        kauppalista.appendChild(uusiTuote);
        tuoteKentta.value = ""; // Putsataan tekstikenttä
    }

    if (tuoteNimi.toLowerCase() === "juusto" || tuoteNimi.toLowerCase() === "juustoa") {
        var audio = document.getElementById("juustoa");
        audio.play();
    } else if (tuoteNimi.toLowerCase() === "leipä" || tuoteNimi.toLowerCase() === "leipää") {
        var audio = document.getElementById("leipaa");
        audio.play();
    }
    else if (tuoteNimi.toLowerCase() === "margariinia") {
        var audio = document.getElementById("margariini");
        audio.play();
    }
}
