// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================
for (let i = 1; i <= 5; i++) { //Deze loop loopt van 1 t/m 5, wat overeenkomst met het aantal rijen in het patroon.
    let row =''; //Dit initialiseert een lege String die we zullen vullen met de juiste asterisken.
    for (let j = 1; j <= i; j++) { row += '*'; } //Deze innerlijke for loop voegt de juiste hoeveelheid asterisken toe aan de rij, gebaseerd op de huidige waarde van 'i'.
}
console.log(row);

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
for (let i = 1; i <= 5; i++) { //Deze loop loopt van 1t/m5, wat overeenkomt met het aantal iteraties
    if (i < 5) { //Deze conditionele statement controleert de waarde van 'i'
        console.log("loop..."); //Als 'i' < 5, loggen we 'loop...'
    } else {
        console.log("klaar!"); //als 'i' = 5, loggen we 'klaar!'
    }
}
// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
for (let i = 0; i <= 9; i++) { //Deze loop loopt van 0 t/m 9 - komt overeen met de reeks getallen die we willen loggen
    if (i >= 6) { //Controleert of 'i' 6 of groter is.
        console.log(">> " + i); //Zo ja, dan loggen we >> gevolgd door het getal
    } else if (i >= 3) { //Controleert of 'i' 3 of groter is, maar minder dan 6.
        console.log("> " + i); //Zo ja, dan loggen we '>' gevolgd door het getal
    } else { //logt getallen 0t/m2 zonder enige prefix
        console.log(i);
    }
}

// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================
for (let i = 0; i <= 100; i++) { //Deze loop loopt van 0 t/m 100
    if (i % 3 === 0 && i % 5 === 0) { //Deze conditie controleert of 'i' een veelvoud is van zowel 3 als 5.
        console.log("FizzBuzz"); //Zo ja, dan print het "FizzBuzz"
    } else if (i % 3 === 0) { //Deze conditie controleert of 'i' een veelvoud is van 3.
        console.log("Fizz"); //Zo ja, dan print het "Fizz"
    } else if (i % 5 === 0) { //Deze conditie controleert of 'i' een veelvoud is van 5.
        console.log("Buzz"); //Zo ja, dan print het "Buzz"
    } else {
        console.log(i); //Als geen van de bovenstaande condities waar is, print het gewoon het getal 'i'.
    }
}


