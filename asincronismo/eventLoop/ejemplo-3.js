console.log('1');

setTimeout(() => {
    console.log('2');
}, 2000);

for (let i = 0; i < 500; i++) {
    console.log(i);
}

console.log('fin?');
 //Resultado: 1, 0 al 499, fin?, 2
