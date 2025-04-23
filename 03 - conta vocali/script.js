/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * Prende uan stringa e restituisce il numero di vocali
 * @param {*} string 
 * @returns numero di vocali
 */

const numbersOfVowels = (string) => {

    let contatore = 0;
    const vowels = "aeiou"

    for (let i = 0; i < string.length; i++) {

        if (vowels.toUpperCase().includes(string[i].toUpperCase())) {

            contatore++;

        }
    }

    return contatore;
    
}

// Invoca la funzione qui e stampa il risultato in console

const numeroDiVocali = numbersOfVowels(word);
console.log(numeroDiVocali)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)