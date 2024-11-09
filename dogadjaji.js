function prikaziDetalje(id) {
    var detaljiDiv = document.getElementById(id);
    if (detaljiDiv.style.display === 'none') {
        detaljiDiv.style.display = 'block';
    } else {
        detaljiDiv.style.display = 'none';
    }
}