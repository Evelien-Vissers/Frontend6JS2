// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

const names = ["Henk", "Piet", "Fred", "Joop"]; //Hier wordt een array 'names' met de gegeven namen gedefinieerd.
console.log(names); //Hier wordt de oorspronkelijke array naar de console gelogd.

for (let i = 0; i < names.length; i++) { //Gebruik van for-loop om door elke index van de array te itereren.
    names[i] = names[i] + "je"; //Voor elke index voegen we "je" toe aan de naam en slaan de nieuwe waarde op dezelfde plaats in de array.
}
console.log(names); //De aangepaste array wordt naar de console gelogd.


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];

const numbers = [2, 4, 5, 29, 38]; //Array 'numbers' wordt gedefinieerd.
console.log(numbers); //Oorspronkelijke array wordt naar de console voor het script gelogd.

for (let i = 0; i < numbers.length; i++) { //Gebruik van for-loop om door elke index van de array te itereren
    if (numbers[i] % 2 === 0) { //Voor elke index wordt gecontroleerd of het getal even is (door 'numbers[i] %2 === 0' te gebruiken).
        //Even getal
        numbers[i] = numbers[i] * 2; //Indien het 'even' is, vermenigvulden we het getal met 2 en slaan de nieuwe waarde op dezelfde plaats in de array op.
    } else {
        //Oneven getal
        numbers[i] = numbers[i] * 3; //Indien het getal oneven is, vermenigvuldigen we het getal met 3 en slaan de nieuwe waarde op dezelfde plaats ind e array op.
    }
}
console.log(numbers); //Aangepaste array wordt naar de console gelogd


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft:
// [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]

const squares = [30, 2, 8, 24, 11]; //Array 'squares' wordt gedefinieerd met gegeven lengtes van de zijden van de vierkanten
console.log(squares); //Oorspronkeijke array wordt naar de console gelogd

for (let i = 0; i < numbers.length; i++) { //For-loop om door elke index van de array te itereren.
    const volume = squares[i] ** 3; //Voor elke index berekenen we het volume door de lengte tot de macht 3 te verheffen
    squares[i] = "Het volume van " + squares[i] + " is " + volume; //Hiermee wordt de huidige waarde in de array overschreven met de string "Het volume van [a] is [b]", waarbij [a] de originele lengte is en [b] het berekende volume.
}
console.log(squares); //Aangepaste array wordt naar de console gelogd.


