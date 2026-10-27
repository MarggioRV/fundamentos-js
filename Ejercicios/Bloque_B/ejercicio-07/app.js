/* 
Escribe una función que reciba una palabra y cuente cuántas vocales contiene. 
Usa un bucle for e includes().

Convierte previamente a minúsculas para aceptar mayúsculas. Por ejemplo, 
«Murciélago» debe contar sus vocales sin importar las mayúsculas. 
*/

// Definir vocales
const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
// Entrada
const entrada = prompt("Esc una palabra:");
// Recibe palabra
const palabra = entrada.toLowerCase(); // Convertir en minusculas
// Inicializar contador
let contador = 0;

// Recorrer la palabra
for (let i = 0; i < palabra.length; i++) {
  // Comprobar si esta en la lista vocales
  if (vocales.includes(palabra[i])) {
    contador++;
  }
}
//   return contador;

// Imprimir
console.log(`Tu palabra es ${entrada}`);
console.log(`Se han contado ${contador} vocales`);
