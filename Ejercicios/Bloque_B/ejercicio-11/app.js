/* 
Genera 100 números enteros aleatorios entre 1 y 20 y cuenta  cuántas veces aparece cada número. 
Muestra únicamente los que hayan aparecido al menos una vez.	

Usa un array u objeto de frecuencias. La suma de todas las frecuencias debe ser 100. 
*/

// Formula: Math.floor(Math.random() * (max - min + 1)) + min;
// Simplificado: Math.floor(Math.random() * x) + 1;

// Array Frecuencias
/* En caso de salir 7 -> frecuencias[7]++; -> Entonces, la posicion vale 1, y si sale de nuevo, 2 */
const frecuencias = Array(21).fill(0); // Array donde todas las posiciones contienen inicialmente 0.

// Array vacio a la espera
const numeros = [];

// Va rellenando array numeros con 100 #s
// Entre 1-20
for (let i = 0; i < 100; i++) {
    const numero = Math.floor(Math.random() * 20) + 1;
    numeros.push(numero);
}
// Imprimir array recien llenado x comprobar
// console.table(numeros);
// Imprimir cantidad total de #s generados
console.log("Total generado:", numeros.length);
console.log("");

// Recorrer los números y contar cuántas veces aparece cada uno.
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]; // Obtener el # actual
    frecuencias[numero]++; // Acumular contador
}

// Area_Frecuencias
console.log("Frecuencias:");

// For Recorrer del 1 al 20, ambos incluidos.
for (let i = 1; i <= 20; i++) { // Mayor que 0, 20 cuenta
    if (frecuencias[i] > 0) { // Se toma sololos deseados (+0)
        console.log(`Número ${i}: ${frecuencias[i]} veces`);
    }
}

// Inicializar contador
let contadorTotal = 0;

// For para comprobar la suma de las frecuencas sea = 100
for (let i = 1; i <= 20; i++) { 
    contadorTotal += frecuencias[i]; // Añadir cada frecuencia como individuo al total.
}
// Imprimir datos de la comprabacion
console.log("Total de frecuencias:", contadorTotal);
