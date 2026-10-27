/* 
Crea una función que encuentre el número más grande de un array 
utilizando Math.max() y el operador de expansión ....	

Prueba también un array formado por números negativos. 
*/

const lista1 = [100, 2, 30, 4, 5];
const lista2 = [-8, 7, 6, -50, -4];

function numMayor(numeros) {
    // El operador '...' expande el array.
    // Aquello para poder pasar sus argumentos de forma individual
    return Math.max(...numeros); // De normal, obtiene el mayor de la lista
}

// Prueba con números positivos
console.log(numMayor(lista1));

// Prueba con números negativos
console.log(numMayor(lista2));
