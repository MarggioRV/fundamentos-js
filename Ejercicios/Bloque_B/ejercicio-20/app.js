/* 
Crea una función que convierta una cadena primero a mayúsculas y después 
a minúsculas, mostrando ambos resultados.	

Utiliza toUpperCase() y toLowerCase(). Conserva también el texto original. 
*/

// Valor inicial
const cadenaOG = "Hola mundo"; // R: Sin corchete
// Copia_trabajo
const copiaCadena = cadenaOG; // No es necesario [...cadenaOG];

function mostrarMayusMinus(cadena) { // No es necesario ser especifico
    const minus = cadena.toUpperCase();
    const mayus = cadena.toLowerCase();

    // Retornar rpta
    return `En minuscula es "${mayus}", mientras en mayuscula "${minus}"`;
}

// Area de impresion

//Texto Origial
console.log(`La frase original era: ${cadenaOG}`);
//Texto modficado
console.log(mostrarMayusMinus(copiaCadena));


/* SIN COPIA: Al parecer las cadenas son inmutables */
// Valor inicial
// const cadenaOG = "Hola mundo";

// function mostrarMayusMinus(cadena) {
//     const mayus = cadena.toUpperCase();
//     const minus = cadena.toLowerCase();

//     return `En mayúsculas: ${mayus}, en minúsculas: ${minus}`;
// }

// // Área de impresión
// console.log("Texto original:", cadenaOG);
// console.log(mostrarMayusMinus(cadenaOG));
