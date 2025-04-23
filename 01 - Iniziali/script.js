/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function firstFirst(array) {

    let arrayIniz = [];
    
        for(let i = 0; i < array.length; i++) {
    
            arrayIniz.push(array[i][0])
    
        }
    
        return arrayIniz;
    } 

// ARROW FUNCTION

const findInitials = (array) => {

    let arrayIniz = [];
    
        for(let i = 0; i < array.length; i++) {
    
            arrayIniz.push(array[i][0])
    
        }
    
        return arrayIniz;
}

// Invoca la funzione qui e stampa il risultato in console

// let arrayInziali = firstFirst(names);
let arrayInziali = findInitials(names)
console.log(arrayInziali)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]