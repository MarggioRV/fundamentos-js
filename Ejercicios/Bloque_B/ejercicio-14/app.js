/* 
Crea una función que determine si una palabra es un palíndromo comparándola 
con su versión invertida.	

Normaliza mayúsculas y minúsculas. Prueba «reconocer» y otra palabra que no 
sea palíndroma. 
*/

// Entradada
const entrada = prompt("Esc lo correpondiente");

// La palabra es palidroma?
function esPalidroma(entrada) {
    const palabra = entrada.toLowerCase();
    const dividida = palabra.split("");
    // Invierte y vuelve a unir los caracteres
    const invertida = dividida.reverse().join(""); 
    // Comparar versiones.
    if (palabra === invertida) {
        return "Lo es"
    } else{
        return "No lo es "
    }
}

// Disyuncion + Llamada
if (entrada == null || entrada == "") {
    console.error("No se esc palabra alguna");
}
else{
    console.log(esPalidroma(entrada));
}
