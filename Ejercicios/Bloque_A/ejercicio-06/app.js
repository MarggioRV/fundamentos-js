/* 6. Obtener un numero desde un input del DOM y mostrar el resultado mediante un evento click */

// Seleccionar los elementos del HTML
const entrada = document.getElementById("entrando");
const btnEnviar = document.getElementById("enviar");
const rpta = document.getElementById("rpta");
const btnReset = document.getElementById("reset");
const casillaInicio = rpta.textContent; //Contenido inicial

// BotonEnviar escuchando
btnEnviar.addEventListener("click", function () {

    // Obtener, guardar y...
    const numero = entrada.value.trim(); // Eliminar espacios, no hay entrada null por el form

    // Limpiar los estados previos
    rpta.classList.remove("correcto", "error"); 

    // Disyuncion en caso de vacio
    if (numero === "") { // Debido a trim(), no hay null, sino una cadena vacia
        rpta.textContent = "Error: entrada vacia.";
        rpta.classList.add("error");
        console.error("Error: entrada vacia");
        return;
    }

    // Mostrar el resultado
    rpta.textContent = numero;

    // Aplicar el estilo de Ã©xito
    rpta.classList.add("correcto");
});


// BotonReset escuchando
btnReset.addEventListener('click', () => { // 2da Version
    // Regresion
    rpta.textContent = casillaInicio;
    // Quitar estilo
    rpta.classList.remove("correcto", "error"); 
});


