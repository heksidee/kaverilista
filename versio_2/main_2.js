let lomake = document.forms['formNewItem'];
lomake.addEventListener('submit', uusiListaElementti)

function uusiListaElementti(event){

event.preventDefault()

    console.log("Luodaan uusi elementti");
    let elementinNimi = document.querySelector('#main input[type="text"]').value;

    if(elementinNimi.length < 1) {
        alert('Pitää antaa nimi!');
        return;
    }

    let uusiElementti = document.createElement("li")
    let uusiElementtiTeksti = document.createTextNode(elementinNimi)
    uusiElementti.appendChild(uusiElementtiTeksti)
    uusiElementti.className ="list-item"

    console.log(uusiElementti);

    document.querySelector("#ItemList").appendChild(uusiElementti)
}