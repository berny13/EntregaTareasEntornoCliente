function getDay(diasSemana) {
  var diasSemana = [ 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
  var semana = new Date(diasSemana);
  return diasSemana[semana.getDay()];
}
