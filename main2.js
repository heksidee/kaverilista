let lista = []

function lisääKaveri() {
    let kaveriNimi = document.getElementById("knimi").value;
    if (kaveriNimi.length > 0) {
        lista.push(kaveriNimi);
        päivitäLista();
        document.getElementById("knimi").value = "";
    }
}

function poistaKaveri() {
    let kaveriNimi = document.getElementById("knimi").value;
    if (kaveriNimi.length > 0);
        let indeksi = lista.indexOf(kaveriNimi);
        if (indeksi !== -1) {
            lista.splice(indeksi, 1);
            päivitäLista();
            document.getElementById("knimi").value = "";
    }
}

function päivitäLista() {
    let uusiElementti = document.getElementById("lista");
    uusiElementti.innerHTML = "";
    lista.forEach(function(nimi) {
        let uusiRivi = document.createElement("li");
        uusiRivi.textContent = nimi;
        uusiElementti.appendChild(uusiRivi)
    });
}

function järjestäKaverit() {
    lista.sort();
    päivitäLista();
}