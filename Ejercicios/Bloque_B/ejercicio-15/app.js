/* 
Muestra todos los números primos comprendidos entre 1 y un número dado 
por el usuario. Crea la función esPrimo(num).	

Recuerda que 1 no es primo. Prueba, por ejemplo, 
con límite 20: deben aparecer 2, 3, 5, 7, 11, 13, 17 y 19. 
*/

// Entrada
let entrada; 

alert("Solo se admiten # enteros o se redondean hacia abajo. La respuesta estará en la consola");

do {
    entrada = prompt("Esc el # max");

} while (isNaN(entrada) || entrada == "");


// Interpretar la entrada
const max = Math.floor(entrada);

// Muestreo
console.log("Números primos:");

// Recorrer los números y mostrar los primos
for (let i = 1; i <= max; i++) { // Recorre desde el uno hasta max
    if (esPrimo(i)) { // Llaamda a comprobacion
        console.log(i); // En cuyo caso, se lanza
    }
}

// Funcion aux
function esPrimo(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false; // Descarta # pares distintos a 2
  
// Comprueba posibles divisores impares hasta la raíz cuadrada de n.
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false; // Si la división es exacta, no es primo.
  }
  return true;
}
