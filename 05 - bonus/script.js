/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const now = new Date();
console.log(now.toLocaleTimeString());


const hoursNumb = now.getHours()
const hoursString = hoursNumb.toString().padStart(2, '0');
// console.log(hoursNumb);
console.log(hoursString);



// Dichiara la funzione qui.

/**
 * 
 * @param {auto}
 * @returns {string}
 */

// ESEMPIO di FUNZIONE (controlla se una parola è PALINDROMA)

const hello = (number) => {

    let saluto = ""

    if (number >= 6 &&  number < 13){
        saluto = "Buongiorno"
    } else if (number >= 13 &&  number < 17){
        saluto = "Buon pomeriggio"
    } else if (number >= 17 &&  number < 24){
        saluto = "Buona Sera"
    } else if (number >= 0 &&  number < 6){
        saluto = "Vai a Letto"
    }

    return saluto
    
}


// Invoca la funzione qui e stampa il risultato in console

let saluto = hello(hoursNumb)
console.log(saluto)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.