//Function
//- fundamental building block in the program
//- subprogram can be used multiple items
//- performs a task or calculate a value

//1. Function declaration
//function name(parm1, parm2) {body.... return; }
//one function === one thing
//naming: doSomething, command, verb
//e.g. creatCardAndPoint -> createCard  / createPoint -> can be divided in two function

function log(message) {
  console.log(message);
}

log("hello");

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
//정상적인 코드
function showMessage(message, from) {
  //->인사말과 이름 두 파라미터를 받아서
  console.log(`${message} by ${from}`); //-> 콘솔에 환영 메시지를 출력해준다
}

showMessage("Hi", "Joanna");

//둘 중 하나의 파라미터가 없을 때
function showMessage(message, from = "unknown") {
  //-> 파라미터가 전달되지 않았을 때의 값을 미리 지정해준다
  console.log(`${message} by ${from}`); //-> 해당되는 파라미터가 없다면 콘솔에 미리 지정된 값으로 출력된다
}

showMessage("Hi");

//4. Rest parameters(added in ES6)
function printALL(...args) {
  //-> 여러 인자를 배열(array)형태로 받아옴
  for (let i = 0; i < args.length; i++) {
    //->0부터 시작해서 args의 길이만큼 for loop을 반복한다
    console.log(args[i]); //-> 배열의 순서대로 콘솔에 출력
  }
  //or
  for (const arg of args) {
    console.log(arg);
  }

  //or
  args.forEach((arg) => console.log(arg));
}

printALL("dream", "coding", "ellie");

//5. Local scope
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //  console.log(childMessage); //-> local variable을 상위에서 호출할 수 없으므로 에러가 남
}

//console.log(message); //->local variable을 호출한 것이므로 에러가 남
printMessage(); //->global variable을 호출한 것이므로 정상 호출 가능

//6. return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
//console.log(`sum : ${result}`);
console.log(`sum : ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic....
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    //->조건이 맞지 않을때는 빨리 함수를 종료하도록 로직을 짜는게 코드 가독성이 좋다
    return;
  }
  //long upgrade logic
}

// **참고) First-class function
//  → Functions are treated like any other variables
//  → can be assigned as a value to variable
//  → can be passed as an argument to other functions.
//  → can be returned by another function

// 1.Function expression
// a function declaration can be called earlier that it is defined. (hoisted) -> 함수를 그냥 선언해 주는겅우
// a function expression is created when the execution reaches it.

//function expression 예시
const print = function () {
  //->function 자체를 print라는 변수에 할당해줌 : 이름이 없는 anonymous function
  console.log("print");
};

print(); //-> 변수에 할당된 다음부터 호출이 가능하다
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  //-> 첫번째 조건에 따라 상황에 맞는 함수를 호출(callback)한다
  if (answer === "love you") {
    //-> answer가 love you 인경우, printYes 함수를 호출
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  //-> Yes! 를 리턴하는 함수
  console.log("Yes!");
};
//named function : 이름이 정의된 함수 (better debugging in debugger's stack traces / recursions)
const printNo = function print() {
  //->Nope 를 리턴하는 함수
  console.log("Nope");
};

randomQuiz("love you", printYes, printNo); //-> 인자값과, 조건에 따라 리턴될 함수들을 정의해준다
randomQuiz("Nope", printYes, printNo);

3. Arrow function : Always anonymous
const simplePrint = function () {
  console.log("simple print");
};
//이렇게 간결하게 줄일 수 있다.
const simplePrint = () => console.log("simple Print");

const add = function (a, b) {
  return a + b;
};
//이렇게 간결하게 줄일 수 있다.
const add = (a, b) => a + b;
console.log(add(1, 2));

const simpleMultiply = (a, b) => {
  //do something more -> 블럭을 넣어서 뭔가를 더 해주는 경우
  return a * b; //-> 이때는 값을 리턴해줘야 함
};

//4. IIFE : 선언한 함수를 바로 호출하고 싶을 때
(function hello() {
  console.log("IIFE");
})();

function 연습

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return b % a;
}

console.log(add(1, 2));
console.log(substract(4, 2));
console.log(divide(10, 2));
console.log(remainder(7, 3));

더 간단하게 만들기
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 2, 3));
console.log(calculate("substract", 2, 3));
console.log(calculate("divide", 2, 3));
console.log(calculate("remainder", 2, 3));
