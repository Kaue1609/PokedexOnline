function oi() {
    alert("Muito obrigado por visitar o nosso site! <3")
}

let url = "https://pokeapi.co/api/v2/pokemon/bulbasaur"
fetch(url)
.then(response => response.json())
.then(response => console.log(response))

function exibir(types) {
    console.log(types)
    let types = types[0].type
    console.log(type)
}
function seetypes(){
}