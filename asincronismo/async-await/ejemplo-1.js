const url_base = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => { //El async se utiliza cuando se necesita que la función sea asincrona
    try {
        const response = await fetch(url); //El await es para esperar la respuesta en este caso del fetch
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const showData = async () => {
    const finalData = await getData(url_base);
    return console.log(finalData);
};

showData();
