// Como trabaja una función
const funcion1 = (num) => {
    if (num == 6) {
        return "Todo bien"
    } else {
        return "Todo Mal"
    }
}

const valorRetornado = funcion1(2);


// Como funciona una promesa
// resolve da respuesta a un then
// reject da respuesta a un catch
const promesa2 = new Promise((resolve, reject) => {
    // Conexion a base de datos
    // Petición a una api.

    const valor = resultadoDB.numero
    if (valor == 6) {
        resolve("Entro al primero");
    } else if (valor == 3) {
        resolve("Entro al segundo");
    } else if (valor == 7) {
        resolve("Entro al tercero");
    } else {
        reject("No tienes acceso");
    }
})


promesa2.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log('error', error)
})