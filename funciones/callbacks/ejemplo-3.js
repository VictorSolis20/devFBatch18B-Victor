const hola = (nombre, unaFuncion) => {
    setTimeout(() => {
        console.log('Hola ' + nombre);
        return unaFuncion();
    }, 1500);
}

const adios = () => {
    setTimeout(() => {
        return 'adios';
    }, 1000);
}

console.log(hola("Sam", adios));