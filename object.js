// Objects
// one of the Javascript's data types.
// a collection of relate data and/or functionality
// Nearly all abjects in Javascrpt are instance of object

//1. Literals and properties
const obj1 = {}; //-> 'object literal' syntax (using {})
const obj2 = new Object(); //->'object constructor' syntax (using 'new' keyword)

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

//with Javascript magic(dynamically typed language)
//can add properties later

ellie.hasJob = true; //->나중에 추가하고 싶은 속성을 추가할 수 있다.
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); //->속성을 지울수도 있다.

//2. computed properties : key should be always string
console.log(ellie.name); //->속성에 dot(.)을 활용해 접근 가능
console.log(ellie["name"]); //-> 배열에 접근하는것처럼 key값을 통해서도 접근 가능 (string 타입으로 접근해야함)

ellie["hasJob"] = true; //->computed properties 활용해 새로운 속성 정의 가능
console.log(ellie.hasJob);

// dot / computed properties의 차이
//dot - 코딩하는 순간 key에 해당하는 값을 받아와야 하는 경우 사용
//computed properties - 코딩할 때 어떤 key를 써야하는지 모르는 경우, 런타임에서 결정해야 할 때 (예를들어 유저 단에서 데이터를 입력받는 경우)

//wrong
function printValue(obj, key) {
  console.log(obj.key);
}
printValue(ellie, "name"); //-> 입력된 key값이 function안에 정의된 key값과 달라 에러가 난다

//correct
function printValue(obj, key) {
  console.log(obj[key]); //-> 이럴땐 []로 선언되는 computed properties를 써야한다.
}
printValue(ellie, "name");

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 }; //-> 이런 반복을 줄이기 위해서
const person4 = new Person("ellie", 30);
console.log(person4);

//-> 이름, 나이를 입력해주는 함수를 이용해준다
//4. Constructor Function
function Person(name, age) {
  //->관습적으로 순수하게 오브젝트를 생성하는 함수는 첫글자를 대문자로 써줌
  this.name; //-> key와 value의 값이 같으면 생략 가능 (name: name, - > name,으로 줄일 수 있다)
  this.age;
}

//5. in operator: property existence check (key in obj)
console.log("name" in ellie); //-> true
console.log("age" in ellie); //->true
console.log("random" in ellie); //->false
console.log(ellie.random); //->undefined

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//to simplyfy
for (value of array) {
  console.log(value);
}

//7. Fun cloning
//object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder"; //-> user1에 할당된 name도 바뀌게 됨
console.log(user);

//아예 object를 복사하는 방법 : old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//object 자체를 복사하는 방법 : new way
//(**cmd를 누르고 함수를 클릭하면 함수에 대한 자세한 정보를 볼 수 있다)
const user4 = {};
Object.assign(user4, user); //복사가 일어날 변수, 복사의 대상이 되는 원본을 파라미터로 넣어준다
console.log(user4);
//more simple ver.
const user5 = Object.assign({}, user);
console.log(user5);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //-> blue가 출력됨 (뒤에 나오는 property가 앞의 property 값을 덮어쓰기때문)
console.log(mixed.size);
