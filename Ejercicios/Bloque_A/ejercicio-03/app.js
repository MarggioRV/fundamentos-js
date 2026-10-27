/* 3. Objeto persona, propiedades anidadas y representaciÃ³n en Console */

const persona = {
    // Atributos normales
    nombre: "Aquiles",
    edad: 30,
    vivo: false,

    // Atributo Array
    intereses: ["romance", "kleos", "lucha"],

    // Objeto anidado
    lugarNac: {
        pais: "Grecia",
        ciudad: "Ftia"
    },

    // Metodo Intg
    cantar() {
        return `Canta la cÃ³lera de ${this.nombre}, aquel quien soy yo`;
    }
};

//Impresion x confirmacion
console.log("Objeto Persona:");
console.table(persona);
console.log("");
console.log("Datos por separado:");
// Formas Validas
// 1-
console.log("Nombre:", persona.nombre);
// 2-
console.log(`Edad: ${persona.edad}`); // Lo mismo que la anterior, pero siendo la forma moderna
// 3-
console.table(persona.lugarNac);
console.table(persona.intereses);
//Cantico
console.log(persona.cantar());









