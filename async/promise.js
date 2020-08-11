"use strict";

//Promise is a Javascript object for asynchronous operation.
// *Promise state
// - Pending: operation is working
// - fulfilled : completed
// - rejected : Problem occurred

//1. Producer
/**Promise : 원하는 기능을 비동기적으로 실행하는 함수, 두가지 콜백함수를 인자로 받는다
 * resolve = 정상 작동할 때
 * reject = 정상 작동하지 않을 때
 **/
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, readfiles -> 비동기방식으로 처리하면 좋은 task들)
  console.log("doing something...");
  setTimeout(() => {
    //resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

//2. Consumers : then, catch, finally
promise
  .then((value) => {
    //->then = 프로미스에서 정상 실행되는 값(resolve 콜백함수에서 리턴된 값)을 value에 받아줌
    console.log(value);
  })
  .catch((error) => {
    //->catch : 에러가 났을 때 어떻게 처리할 지 콜백함수를 등록할 수 있음
    console.log("error");
  })
  .finally(() => {
    //-> promise 정상실행여부와 상관 없이 무조건 실행되어야 하는 값
    console.log("finally");
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); //-> 실행 후 1초 있다가 1을 리턴하는 promise
});

//다른 비동기적인 아이들을 한꺼번에 묶어서 처리할수도 있다.
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 10000);
  });
const getEggs = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => '🥚'`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => '🍳'`), 1000);
  });

getHen()
  .then((hen) => getEggs(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

//-> 줄일수도 있음
getHen() //
  .then(getEggs)
  .catch((error) => {
    return "🧇";
  })
  .then(cook)
  .then(console.log);
