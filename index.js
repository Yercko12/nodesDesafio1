const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === "registrar") {
    const [ , nombre, edad, animal, color, enfermedad ] = argumentos;
    registrar(nombre, edad, animal, color, enfermedad);
}

if (operacion === "leer") {
    leer();
}
