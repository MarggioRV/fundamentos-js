/* 1. Variables de varios tipos, tipos de datos y métodos de Console */
// Const, invariables. Let, mutables y estacionales
const texto = "Hola Mundo";
const num = 26;
const boooleano = true;
const nulo = null;
const noDefinido = undefined; //Sin definir, bloqueda a ese moodo, usada para simulaciones
let sinDedinir; //Sin utilizar, flexible
let textoVacio = ""; //String, inicialmente, vacio
// Array Vector, normal
const array = [10, 20, 30];
// Array Bidereccional
const matriz = [
  [1, 2, 3], // Fila 0
  [4, 5, 6], // Fila 1
  [7, 8, 9]  // Fila 2
];
// Objeto
const objeto = { 
    nombre: "Ana",
     edad: 20 
};

//Impresiones x consola
console.log("Texto:", texto, typeof texto);
console.log("");
console.log(num, num, typeof num);
console.log("");
console.log("Booleano:", boooleano, typeof boooleano);
console.log("");
console.log("Nulo:", nulo, typeof nulo);
console.log("");
console.log("Sin definir:", noDefinido, typeof noDefinido); //Es diferente "," que "+"
console.log("");
console.log("Vector normal");
console.table(array);
console.log("");
console.log("Objeto");
console.log(objeto);
console.log("");
console.info("Info_ejercicio");
console.log("");
console.debug("Mensaje_depuración");
console.log("");
/* console.error("Error");  *///Lanza delineado_error
console.log("");
console.log("SMS en caso de error:");
console.assert(boooleano, texto);
console.log("");
alert("Error: " + texto);

