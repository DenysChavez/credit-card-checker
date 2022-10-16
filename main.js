// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

//Free Formatter's method
// Add your functions below:
function validateCred(arr) {
  //Remove the last element from the array
  let newArr = arr.map(Number).slice(0, -1);
  newArr.reverse();
  let lastNum = arr.slice(-1);
  lastNum = lastNum[0];
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
      newArr[i] = newArr[i] * 2;
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > 9) {
      newArr[i] = newArr[i] - 9;
    }
  }
  let sumWithInitial = newArr.reduce((a, b) => a + b, lastNum);
  if (sumWithInitial % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

function findInvalidCards(arrOfArr) {
  let invalidArray = [];
  for (let arr of arrOfArr) {
    if (!validateCred(arr)) {
      invalidArray.push(arr);
    }
  }
  return invalidArray;
}
let invalidArray = findInvalidCards(batch);

function idInvalidCardCompanies(arrOfArr) {
  let arrOfCompanies = [];
  for (let arr of arrOfArr) {
    if (arr[0] == 3) {
      if (!arrOfCompanies.includes("Amex")) {
        arrOfCompanies.push("Amex");
      }
    } else if (arr[0] == 4) {
      if (!arrOfCompanies.includes("Visa")) {
        arrOfCompanies.push("Visa");
      }
    } else if (arr[0] == 5) {
      if (!arrOfCompanies.includes("Mastercard")) {
        arrOfCompanies.push("Mastercard");
      }
    } else if(arr[0] == 6) {
      if (!arrOfCompanies.includes("Discover")) {
        arrOfCompanies.push("Discover");
      }
    } else {
      console.log("Company not found");
    }
  }
  return arrOfCompanies;
}
// console.log(invalidArray)
// console.log(idInvalidCardCompanies(invalidArray));

////////////////////////////////
function validate(n) {
  //takes a big bumber as argument, e.g. (123456789), and change it to an Array, ;
  let digits;
  //check n is a serial or number 
  if (typeof n === "number") {
   digits = n.toString().split("").map(Number)
  } else if (typeof n === "string") {
    digits = n.split("").map(Number);
 } else {
    digits = n;
  }
  //if there are an even number of digits, double every other digit starting with the first
  if(digits.length % 2 === 0) {
    digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit)
  //is there are an odd number of digits, double every other digit starting with the second
  } else {
    digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit)
  }
  //fix the double digits, if digit is greater than 9, subtract 9 from its value
  digits = digits.map(digit => digit > 9 ? digit - 9 : digit)
  //sum up all the digits
  let sumUp = digits.reduce((acc, digit) => acc + digit);
  //If the sum modulo 10 is 0 then numbes is return is valid, otherwise, it's invalid
  return sumUp % 10 === 0;
} 

function validateYoutube(n) {
  //Convert number to an array of digits
  const digits = n.toString().split("").map(Number);

  const sum = digits
  //Double every other digit(from right to left)
    .map((digit, idx) => idx % 2 === digits.length % 2 ? fixDouble(digit * 2) : digit)
    //Add the digits
    .reduce((acc, digit) => acc += digit, 0)
  return sum % 10 === 0;
}

function fixDouble(number) {
  return number > 9 ? number - 9 : number;
}

// console.log(validateYoutube(5480786234622134))

function convertIntoValid(n) {
  if(!validate(n)) {

  }
}
//  let n = "5480786234622134"
// //  let digits = parseInt(n)
// // console.log(typeof digits)
// // console.log(typeof n)
// console.log(validate(4916217400663774))
// console.log(validate(n))

// console.log(validate(invalid1))
// console.log(validate(invalid2))
// console.log(validate(invalid3))
// console.log(validate(valid1))
// console.log(validate(valid2))
// console.log(validate(valid3))



// console.log(typeof invalid1)
// let numbers = 6304246404294158;
// console.log(typeof numbers);

