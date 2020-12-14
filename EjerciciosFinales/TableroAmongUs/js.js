function coloresTablero() {
    var njugadores = document.getElementById("numJugadores").value;

    let div = document.getElementById("head")
    let principal = div.parentNode;
    principal.removeChild(div);
    document.getElementById("personajes").style.visibility = "visible";
    var ns = "";
    var js = "";

    for (i = 1; i <= njugadores; i++) {
        ns = i;
        js = "jugador" + ns;

        console.log(ns, js)
        document.getElementById(js).style.visibility = "visible";
    }
}

function Win() {
    let div = document.getElementById("personajes");
    let papa = div.parentNode;
    papa.removeChild(div);
    document.getElementById("personajes").style.visibility = "visible";
    let body = document.getElementById("body");
    body.style.backgroundColor = "black";
}

function Lose() {
    let div = document.getElementById("personajes");
    let papa = div.parentNode;
    papa.removeChild(div);
    document.getElementById("malvado").style.visibility = "visible";
}

function Warning() {
    alert("Seguro que quieres votar ese personaje??")
}