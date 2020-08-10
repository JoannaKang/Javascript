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

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x -y
x *= y; // x = x * y
x /= y; // x = x / y

//5. comparison operators
console.log(10 < 6);
console.log(10 > 6);

//6. Logical operators
const value1 = true;
const value2 = 4 < 2;

//||(or), finds the first truthy value
//console.log(`or: ${value1 || value2 || check()}`);

//&&(and), finds the first falsy value
//console.log(`and: ${value && value2 && check()}`);

//function check() {
//    for (let i = 0, i<10; i++ ) {
//       //wasting time
//        console.log('??')
//    }
//    return true;
//}
console.log(!value1);

//7. Equality Operators
const stringFive = "5";
const numberFive = 5;

//==loose equlity, with type conversion
console.log(stringFive == numberFive); //->true
console.log(stringFive != numberFive); //->false

//==strict equality, no type conversion
console.log(stringFive === numberFive); //->False
console.log(stringFive !== numberFive); //->True

//equlity - puzzler
console.log(0 == false); //True
console.log(0 === false); //False -> 타입이 다르기 때문에
console.log("" == false); //True
console.log("" === false); //False -> 타입이 다르기 때문에
console.log(null == undefined); //True
console.log(null === undefined); //False -> 타입이 다르기 때문에

//8.Conditional Operators: if / else if / else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome Ellie!");
} else if (name === "coder") {
  console.log("Your are amazing coder");
} else {
  console.log("Unknown");
}

//9. Ternary operator : ?
//condition ? value1 : value2
console.log(name === "ellie" ? "Yes" : "No"); //-> 물음표 왼쪽 조건이 참이면 : 왼쪽의 값을 실행 거짓이면 오른쪽 값을 실행

//10. Switch
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("I love you!");
    break;
  default:
    console.log("Same all!");
    break;
}

//11.while loop
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop, body code is excuted first,
//then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

//12. for loop
//(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //-> 조건 안에 변수를 선언해줄수도 있음
  console.log(`inline variable for:${i}`);
}

//nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(`i: ${i}`);
  }
}

//Q2. iterate from 0 to 10 and print nubmers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  console.log(`i: ${i}`);
  if (i >= 8) {
    break;
  }
}
