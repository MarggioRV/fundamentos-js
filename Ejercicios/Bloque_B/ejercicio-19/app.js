/* 
Crea una función que reciba un array de números y calcule su 
promedio mediante reduce().

Suma los elementos y divide por la longitud. Controla el caso 
de un array vacío. 
*/

// Valores iniciales
const calificaciones = [10, 5, 5, 4];

function calcPromedio(calificaciones) {
  // Sumar los elementos con reduce 
  return calificaciones.reduce((acumulador, notas) => acumulador + notas, 0) / calificaciones.length; // y dividir por la logitud
}

console.table(calificaciones);
console.log();
console.log("El promedio es:");
console.log(calcPromedio(calificaciones));



