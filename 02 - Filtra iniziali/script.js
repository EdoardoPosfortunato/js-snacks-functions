/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// let letter = prompt("Dammi un'iniziale")
let letter = "a"


// Dichiara la funzione qui.

const filtraPerIniziale = (array, initial) => {

    let arrayFiltrata = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i][0].toUpperCase() === initial.toUpperCase()) {

            arrayFiltrata.push(array[i])

        }
    }

    return arrayFiltrata
    
}

// Invoca la funzione qui e stampa il risultato in console

const arrayFiltrataPerIniziale = filtraPerIniziale(names, letter)
console.log(arrayFiltrataPerIniziale)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]