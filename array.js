//Array

//1.Declaration
const arr1 = new Array();
const arra2 = [1, 2];

//2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //-> 🍎
console.log(fruits[1]); //-> 🍌
console.log(fruits[2]); //-> undefined
console.log(fruits[fruits.length - 1]); //-> 🍌 마지막 아이템을 슬라이싱하려면 -1해줌

//3. Looping over an array
//print all fruits
//a.using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
//c. forEach ->배열안에 들어있는 밸류들마다 내가 전달한 함수들을 출력한다.
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index);
});
//arrow function 이용해서 간단하게 만들기
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
// push : add an item to the end
fruits.push("🍓", "🍑"); //-> ["🍎", "🍌", "🍓", "🍑"]
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); //-> ["🍎", "🍌"]
//unshift : add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits); //->  ["🍓", "🍋", "🍎", "🍌"]
//shift : add an item to the beginning
fruits.shift();
console.log(fruits); //-> ["🍋", "🍎", "🍌"]

//* Note! shift, unshift are slower than pop, push
//앞부터 데이터를 넣으려면 모든 데이터를 한칸씩 옆으로 옮긴 후 새 데이터를 넣어야 함
//앞부터 데이터를 삭제하려면 맨 앞의 아이템을 지우고 다 한칸씩 앞으로 옮겨야 함
//-> 전체 어레이를 움직여야 하므로 어레이의 길이가 긴 경우 매우 느릴 수 있다.
//-> 뒤부터 넣고 빼거나, 인덱스를 기준으로 데이터를 넣고 빼는건 빠름

//splice : remonve an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits); //-> ["🍋", "🍎", "🍌", "🍓", "🍑", "🍋"]
fruits.splice(1, 1);
//-> 어디서부터 지울건지, 몇개나 지울건지 / 몇개 지울건지 지정하지 않으면 시작하는 인덱스 이후부터 다 지워버림
console.log(fruits); //-> ["🍋", "🍌", "🍓", "🍑", "🍋"]
fruits.splice(1, 1, "🍏", "🍉"); //-> 지운 위치에 새로운 아이템을 삽입하는것도 가능
console.log(fruits); //-> ["🍋", "🍏", "🍉", "🍓", "🍑", "🍋"]

//combine two arrays
const fruits2 = ["🍐", "🥥"];
const newfruits = fruits.concat(fruits2);
console.log(newfruits); //-> ["🍋", "🍏", "🍉", "🍓", "🍑", "🍋", "🍐", "🥥"]

//5. Searching
//indexOf : find the index
console.clear();
console.log(fruits); //-> ["🍋", "🍏", "🍉", "🍓", "🍑", "🍋"]
console.log(fruits.indexOf("🍋")); //-> 0
console.log(fruits.indexOf("🍉")); //-> 2
console.log(fruits.indexOf("🥥")); //-> -1 (포함되지 않은 아이템인 경우 -1 리턴)
//includes
console.log(fruits.includes("🍉")); //-> True (해당 아이템이 어레이에 포함되어있음)
console.log(fruits.includes("🥥")); //-> False (해당 아이템이 어레이에 포함되어있지 않음)
//lastIndexOf
console.clear();
console.log(fruits); //-> ["🍋", "🍏", "🍉", "🍓", "🍑", "🍋"]
console.log(fruits.indexOf("🍋"));
console.log(fruits.lastIndexOf("🍋")); //-> 같은 아이템이 있는 경우 가장 마지막에 있는 인덱스를 리턴해줌
