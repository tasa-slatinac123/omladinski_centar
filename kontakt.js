function posaljitePoruku() {
    // Uzimanje vrednosti iz forme
    var ime = document.getElementById('ime').value;
    var email = document.getElementById('email').value;
    var tema = document.getElementById('tema').value;
    var poruka = document.getElementById('poruka').value;

    // Provera da li su sva polja popunjena
    if (ime === "" || email === "" || tema === "" || poruka === "") {
        alert("Molimo popunite sva polja.");
        return;
    }

    // Validacija email adrese (jednostavna provera)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Unesite validnu e-mail adresu.");
        return;
    }

    // Ako su svi podaci ispravni, prikazujemo poruku o uspehu
    document.getElementById('kontakt-forma').reset(); // Resetovanje forme
    document.getElementById('poruka-uspesno').style.display = 'block';
    document.getElementById('poruka-greska').style.display = 'none';
   
    // Ovdje možete dodati funkcionalnost za slanje podataka na server (npr. putem AJAX-a)
    console.log("Poruka poslana: ", ime, email, tema, poruka); // Samo za testiranje
}