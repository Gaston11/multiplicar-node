//requireds
const fs = require('fs');
const colors = require('colors');
//requireds

let listarTabla = (base, limite = 10) => {

    console.log('=============='.green);
    console.log(`tabla de ${base}`.red);
    console.log('=============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor ${base} no es número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${ i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.blue);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}