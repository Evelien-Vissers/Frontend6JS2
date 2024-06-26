// ==========================================
// Opdracht 1a
// Schrijf een script dat voor iedere student in de array de score (het getal uit de property "score") in de terminal print

const scores = [
    {name: 'Max', score: 83, grade: null},
    {name: 'David', score: 77, grade: null},
    {name: 'Khalid', score: 92, grade: null},
    {name: 'Rianne', score: 66, grade: null}
];

// Verwachtte uitkomsten:
// 83
// 77
// 92
// 66
// ==========================================

//Gebruik van for loop:
for (let i = 0; i < scores.length; i++) { //Loop gaat door elke index van de array 'scores'
    console.log(scores[i].score); //Bij elke iteratie logt het de 'score' property van het huidige object naar de terminal
}

// ==========================================
// Opdracht 1b
// Breid je script uit door voor iedere student de score om te rekenen naar een letter en dit in de terminal te printen
// < 60 = F, < 70 = D, <80 = C, <90 B, <100 = A
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// Verwachtte uitkomsten:
// B
// C
// A
// D
// ==========================================
for (let i = 0; i < scores.length; i++) {
    const score = scores[i].score;
    let grade;

    if (score < 60) {
        grade = 'F';
    } else if (score < 70) {
        grade = 'D';
    } else if (score < 80) {
        grade = 'C';
    } else if (score < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }
    scores[i].grade = grade; //Uitwerking opdracht 1c

}
console.log(grade)
console.log(scores) //Uitwerking opdracht 1c

// ==========================================
// Opdracht 1c
// Breid je script uit door de bijbehorende letter op te slaan in de 'grade'-property van ieder student-object in de array.
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(scores) geeft: [
//  { name: 'Max', score: 83, grade: 'B' },
//  { name: 'David', score: 77, grade: 'C' },
//  { name: 'Khalid', score: 92, grade: 'A' },
//  { name: 'Rianne', score: 66, grade: 'D' }
//  ];
// ==========================================

//Zie uitwerking hierboven (regel 50 en 54)

// ==========================================
// Opdracht 2
// Schrijf een script die e-mailadressen genereert voor al onze medewerkers. Sla dit op in een nieuwe property "email" die je toevoegt aan iedere medewerker.

const NOVIEmployees = [ //Initialisatie van de array 'NOVIEmployees'
    {firstName: 'Nova', lastName: 'Eeken'},
    {firstName: 'Sam', lastName: 'Barnhoorn'},
    {firstName: 'Tessa', lastName: 'Steur'},
    {firstName: 'Mark', lastName: 'Rensen'},
];

// Bij NOVI horen de e-mailadressen altijd in het volgende format: voornaam.achternaam@novi.nl
// Vóór het script zie je de originele objecten,
// Na jouw script zie je de aangepaste objecten:
// console.log(NOVIEmployees) geeft: [
//   { firstName: 'Nova', lastName: 'Eeken', email: 'Nova.Eeken@novi.nl' },
//   { firstName: 'Sam', lastName: 'Barnhoorn', email: 'Sam.Barnhoorn@novi.nl' },
//   { firstName: 'Tessa', lastName: 'Steur', email: 'Tessa.Steur@novi.nl' },
//   { firstName: 'Mark', lastName: 'Rensen', email: 'Mark.Rensen@novi.nl' },
//  ];
// ==========================================
console.log(NOVIEmployees); //Logging van oorspronkelijke array.

NOVIEmployees.forEach(employee => { //Gebruik van forEach methode. Deze gaat door elk element van de array 'NOVIEmployees'
    employee.email = (employee.firstName + ' . ' + employee.lastName + '@novi.nl').toLowerCase(); //Bij elke iteratie voegt het een nieuwe property 'email' toe aan het huidige object, met de waarde van de voornaam, een punt, de achternaam en de domeinnaam '@novi.nl'.
});
console.log(NOVIEmployees); //Logging van aangepaste array.


// Opdracht 2-BONUS
// Lukt het je om ervoor te zorgen dat alle e-mailadressen in lowercase letters komen te staan? Dit heb je nog niet geleerd, maar google is your best friend...
// ==========================================

//zie hierboven regel 95 (toevoeging ronde haken + .toLowerCase() ).


// ==========================================
// Opdracht 3
// Schrijf een script die de property "neighborhood" (de buurt) invult op basis van de postcode van onze studenten.
// Tip: is het hier handig om if-else te gebruiken, of is er wellicht een betere manier?
// 	3513 = Pijlsweerd
//  3514 = Vogelenbuurt
//  3512 = Binnenstad
//  3531 = Lombok
//  3572 = Wittevrouwen
//  3581 = Oudwijk
//  3583 = Schildersbuurt

const students = [ //Initalisatie van array 'students' met hun naam, stad, postcode en buurt (die momenteel 'null' is).
    {name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: null},
    {name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: null},
    {name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: null},
    {name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: null},
    {name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: null},
    {name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: null},
    {name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: null},
    {name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: null},
];
const zipCodeToNeighborhood = { //Definitie van mapping 'zipCodeToNeighborhood', waarbij het object elke postcode aan de bijbehorende buurt koppelt.
    '3513': 'Pijlsweerd',
    '3514': 'Vogelenbuurt',
    '3512': 'Binnenstad',
    '3531': 'Lombok',
    '3572': 'Wittevrouwen',
    '3581': 'Oudwijk',
    '3583': 'Schildersbuurt'
};

students.forEach(student => { //Bij elke iteratie van deze 'forEach' methode wordt de 'neighborhood'-property van de huidige student bijgewerkt met de waarde uit het 'zipCodeToNeighborhood'-object, obv 'zipCode' property.
    student.neighborhood = zipCodeToNeighborhood[student.zipCode];
});
console.log(students); //Logging van de aangepaste array.

// Verwachte uitkomsten:
// [
//     { name: 'Mariska', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Mehmet', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Dennis', city: 'Utrecht', zipCode: '3572', neighborhood: 'Wittevrouwen' },
//     { name: 'Robin', city: 'Utrecht', zipCode: '3581', neighborhood: 'Oudwijk' },
//     { name: 'Tanush', city: 'Utrecht', zipCode: '3512', neighborhood: 'Binnenstad' },
//     { name: 'Florien', city: 'Utrecht', zipCode: '3513', neighborhood: 'Pijlsweerd' },
//     { name: 'Larissa', city: 'Utrecht', zipCode: '3583', neighborhood: 'Schildersbuurt' },
//     { name: 'Marijn', city: 'Utrecht', zipCode: '3572', neighborhood: 'Wittevrouwen' },
//     { name: 'Jan', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' },
//     { name: 'Laura', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' },
//     { name: 'Aicha', city: 'Utrecht', zipCode: '3514', neighborhood: 'Vogelenbuurt' },
//     { name: 'Karima', city: 'Utrecht', zipCode: '3531', neighborhood: 'Lombok' }
// ]
// ==========================================




