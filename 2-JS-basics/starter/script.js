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
 */

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