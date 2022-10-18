//Funciones anonimas autoejecutables/IIFE (Immediately )
(function (){
    return console.log('Anonymous, bruh!...');
})();

(() => {
    return console.log('Anonymous, bruh!... pero en arrow ;v');
})();

//Crea una funcion que sume dos números y sea de tipo iife

(function (a, b){
    return console.log(a+b);
})(27, 36);

//Con funcion flecha
((a, b) => console.log(a + b))(78, 16);