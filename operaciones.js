const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    citas.push({ nombre, edad, animal, color, enfermedad });
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log("Cita registrada exitosamente.");
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log("Citas registradas:");
    citas.forEach((cita, index) => {
        console.log(`${index + 1}. ${cita.nombre}, ${cita.edad}, ${cita.animal}, ${cita.color}, ${cita.enfermedad}`);
    });
};


module.exports = { registrar, leer };
