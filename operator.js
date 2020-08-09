//1. string concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`stirng literals:
''''
1 + 2 = ${1 + 2}`);

console.log("joanna's notebook");
console.log("joanna's notebook");

//2. numeric operator
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3.Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement: ${preIncrement}, counter ${counter}`);

//Decrement
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter ${counter}`);
