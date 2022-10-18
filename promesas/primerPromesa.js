'use strict'

const promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.floor(Math.random() * 10));

    setTimeout(
        // Operador ternario
        () => number > 5 // true or false
        ? resolve(number) 
        : reject(new Error(`El número es menor a 5 el número fue ${number}`))
    , 1000);
});

promesa.then((number) => {
    console.log(number);
}).catch((error) => {
    console.error(error);
})