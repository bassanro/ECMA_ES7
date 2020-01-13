
//npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env

var myName = 'Max';
console.log(myName);

myName = "Roshan";
console.log(myName);


const myName2 = 'Max';
console.log(myName2);

// myName2 = "Roshan";
// console.log(myName2);


// Arrow functions. 
function myFunc() { 

}

const myFunc2 = () => { 

}


function printMyName(name) { 
    console.log(name);
}

printMyName("Max");

console.log("*******************");
// 1. Arrow functions. 
const printMyNameAgain = (name) => { 
    console.log(name);
}

printMyNameAgain("Roshan");



const multiply = (number) =>  {
    return number*2;
}

// can be refactored as : 

const multiplyAgain = number => number * 2;

console.log(multiply(2));
console.log(multiplyAgain(2));



console.log("*******************");

// Exporting and importing. 

// DEFAULT Exports can have any name.
// import person from './person.js';
// import prs from './person.js';

// console.log(person.name);
// console.log(prs.name);


// NOTE: When we are not using default export then we need to specify the same name 
import { clean } from './utility.js';
import { baseData }  from './utility.js';

import * as bundled from './utility.js';

console.log(bundled.baseData);

clean();
console.log(baseData);

console.log("*******************");
// CLASSES 
// https://stackoverflow.com/questions/52237855/support-for-the-experimental-syntax-classproperties-isnt-currently-enabled
// npm i --save-dev @babel/plugin-proposal-class-properties
// Add the plugins.

class Human { 
    constructor() {
        
        this.gender = "Male";
    }
    // ES7 feature
    printGender = () => {  console.log("Gender is " + this.gender); }
}


class Person extends Human {
    constructor() {
        super(); // call the parent constructor.
        this.name = "roshan";
    }
    // ES7 feature
    printMyName = () => { console.log("Hello " + this.name);  }
}

const person = new Person ();
person.printMyName();
person.printGender();


console.log("*******************");
// Init properties and methods -> skip constructor call. 


 // ES7 feature
class Human2 { 
    gender = "Female";
    // ES7 feature
    printGender = () => {  console.log("Gender is " + this.gender); }
};

class Person2 extends Human2 {
    name = "Manmeet";
    // ES7 feature
    printMyName = () => { 
        console.log("Hello " + this.name);  
    }
}


const person2 = new Person2();
person2.printMyName();
person2.printGender();


console.log("*******************");
// SPREAD & REST OPERATORS. 


//1. SPREAD OPEARTOR
const numbers = [1,2,3,4,5];
const newnumbers = [...numbers, 4];
console.log(newnumbers);


const person3 = {
    name : 'Max'
};

const newPerson = { 
    ...person3,
    age: 28
}

console.log(newPerson);

//2. REST OPERATOR. 
const filter = (...args) => {
    return args.filter( elememt =>  elememt ===1 );
} 

// PRINTS one since the condition returns true on elements.
console.log(filter(1,2,3));


console.log("*******************");
// DESTRUCTURING -  arrays and objects. 
// unpack values from arrays, or properties from objects, into distinct variables.
let [a,b] =  ["Hello", "Max"];

console.log(a);
console.log(b);

const num = [1,2,3];
let [num1,num2] = num;
console.log(num1, num2);

// Object destrucutring. 

let obj = { name: 'roshan', age: 34};
let {name: p, age:q} = obj;

console.log(p,q);


console.log("*******************");
// Reference and Primitive types. 

// Primitive types are copied 
const number =1 ;
const number2 = number;

console.log(number2);

// Objects and arrays are reference types. 

// COPY BY REFERENCE
const secondPerson = person;
console.log("PRINTING SECOND ORIGINAL PERSON");
console.log(secondPerson);

// Use composition to created by copy.
// COPY BY VALUE
const thirdPerson = {
    ...person
}

person.name = "MAXXX";
console.log("PRINTING SECOND PERSON");
console.log(secondPerson);

console.log("PRINTING THIRD PERSON");
console.log(thirdPerson);

// REFRESHING ARRAY FUNCTION. 
// Returns in a new array and implement function on each element.

const Numbers = [1,2,3];
const doubleNumArray = Numbers.map((num) => { 
    return num * 2;
})

// We can see that original array is untouched. 
console.log(Numbers);
console.log(doubleNumArray);



