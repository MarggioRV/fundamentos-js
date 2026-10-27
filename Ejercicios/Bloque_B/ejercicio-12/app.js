/* Crea una función que reciba un array de números y devuelva otro que 
contenga solamente los pares. 

Usa filter() y %. Muestra el array original y el filtrado para poder 
compararlos. */

// Valores inciales_array
const numsBrutos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Funcion para filtrar
function soloPares(numsBrutos) {
    return numsBrutos.filter(num => num % 2 === 0); //filter + condicion integrada
}

console.log(soloPares(numsBrutos));
//Comparacion
console.log("");
console.log("Comparacion");
console.log("");
console.log("OG:");
console.table(numsBrutos);
console.log("");
console.log("Numeros filtrados:");
console.table(soloPares(numsBrutos))