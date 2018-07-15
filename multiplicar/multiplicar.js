/**
 * requireds
 */

const fs = require('fs');

const colors = require('/home/juanvargas2096/Documents/node/03-bases-node/node_modules/colors');
//const colors = require('./03-bases-node/node_modules/colors');

let listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('===================='.green);
    console.log(` tabla del ${base} `.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(data);
}



crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });




    });
}

module.exports = {
    crearArchivo,
    listarTabla
}