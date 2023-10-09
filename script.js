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
    var tuoteNimi = tuoteKentta.value.trim().toLowerCase();
    var jutanLista = ["maitoa", "maito", "juustoa", "margariinia", "leipää", "leipaa", "jogurttia", "jugurttia", "omena", "suola"];

    if (jutanLista.includes(tuoteNimi)) {
        var kauppalista = document.getElementById("kauppalista");
        var uusiTuote = document.createElement("li");

        // Lisää checkbox
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        uusiTuote.appendChild(checkbox);

        // Lisää tuotteen nimi
        var tuoteTeksti = document.createTextNode(tuoteKentta.value);
        uusiTuote.appendChild(tuoteTeksti);

        kauppalista.appendChild(uusiTuote);
        tuoteKentta.value = "";

        //tehdään ehtolauseet käyttäen ternary operatoraattoria:
        // jos tuotenimi x niin -> audioelementId on x
        
        var audioElementId = tuoteNimi === "juusto" || tuoteNimi === "juustoa" ? "juustoa" :
                             tuoteNimi === "leipä" || tuoteNimi === "leipää" ? "leipaa" :
                             tuoteNimi === "suola" || tuoteNimi === "suolaa" ? "suola" :
                             tuoteNimi === "jogurttia" || tuoteNimi === "jugurttia" ? "tavallista_jogurttia" :
                             tuoteNimi === "margariinia" ? "margariini" :
                             tuoteNimi === "omena" ? "omena" :
                             tuoteNimi === "maito" ? "maitoa" : "";

        if (audioElementId !== "") {
            var audio = document.getElementById(audioElementId);
            audio.play();
        }
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                uusiTuote.style.textDecoration = "line-through";
            } else {
                uusiTuote.style.textDecoration = "none";
            }
        });
    } else {
        var audio = document.getElementById("sinaolet");
        audio.play();
        alert("Tuote ei ole Jutan kauppalistalla. :(  Yritä uudelleen.");
    }
}


function katsoVideo(){

}

//tällä tavalla koitin myös mutta piti muuttaa suunnitelmaa

        /* if (tuoteNimi.toLowerCase() === "juusto" || tuoteNimi.toLowerCase() === "juustoa") {
        var audio = document.getElementById("juustoa");
        audio.play();
    }   else if (tuoteNimi.toLowerCase() === "leipä" || tuoteNimi.toLowerCase() === "leipää") {
        var audio = document.getElementById("leipaa");
        audio.play();
    }
    else if (tuoteNimi.toLowerCase() === "margariinia") {
        var audio = document.getElementById("margariini");
        audio.play();
    }
    else if (tuoteNimi.toLowerCase() === "maito") {
        var audio = document.getElementById("maito");
        audio.play();
    } 
    
    */