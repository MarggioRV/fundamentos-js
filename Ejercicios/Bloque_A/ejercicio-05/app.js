/* 5. Determinar si un numero es par o impar mediante el operador % */

// Entrada
const entrada = prompt("Esc un #:");

// Logica

// Limpiar datos de Entrada
const numLimpio = limpiarEntrada(entrada);
//Disyuncion si es valido
if (esValido(numLimpio)) {
    // Confirmacion por Impresion
    console.log(`Elegiste: ${numLimpio}`);
    // LLamado a esPar
    esPar(numLimpio)
} else {
    console.error("No era valido");
}


// Funciones auxiliares

/* Limpiar entrada */
function limpiarEntrada(entrada) {
    if (entrada === null) {
        console.error("Error: Valor null");
        return null;
    } else {
        const num = Number(entrada.replaceAll(" ", ""));
        return num;
    }
}


/* Es valido? */
export function esValido(numLimpio) {
    // Devuelve true si ambos se cumplen
    return Number.isFinite(numLimpio) && Number.isInteger(numLimpio);
}

/* Es par? */
function esPar(numLimpio) {
    if (numLimpio % 2 === 0) {
        console.log("Es par");
    } else {
        console.log("No es par");
    }
}

