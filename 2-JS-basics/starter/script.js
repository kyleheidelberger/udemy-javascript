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
 */

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