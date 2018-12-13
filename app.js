const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(error => console.log(error));

        break;

    default:
        console.log('no existe comando');

}

let argv2 = process.argv; // path de las ubicaciones node y app
//let parametro = argv[2]; // para agarrar el segundo parametro
// el 0 es el path de node
// el 1 es el path de app
// el 2 parametro que ingreso

//console.log(argv.base);

//let base = parametro.split('=')[1];
//el .split('=') convierte el string en un arreglo
// los [] es la posicion del array
// la app se ejecuta con node app --base=4