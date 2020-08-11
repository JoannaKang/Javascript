// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reversed_array = array.reverse();
  console.log(reversed_array);
  console.log(array); //-> 원본 어레이도 뒤집히게 됨
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  //const result = array.splice(0,2); -> splice는 기존 어레이 자체를 변형
  const sliced_array = array.slice(2); //-> 새로운 array를 만드는 것
  console.log(sliced_array);
  console.log(array); //-> 원본 어레이는 그대로 있음
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function (student, index) {
  //   return student.score === 90;
  // });

  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  //map: 배열안에 들어있는 모든 요소들을 콜백함수를 호출하면서 콜백함수로 호출된 값을 리턴하는 것
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); //-> 배열의 요소 하나라도 요건을 충족하면 true 반환
  console.log(result);

  const result2 = students.every((student) => student.score >= 50); //-> 모든 요소가 조건을 만족할 때
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //-> 무언가 값을 누적시켜야 할 때
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
