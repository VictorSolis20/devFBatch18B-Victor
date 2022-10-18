'use strict'

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //Importación de XMLHttpRequest

const url = "https://pokeapi.co/api/v2/pokemon/ditto"; //URL de la API
const url2 = "https://rickandmortyapi.com/api/character/235"; //URL de la API rick and morty

//Función que se puede usar para realizar varias peticiones a una API con una url diferente.
function getData(url, callback) {

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(JSON.parse(xhttp.responseText), null); //Se convierte la respuesta en un JSON
            } else {
                callback(null, "Algo salio mal :(");
            }
        }
    };

    xhttp.send();
    // Cuando una función no tiene return, retorna por defecto undefined
    // return undefined
}

// Siempre retornaria undefined por el asincronismo
// Lo que vemos.- const data = getData(url, callback)
// Lo que siempre retornaria.- const data = undefined;

//Esto es lo mismo que el getData de la url2
function datosPokemon (data, error){
    console.log('Datos desde el callback', data, error);
}
getData(url,datosPokemon);

// getData(url, (data, error) => {
//     console.log('Datos desde el callback', data, error);
// });

//Esto realiza lo mismo que el getData de arriba solo que tiene diferente URL
getData(url2, (data, error) => {
    console.log('Datos desde el callback', data, error);
});



