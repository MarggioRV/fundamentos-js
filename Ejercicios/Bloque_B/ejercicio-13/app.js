/* 
Cuenta cuántas palabras contiene una frase introducida por el usuario utilizando split().	

Elimina espacios iniciales y finales y contempla varios espacios consecutivos. 
*/

// Entrada
const frase = prompt("Introduce una frase:");

// Funcion para contarPalabras
function contarPalabras(frase) {
    frase = frase.trim(); // Elimina los espacios iniciales y finales.

    if (frase === "") { // Si está vacía, no hay palabras.
        return 0; 
    }

    // Se toma como palabra
    const palabras = frase.split(/\s+/); // Divide por 1 o varios espacios.
    // Devuelve su cantidad.
    return palabras.length; 
}
// Imprimir la rpta
// Valor si no es string:  "" = ""; ?? = null o undefined 
console.log("Número de palabras:", contarPalabras(frase ?? "")); 