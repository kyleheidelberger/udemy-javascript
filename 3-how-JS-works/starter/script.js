///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1987);

function calculateAge(year) {
    console.log(2019 - year);
}

// retirement(1987);

let retirement = function(year) {
    console.log(65 - (2019 - year));
}

///variables
console.log(age);
var age = 23;
console.log(age);

function foo() {
    let age = 65;
    console.log(age);
};
foo();
console.log(age);
*/














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }
/*
let john  = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();

let mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // method borrowing
mike.calculateAge();
*/


