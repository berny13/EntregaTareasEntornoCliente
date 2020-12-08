fecha = prompt("Introduzca fecha de nacimiento(YYYY-mm-dd): ");
var msegMinuto = 1000 * 60;
var msegHora = msegMinuto * 60;
var msegDia = msegHora * 24;

var nacimiento = new Date(fecha)
var  hoy = new Date()

var tiempo = hoy - nacimiento

//calcular días 
var dias = Math.floor(tiempo / msegDia)
tiempo = tiempo - (dias * msegDia)

//calcula horas
var horas = Math.floor(tiempo / msegHora)
tiempo = tiempo - (horas * msegHora)

var minutos = Math.floor(tiempo /msegMinuto)
tiempo = tiempo - (minutos * msegMinuto)

console.log("Han pasado " + dias + " días, " + horas +" horas, y "+  minutos + "minutos desde que naciste.")
document.write("<h1>Han pasado " + dias + " días, " + horas +" horas, y "+  minutos + "minutos desde que naciste.</h1>");