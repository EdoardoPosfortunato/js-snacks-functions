/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

/**
 * Prende una stringa e restituisce saluto + nome
 * @param {*} string 
 * @returns saluto + nome
 */

const saluto = (string) => `Ciao ${string} !!!`

// Invoca la funzione qui e stampa il risultato in console

let salutoNome = saluto(name)
console.log(salutoNome)

//Risultato atteso se si passa 'Mario': // ciao Mario