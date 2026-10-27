/* 
Escribe una función que encuentre la palabra más larga de una frase. 
Usa split() y recorre el array con un bucle.	

Muestra la palabra y su longitud. Indica qué criterio aplicas si existe 
un empate. 
*/

// Entrada
const frase = prompt("Introduce una frase:");

// Función para hallar la palabra mas larga
function palabraMasLarga(frase) {
    const palabras = frase.trim().split(/\s+/); //Divide la frase en palabras (Y se le eliminar espacios)
    // Toma la 1era palabra como el inicio
    let mayor = palabras[0]; 

    // Recorre las palabras restantes
    for (let i = 1; i < palabras.length; i++) {
        // Actualiza la palabra más larga en el caso concreto x careacter
        if (palabras[i].length > mayor.length) {
            mayor = palabras[i];
        }
    }
    return mayor; 
}
console.log("Si hay empate, se conserva la primera más larga, puesto que la funcion esta e busqueda de una más larga para actulizar");


// Guardar actual palabra más larga
const rpta = palabraMasLarga(frase ?? "");

// impresion
console.log("Palabra más larga:", rpta);
console.log("Longitud:", rpta.length);;

