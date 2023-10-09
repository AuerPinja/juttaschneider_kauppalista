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
    var tuoteNimi = tuoteKentta.value.trim().toLowerCase(); // Poista mahdolliset tyhjät välit ja muuta pieniksi kirjaimiksi

    // Tarkistetaan, onko tuote Jutan listassa
    if (tuoteNimi === "juusto" || tuoteNimi === "juustoa" || tuoteNimi === "leipä" || tuoteNimi === "leipää" || tuoteNimi === "margariinia" || tuoteNimi === "maito") {
        var kauppalista = document.getElementById("kauppalista");
        var uusiTuote = document.createElement("li");
        uusiTuote.textContent = tuoteKentta.value;
        kauppalista.appendChild(uusiTuote);
        tuoteKentta.value = ""; // Putsataan tekstikenttä

        // Soita ääniclip halutulle tuotteelle
        var audioElementId = tuoteNimi === "juusto" || tuoteNimi === "juustoa" ? "juustoa" :
                             tuoteNimi === "leipä" || tuoteNimi === "leipää" ? "leipaa" :
                             tuoteNimi === "margariinia" ? "margariini" :
                             tuoteNimi === "maito" ? "maito" : "";

        if (audioElementId !== "") {
            var audio = document.getElementById(audioElementId);
            audio.play();
        }
    } else {
        var audio = document.getElementById("sinaolet");
        audio.play();
        alert("Tuote ei ole Jutan kauppalistalla. :(  Yritä uudelleen.");

        // sitä voi miettiä haluaako tämän kuulua joka kerta kun laittaa väärän tuotteen :unhinged:
        
    }
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