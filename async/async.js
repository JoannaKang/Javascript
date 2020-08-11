//async & await
//clear style of using promise

//const { reject } = require("async");

//1. async
function fetchUser() {
  //do network request in 10 secs....
  //-> 이렇게 처리시간이 오래 걸리는 함수가 있는 경우, 비동기적으로 처리해줘야 페이지 로딩속도를 빠르게 만들 수 있다.
  //-> promise를 이용해 유저데이터가 준비되는대로 콜백함수를 불러온다
  return new Promise((resolve, reject) => {
    resolve("elile");
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//async를 활용해 더 간단하게! syntactic sugar
async function fetchUser() {
  return "elile";
}

//2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

//프로미스 중첩체인....더럽...
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log); //-> 🍎 + 🍌

//더 깔끔하게 만들기
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
} //-> 🍎 + 🍌
//-> 이 코드의 문제: 사과와 바나나를 받아오는건 독립적인 기능이지만 순차적으로 실행되기 때문에 불필요하게 로딩시간이 낭비됨

//병렬처리하는 방법
async function pickFruits() {
  const applePromise = getApple(); //->프로미스가 선언되자마자 함수가 실행되므로 병렬적으로 처리 가능
  const bananaPromise = getBanana(); //->프로미스가 선언되자마자 함수가 실행되므로 병렬적으로 처리 가능
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
} //-> 이렇게 쓰지 않아도 됨

//병렬처리 깔끔하게
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log); //-> 위의 코드와 같은 결과 출력

//race
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
} //-> 가장 먼저 값을 전달하는 함수만 값을 리턴하게 됨

pickOnlyOne().then(console.log); //-> 🍎
