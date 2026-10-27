/* 
Crea una función azar(min, max) que genere un entero aleatorio dentro de un intervalo; 
por ejemplo, azar(-5, 10).	
Aclara si ambos límites están incluidos. Ejecuta varias pruebas y confirma que ningún 
resultado queda fuera del intervalo. 
*/

/* 
Formula Math ramdom entero 
// Rangos superior
// Floor redondea hacia abajo el entero
Math.floor(Math.random() * 101); 
*/

// Recibir entradas
alert("Solo se admiten # enteros o se redondean hacia abajo. La respuesta estará en la consola");
const entrada1 = prompt("Esc el # max");
const entrada2 = prompt("Esc el # min");

// Interpretar entradas como min y max
let max = Math.floor(entrada1);
const min = Math.floor(entrada2);

// Confirmar valores del rango
console.log(`El rango elegido es de ${min}-${max}`);

// Funcion
function Azar(max, min) {
    const rpta = Math.floor(Math.random() * (max - min + 1) + min)
    return rpta;
}

//Imprimpir rpta
console.log("La rpta es " + Azar(max, min));
