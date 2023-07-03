function oi() {
    alert("Muito obrigado por visitar o nosso site! <3")
}

function notfinished() {
    alert("Em Construção")
}

function MostrarTipos() {
    let recolhe = document.getElementById("Recolher");

    if(recolhe.style.display == "none") {
        recolhe.style.display = "inline";
    }
    else {
        recolhe.style.display = "none"
    }
}
/*let tipos = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
const types = fetch(tipos)
.then(response => response.json())
.then(response => exibirTipos(response.types))

function exibirTipos(tipos) {
    let typebox = document.getElementsByClassName("typebox")
    for (let i = 0; i < tipos.length; i++) {

        const tipoEl = document.createElement('p')
        tipoEl.innerText = tipos[i].type.name
        typebox.append(tipoEl)
    }
} */

let tipos = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
const types = fetch(tipos)
    .then(response => response.json())
    .then(response => exibirTipos(response.types))

function exibirTipos(tipos) {
    for (let i = 0; i < tipos.length; i++) {

        const tipoEl = document.createElement('p')

        tipoEl.innerText = tipos[i].type.name

        document.body.appendChild(tipoEl)

    }
}