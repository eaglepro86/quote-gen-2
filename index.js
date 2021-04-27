// get quotes fromn api - type.fit/api/quotes
// asynchronous fetch request in a try catch statement
// asynchronous function can run at anytime
// Independentantly and it wont stop the browser from rendering the page

// apiQuotes assigned as a global variable at the top of page
// makes it accessible everywhere and assigned as an empty array
// response.json response is returned as an array
// let is used becasue the values of the array chnages
let apiQuotes = [];


async function getQuotes() {

    // set the api url 
    const apiUrl = "https://type.fit/api/quotes";

    // try catch statement allows us to try and complete a fetch request
    // if it doesnt work we can catch the error and do something with
    try {
        // Attemp a fetch request and assign the response to a response variable
        const response = await fetch("https://type.fit/api/quotes");

        // set the response into json format 
        // assign the data to global variable apiQuotes
        apiQuotes = await response.json();  

        // log out quotes to console to see what data is returned
        console.log(apiQuotes);


    }

    // Catch the error
    catch (error) {

    }
}

// when the page has loaded run the funtion
getQuotes();