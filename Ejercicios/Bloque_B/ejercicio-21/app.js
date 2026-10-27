/* 
Crea una función que reciba un array de números y un valor, y 
devuelva un nuevo array con los números mayores que ese valor. 
Usa filter().	

Muestra el array original, el valor límite y el resultado. 
Los números iguales al límite no se incluyen. 
*/

// Valores iniciales
const numeros = [3, 8, 10, 5, 12, 7];
const limite = 8;

// Función
function filtrarMayores(numeros, limite) {
    // Crear un nuevo array con los números mayores que el límite.
    const filtrados = numeros.filter(numero => numero > limite);
    return filtrados;
}

// Área de impresión
console.log("");
console.log("Array original:");
console.table(numeros);
console.log("");
console.log("Valor límite:");
console.table(limite)
console.log("");
console.log("Array resultante:");
console.table(filtrarMayores(numeros, limite));

