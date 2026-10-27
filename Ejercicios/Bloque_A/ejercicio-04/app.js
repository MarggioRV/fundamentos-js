// 4. Entrada de dos numeros y calculo de la suma

// Entrada de datos
const entrada1 = prompt("Esc el 1er numero:"); // Prompt: Peticion al us
const entrada2 = prompt("Esc el 2do numero:");

// Desyuncion en caso de null
if (entrada1 === null || entrada2 === null) { // Compara valores sin convertir sus tipos
    console.error("Error: Valor null");
} else {
  
    // Eliminar espacios
    const sinEsp1 = entrada1.replaceAll(" ", "");
    const sinEsp2 = entrada2.replaceAll(" ", "");

    // ConversiÃ³n a nÃºmero
    const num1 = Number(sinEsp1);
    const num2 = Number(sinEsp2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) { // Por cosas que no so #s
        console.error("Error: No son # validos");
    } else {
        // Suma
        const suma = num1 + num2;
        // Imprimir rpta
        console.log(`La suma es: ${suma}`);        
    }
}

