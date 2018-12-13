const opciones = {
    base: {
        demand: true, // para que sea obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'mostrar por consola la tabla de multiplicar', opciones)
    .command('crear', 'crea un archivo txt con la tabla de multiplicar indicada', opciones)
    .help()
    .argv;

module.exports = {
    argv
}