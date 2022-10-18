function soyCien() { return 100 };
function soyDoscientos() { return 200 };

function sumaDosFunciones(unaFuncion, otraFuncion){
    const suma = unaFuncion() + otraFuncion();
    return suma;
}

console.log(sumaDosFunciones(soyCien, soyDoscientos)); // No se le pone el parentesis a las funciones dentro del console.log por que se van a ejecutar en la otra funcion.