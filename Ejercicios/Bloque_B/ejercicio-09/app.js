/* 
Escribe una función que reciba una cadena y la devuelva invertida usando:
    split(), reverse() y join().	
Ejemplo: «JavaScript» → «tpircSavaJ». Muestra cadena original y resultado. 
*/

// Entradada
// const palabra = prompt("Esc lo correpondiente");
const palabra = ("tonto"); 

// Fraccionar
console.log("Fracionada:");
const dividida = palabra.split(""); // cadena.split("")
// Imprimir para comprobar division
console.log(dividida)

// Invertir
console.log("Invertidad:");
const invertida = dividida.reverse(); // array.reverse()
// Imprimir para comprobar inversion
console.log(invertida)

// Invertir
console.log("Unida:");
const unida = invertida.join(); // array.join()
// Imprimir para comprobar union
console.log(unida);

// Resultado Final
const palabraFinal = invertida.join(""); // Elimina intermediarios
// Imprimir
console.log("Conclusion:");
console.log(`Tu palabra era ${palabra}, que invertida es ${palabraFinal}`);