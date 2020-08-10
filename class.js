"use strict";

//class: templete
//object: instance of a class
//Javascript class - introduced in ES6
//-> syntatic sugar over prototype-based inheritance

//1. class declarations
class Person {
  //-> 클래스 이름을 만듬
  //constructor
  constructor(name, age) {
    //-> 생성자(constructor)를 이용해 필요한 데이터를 정의
    //files : 전달된 데이터를 각각의 fields에 넣어줌
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
    //-> 클래스 안의 이름을 출력하면서 hello 도 같이 출력해주는 methods
  }
}

//how to use defined class
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //-> this.로 입력받아온 age를 호출하는게 아니라 getter의 age를 받아오게 됨
    //-> age; 는 setter의 age를 호출하게 됨
  }
  get age() {
    //->getter
    return this._age;
    //->call stack error를 방지하기 위해 getter, setter 내 변수 이름은 다르게 설정해주어야 함
  }

  set age(value) {
    //->setter
    //if (value <0) {
    //    throw Error('age can not be negative')
    //} -> 직접적으로 에러메시지를 띄우는 방법
    this._age = value < 0 ? 0 : value; //-> 에러값을 대체할 값을 지정해두는 것
  }
}

const user1 = new User("Steve", "Jobs", -1);
//->이렇게 나이를 -로 잘못 설정하는 경우를 방지하기 위해 getter와 setter가 필요
console.log(user1.age);

//3. Fields (Public, Private) : Too soon!
class Experiment {
  publicField = 2; //->constructor 없이 class를 지정할 수 있다.
  #privateField = 0;
  //-> 클래스 내부에서만 값이 보이고 변경되는 값
}

const experiment = new Experiment();
console.log(experiment.publicField); //-> 2라고 출력됨
console.log(experiment.privateField); //->undefined

//4. Static properties and methods -> too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance : a way for one class to extend another class.
class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

//Shape의 속성들을 이용하여 Rectangle이라는 새 class를 만들고 싶다면
class Rectangle extends shape {} //-> extends라는 키워드를 이용해 shape을 연장해준다
class Triangle extends shape {
  draw() {
    super.draw(); //공통적으로 정의된 부모의 method도 호출해주고 싶다면
    console.log("🔼"); //-> overriding으로 재정의된 method
  }
  getArea() {
    //-> 필요한 함수만 재정의가 가능 (=overriding)
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
// (왼쪽의 오브젝트가 오른쪽의 인스턴스인지 아닌지 = 왼쪽 값이 오른쪽의 클래스로 인해 생성된것인지 아닌지를 체크 )
console.log(rectangle instanceof Rectangle); //-> True
console.log(triangle instanceof Rectangle); //-> False
console.log(triangle instanceof Triangle); //-> True
console.log(triangle instanceof shape); //-> True
console.log(triangle instanceof Object); //->True
console.log(triangle.toString());
