/* 2. Array de 100 numeros aleatorios, console.table() y filtrado por intervalo */
const nums = [];

// Bucle para rellenar
for (let index = 0; index < 100; index++) {
    const cifra = Math.floor(Math.random() * 101); //Floor redondea hacia abajo el entero
    nums.push(cifra);
}
// Comprabacion 
console.table(nums);

// Rangos
const min = 20;
const max = 80;

// Filtro + Uso de rangos
const numsFiltrados = nums.filter(
    numero => numero >= min && numero <= max
)

// Impresion_rpta
console.log("# entre 20 y 80:");
console.table(numsFiltrados);
console.log("En total, se filtraron", numsFiltrados.length + "/" + nums.length);


