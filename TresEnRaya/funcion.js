var img = "https://i.imgur.com/1D73wcV.jpg";
var turno = 1;
var arreglo = new Array();
var jug1 = 0;
var jug2 = 0;

for (i = 0; i <= 8; i++) {
  arreglo[i] = -1;
}

function box(pos) {
  if (arreglo[pos] == -1) {
    if (turno == 1) {
      if (img == "https://i.imgur.com/1D73wcV.jpg") {
        document.getElementById("c" + pos).src = img;
        arreglo[pos] = 1;
        turno = 2;
        img = "https://i.imgur.com/5MCn3Ed.jpg";
      }
    } else if (turno == 2) {
      if (img == "https://i.imgur.com/5MCn3Ed.jpg") {
        document.getElementById("c" + pos).src = img;
        arreglo[pos] = 0;
        turno = 1;
        img = "https://i.imgur.com/1D73wcV.jpg";
      }
    }
  } else {
    alert("Posicion ocupada!");
  }

  if (arreglo[0] == 1 && arreglo[1] == 1 && arreglo[2] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[0] == 0 && arreglo[1] == 0 && arreglo[2] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[3] == 1 && arreglo[4] == 1 && arreglo[5] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[3] == 0 && arreglo[4] == 0 && arreglo[5] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[6] == 1 && arreglo[7] == 1 && arreglo[8] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[6] == 0 && arreglo[7] == 0 && arreglo[8] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[0] == 1 && arreglo[3] == 1 && arreglo[6] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[0] == 0 && arreglo[3] == 0 && arreglo[6] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[1] == 1 && arreglo[4] == 1 && arreglo[7] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[1] == 0 && arreglo[4] == 0 && arreglo[7] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[2] == 1 && arreglo[5] == 1 && arreglo[8] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[2] == 0 && arreglo[5] == 0 && arreglo[8] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[0] == 1 && arreglo[4] == 1 && arreglo[8] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[0] == 0 && arreglo[4] == 0 && arreglo[8] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }

  if (arreglo[2] == 1 && arreglo[4] == 1 && arreglo[6] == 1) {
    alert("gano X");
    jug1 = jug1 + 1;
    reiniciar();
  }

  if (arreglo[2] == 0 && arreglo[4] == 0 && arreglo[6] == 0) {
    alert("gano O");
    jug2 = jug2 + 1;
    reiniciar();
  }
}

function reiniciar() {
  document.getElementById("reset");

  for (i = 0; i <= 8; i++) {
    document.getElementById("c" + i).src = "https://i.imgur.com/OfIBxfJ.jpeg";
  }

  for (i = 0; i <= 8; i++) {
    arreglo[i] = -1;
  }
}
