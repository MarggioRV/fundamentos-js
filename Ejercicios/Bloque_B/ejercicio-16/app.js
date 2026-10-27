/* 
Crea una función que convierta grados Celsius a Fahrenheit mediante:
F = (C × 9/5) + 32.	

Comprueba que 0 °C son 32 °F y 100 °C son 212 °F. 
*/

// const gradosCel = 0; 
//32
const gradosCel = 100;

function aFahrenheit(grados) {
    const rpta = (grados * 9 / 5) + 32; // reduce(), no
    return rpta;
}

console.log(aFahrenheit(gradosCel), "°F");