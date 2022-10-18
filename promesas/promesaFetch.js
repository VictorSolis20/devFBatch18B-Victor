'use strict'

const url = "https://pokeapi.co/api/v2/pokemon/ditto"; //URL de la API
const url2 = "https://rickandmortyapi.com/api/character/235"; //URL de la API rick and morty

function getData(url) {
    const promise = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });

    return promise;
}

//Estos son para hacer la extracción de información de cada API por separado
getData(url)
.then((data) => {
    console.log('Data ', data);
})
.catch((error) => {
    console.log('Error ', error);
});

getData(url2)
.then((data) => {
    console.log('Data ', data);
})
.catch((error) => {
    console.log('Error ', error);
});

//Estos son para hacer la extracción de información de todas las APIS juntas al mismo tiempo
//lo cual se realiza mediante un array de promesas
// const promesaPokemon = getData(url);
// const promesaRAndM = getData(url2);

// const promesas = [promesaPokemon, promesaRAndM];

// Promise.all(promesas)
//     .then((response) => {
//         const [pokemon, personajeRM] = response; //Se realiza la desestructuración del array
//         console.log("pokemon ", pokemon);
//         console.log("personajeRM ", personajeRM);
//     })
//     .catch((error) => {
//         console.log("error ", error);
//     });
