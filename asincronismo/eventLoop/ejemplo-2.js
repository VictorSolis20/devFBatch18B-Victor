console.log('1');

setTimeout(() => {
    console.log('2');
}, 3000);

setTimeout(() => {
    console.log('3');
}, 2000);

console.log('4');

// Resultado: 1, 4, 3, 2