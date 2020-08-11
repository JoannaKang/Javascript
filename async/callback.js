"use strict";

//JavaScript is synchronous.
//Excute the code block by order after hoisting.
//hoisting: var, function declaration

//**JavaScript Declarations are Hoisted
//In JavaScript, a variable can be declared after it has been used.
//In other words; a variable can be used before it has been declared.

console.log("1");
setTimeout(() => console.log(2), 1000); //=>1초 뒤에 2를 출력하라는 콜백함수가 실행되는 함수
//console.log("2");
console.log("3");

//Synchronous callback
function printImmediately(print) {
  //->hositing 되어서 setTimeout 함수보다 빨리 실행됨
  //->함수가 hoisting 된다는 것, 밑에 선언되어 있어도 맨 위에서 선언된것처럼 실행위치를 끌어올려줌
  print();
}
printImmediately(() => console.log("hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

//Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

UserStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log("error");
  }
);
