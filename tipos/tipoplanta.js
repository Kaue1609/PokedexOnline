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