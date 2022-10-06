// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// DATI
// 0.21 € al km
// 20% minorenni
// 40% over 65

// Input dell'utente

// Chiedere il numero di km da percorrere
const kmTravelled = parseInt(prompt("Quanti km devi percorrere?"));
console.log(kmTravelled, typeof(kmTravelled));

// Chiedere l'età
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge, typeof(userAge));

// Elaborazione dei dati

// Conversione km in euro
const kmPrice = kmTravelled * 0.21; 
console.log(kmPrice, typeof(kmPrice));

let ticketPrice = "";

// Prezzo Biglietto
if (userAge < 18) {
    let ticketPrice = kmPrice * 20 / 100;
    console.log(ticketPrice, typeof(ticketPrice));

} else if (userAge > 65) {
    let ticketPrice = kmPrice * 40 / 100;
    console.log(ticketPrice, typeof(ticketPrice));
}

const message = `Your Ticket Price is ${ticketPrice}!`;

// Output
alert(message);

