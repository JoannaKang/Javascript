//JSON
//Javascript Object Notation

//1.Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(["apple", "banana"]); //-> 배열을 json으로 변환
console.log(json); //-> ["apple","banana"] double quoto(json의 규격사항)

//how to convert object -> json
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

//오브젝트에서 원하는 property만 가져오고싶다면
json = JSON.stringify(rabbit, ["name"]); //-> 원하는 property이름을 넣어줌
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value: ${value}`);
  return key == "name" ? "ellie" : value;
  //->  key에 name이라는 값이 들어오면 해당 값으로 바꿔주고 아닌 경우는 원래 value를 유지
});
console.log(json);

//**Json : overloading :동일한 이름에 전달되는 파라미터에 따라 여러 방식으로 함수를 호출 가능한 경우() */

//2. JSON to Object
//parse(json)
json = JSON.stringify(rabbit); //-> json으로 변환
const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
}); //-> json으로부터 object로 변환
console.log(obj);
rabbit.jump();
//obj.jump(); //->json으로 변환된 object에는 jump라는 기능이 포함되어있지 않음

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
