let lista = [];
let count = 0;
let listaTulostettu = false

function nimiListalle() {
    if (count < 10) {
        let kysely = prompt("Anna nimi:");
        if (kysely.length === 0) {
            return;
        } else {
            lista.push(kysely);
            count++;
            nimiListalle();
        }
    } else if (!listaTulostettu) { 
        tulostaLista();
        listaTulostettu = true;
    }
}

function tulostaLista() {
    let uusiElementti = document.getElementById("nimiLista");
    lista.forEach(function(nimi) {
        let uusiRivi = document.createElement("li");
        uusiRivi.textContent = nimi;
        uusiElementti.appendChild(uusiRivi)
    })
}