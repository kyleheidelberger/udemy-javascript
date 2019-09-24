/****************************
 * Variables and Data Types
 
let firstName = 'John';
console.log(firstName);

let lastName = 'Smith';
let age = 28;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/*******************************
 * Variable mutation and type coercion
 

 let firstName = 'John';
 let age = 28;

 // Type coercion (JavaScript converts numbers/booleans to strings)
 console.log(firstName + ' ' + age)

 let job, isMarried;
 job = 'Teacher';
 isMarried = 'false';

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

 // Variable mutation
 age = 'twenty eight';
 job = 'driver';

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

let lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/***********************************
 * Basic Operators
 
let year, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
let johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
let x;
console.log(typeof x);
*/

/*************************
 * Operator Precedence
 

let now = 2019;
let yearJohn = 1987;
let fullAge = 21;

// Multiple Operators
let isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
let ageJohn = now - yearJohn;
console.log(ageJohn);
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
let x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/*********************
 * CODING CHALLENGE 1
 

 let markMass, markHeight, johnMass, johnHeight;

 markMass = 78;
 markHeight = 1.69;
 johnMass = 92;
 johnHeight = 1.95;

 let markBMI = markMass / (markHeight * markHeight);
 let johnBMI = johnMass / (johnHeight * johnHeight);
 console.log(markBMI, johnBMI)
 
 let isMarkFatter = markBMI > johnBMI;

 console.log('Is mark fatter than john? ' + isMarkFatter);
*/

/******************************
 * If / else statements


let firstName = 'John';
let civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' is single!');
}

let isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!')
}
else {
    console.log(firstName + ' is single!')
}


let markMass, markHeight, johnMass, johnHeight;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI)

if (markBMI > johnBMI) {
    console.log('Mark is fatter than John.');
}
else {
    console.log('John is fatter than Mark.');
}
*/

/********************************
 * Boolean logic


let firstName = 'John';
let age = 20;

if (age < 13) {
    console.log(firsName + ' is a boy.');
}
else if (age >= 13 && age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
}
else if (age >= 20 && age < 30) { // between 13 and 20
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
 */

/**********************************
 * Ternary Operator and Switch Statements


let firstName = 'John';
let age = 16;

// Ternary Operator
age >= 12 ?console.log(firstName + ' can legally drink alcohol.') : console.log(firstName + ' can\'t legally drink alcohol');

let drink = age >= 21 ? 'alcohol' : 'water';
console.log(drink);

// Switch Statement
let job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids.');
        break;
    case 'driver':
        console.log(firstName + ' drives people around the city.');
        break;
    case 'designer':
        console.log(firstName + ' designs web sites.');
        break;
    default:
        console.log(firstName + ' does something else.');

}

switch (true) {
    case age < 13:
        console.log(firsName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
        break;

}
 */