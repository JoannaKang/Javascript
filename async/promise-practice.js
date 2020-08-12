//1. Producer

const promise = new Promise((resolve, reject) => {
  //변수로 새 promise object를 할당해준다
  setTimeout(() => {
    //무언가 함수가 실행되고
    resolve("ellie"); //->성공적인 경우
    reject(new Error("no network")); //->에러가 발생한 경우
  }, 2000); //settimeout함수를 이용해서 딜레이를 준다 -> {}안의 resolve 콜백함수가 딜레이되어 실행됨
});

//2.Consumers : then, catch, finally
promise.then((value) => {
  //->함수가 정상 실행되는 경우 resolve가 실행되고, then으로 콜백함수가 실행, resolve로 반환된 값이 value로 들어온다 (===ellie)
  console.log(value);
});

promise.catch((error) => {
  console.log(error); //->error가 발생한 경우 실행되는 함수
});
