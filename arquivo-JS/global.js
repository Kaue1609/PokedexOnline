function oi() {
    alert("Muito obrigado por visitar o nosso site! Esperamos que tenho gostado <3")
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