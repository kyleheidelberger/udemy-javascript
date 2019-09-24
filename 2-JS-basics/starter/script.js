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

 /*******************************
  * Truthy and Falsy values and equality operators

  // falsy values: undefined, null, 0, '', NaN (converted to false in if/else condition)

  // truthy values: all other values

  let height;
  height = 23;
  
  if (height || height === 0) {
      console.log('Variable is defined');
  }
  else {
      console.log('Variable has not been defined.')
  }

  // Equality Operators
  if (height == '23') {
      console.log('The == operator does type coercion!');
  }
  */

/***************************
 * CODING CHALLENGE 2
 

let johnAvg = (89 + 120 + 103) / 3
let mikeAvg = (116 + 94 + 123) / 3
let maryAvg = (97 + 134 + 105) / 3

console.log('Mike\'s Score = ', mikeAvg);
console.log('John\'s Score = ', johnAvg);
console.log('Mary\'s Score = ', maryAvg);

switch (true) {
    case johnAvg > mikeAvg && johnAvg > maryAvg:
        console.log('John wins!');
        break;
    case mikeAvg > johnAvg && mikeAvg > maryAvg:
        console.log('Mike wins!');
        break;
    case maryAvg > johnAvg && maryAvg > mikeAvg:
        console.log('Mary wins!');
        break;
    case johnAvg === mikeAvg === maryAvg:
        console.log('Three way tie!');
        break;
    case johnAvg > mikeAvg && johnAvg === maryAvg:
        console.log('John and Mary tie!');
        break;
    case mikeAvg > johnAvg && mikeAvg === maryAvg:
        console.log('Mike and Mary tie!');
        break;
    case johnAvg > maryAvg && johnAvg === mikeAvg:
        console.log('John and Mike tie!');
        break;

}
*/

/************************************
 * Functions


function calculateAge(birthYear) {
    return 2019 - birthYear;
}

let ageJohn = calculateAge(1987);
let ageMike = calculateAge(1948);
let ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1987, 'Kyle');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

 */

 /***********************
  * Function Statements and Expressions
  

// Function Declaration
// function whatDoYouDo(job, firstname) {}

// Function Expression
let whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives people around the city.'
        case 'designer':
            return firstName + ' designes super usable web sites.'
        default:
            return firstName + ' has another awesome job.'
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('garbage man', 'Mark'));
*/

/*************************************
 * Arrays


 // initialize new array
let names = ['John', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
console.log(names);

names[3] = 'Mary';
console.log(names);

// Different data types
let john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

let isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : ' John is a designer';
console.log(isDesigner);
 */

 /******************************
  * CODING CHALLENGE 3


function calculateTip(bill) {
    let tip;
    if (bill < 50) {
        tip = bill * .2;
    }
    else if (bill >= 50 && bill <= 200) {
        tip = bill * .15;
    }
    else {
        tip = bill * .1;
    }
    return tip
}

let bills = [124, 48, 268];
let tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])]
console.log(tips);
let finalBills = [];

function finalBill(bill, tip) {
    return bill + tip
}

finalBills.push(finalBill(124, calculateTip(124)));
finalBills.push(finalBill(48, calculateTip(48)));
finalBills.push(finalBill(268, calculateTip(268)));
console.log(finalBills);
  */

/********************************
* Objects and Properties

// Object literal
let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
let x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new object syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/