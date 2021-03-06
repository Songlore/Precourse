
//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'Hello';

//create a number variable, it an be any number
let newNum = 18;

//create a boolean variable
let newBool = false;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40;

//Solve the following math problem:
let newModulo = 21 % 5 === 1;
//perform a divsion and find the remainder
//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return str;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  // code here
  const add = x + y;
  return add;
  // return x + y; also works
}

function subtract(x, y) {
  // subtract y from x and return the value
  // code here
  const subtract = x - y;
  return subtract;
  // return x - y; also works
}

function multiply(x, y) {
  // multiply x by y and return the value
  // code here
  const multiply = x * y;
  return multiply;
  // return x * y; also works
}

function divide(x, y) {
  // divide x by y and return the value
  // code here
  const divide = x / y;
  return divide;
  //return x / y; also works
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  // ===
  // 5 === 5 will come back as true
  // 7 === 3 will return false
  // never use ==, always use ===
  return x === y;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  // strings of 'abcd' and 'adcd' would return as true
    return str1.length === str2.length;
  // what also works is
  // if (str.length === str2.length) {
  //      return true;
  //    } else {
  //      return false;
  //    }
}


function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // what also works is...
  //const numIsLessThanNinety = num < 90;
  //  return numIsLessThanNinety;
  return num < 90;
}


function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  return num > 50;
  //if (num > 50) {
  //  return true;
//  } else {
  //  return false;
//  }
}


function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
  return x % y;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
  //return num & 2 === 0;
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
 }
}


function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
  // return num & 2 !== 0;
//  return num & 2 === 1;
  if (num % 2 !== 0) {
   return true;
 } else {
   return false;
 }
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
    return num * num;
  }


function cube(num) {
  // cube num and return the new value
  // code here
  return num * num * num;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  // round num and return it
  // code here
  //math.round(num);
  return Math.round(num);
}

function roundUp(num) {
  // round num up and return it
  // code here
  //math.ceil(num);
  //return num;
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  // const name = 'Ben' + '' + 'Nelson'; comes out as Ben Nelson
  //let dogsName = 'Aiko';
  //dogsName + '!';
  //returns as "Aiko!"
  //addExclamationPoint + '!';
  return str + '!';
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  // previously attempted concat('Hello ' + 'name' + '!');
  return 'Hello ' + name + '!';
}

// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
  //getRectangleArea(length * width);
  return length * width;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  //getTriangleArea((base * height) / 2);
  return base * height / 2;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString: newString,
  newNum: newNum,
  newBool: newBool,
  newSubtract: newSubtract,
  newMultiply: newMultiply,
  newModulo: newModulo,
  returnString: returnString,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea
};
