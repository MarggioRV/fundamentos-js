/* 
Ordena un array de números de menor a mayor utilizando sort() 
con una función de comparación.	No uses sort() sin comparación 
numérica. 
    
Prueba con valores como 2, 10 y 100. 
*/

//Valor original
const numDesorden = [100, 5, 3, 20, 4];

//USANDO EL ORIGINAL
// Valores
const numOrden1 = numDesorden.slice().sort((a, b) => a - b); // Sin esto, lo ordena como texto

// Área de impresión
console.log(numDesorden); 
console.log(numOrden1);    

//USANDO LA COPIA
// Valores
const copiaDesorden = [...numDesorden];
const numOrden2 = copiaDesorden.sort((a, b) => a - b);

// Área de impresión
console.log(numDesorden); 
console.log(numOrden2);    