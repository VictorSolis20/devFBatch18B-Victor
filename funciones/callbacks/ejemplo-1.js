// Es cuando una funcion de orden mayor, ejecuta la(s) funcion(es)
// que tiene como parametro.


//Con callbacks, creen e implementen las operaciones basicas
//(suma, resta, multiplicación y divición)

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const calculadora = (a, b, operacion) => {
    return operacion(a, b);
}

console.log(calculadora(2, 8, suma));
console.log(calculadora(10, 4, resta));
console.log(calculadora(3, 12, multiplicacion));
console.log(calculadora(10, 2, division));
