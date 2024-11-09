// Funkcija za prikazivanje ili skrivanje detalja o poslu
function prikaziDetalje(id) {
    var detaljiDiv = document.getElementById(id);
    if (detaljiDiv.style.display === 'none') {
        detaljiDiv.style.display = 'block';
    } else {
        detaljiDiv.style.display = 'none';
    }
}

// Funkcija za prikazivanje forme za unos novog posla
function dodajPosao() {
    var forma = document.getElementById('novi-posao-forma');
    if (forma.style.display === 'none') {
        forma.style.display = 'block';
    } else {
        forma.style.display = 'none';
    }
}

// Funkcija za dodavanje novog posla u listu (trenutno prikazivanje u konzoli)
function sacuvajPosao() {
    var naziv = document.getElementById('naziv-posla').value;
    var opis = document.getElementById('opis-posla').value;
   
    if (naziv && opis) {
        console.log("Novi posao dodan: " + naziv + " - " + opis);
        alert("Novi posao je uspešno dodan!");
       
        // Ovdje možemo dodati logiku za unos podataka u bazu podataka kasnije
        // Na primer, slanje podataka na server putem AJAX-a
       
        // Resetovanje forme
        document.getElementById('posao-forma').reset();
        dodajPosao(); // Zatvaranje forme
    } else {
        alert("Molimo popunite sve podatke.");
    }
}