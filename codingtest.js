let x = -321;
// x = String(x);
// y = x.substring(1);
// y = y.split("");
// y = y.reverse();
// y = y.join("");
// console.log(x[0].concat(y));

// let x = -321;
// x = String(x);

// if (x[0].match(/[0-9]/)) {
//   console.log(true);
// }

//reverse string
// var reverse = function (x) {
//   x = String(x);

//   if (x[0].match(/[0-9]/)) {
//     x = x.reverse();
//     return x;
//   }

//   if (x[0] == "-") {
//     y = x.substring(1);
//     y = y.split("");
//     y = y.reverse();
//     y = y.join("");
//     return x[0].concat(y);
//   }

//   if (x[-1] == "0") {
//     y = y.reverse();
//     y = y(1);
//     return y;
//   }
// };
// console.log(reverse(-321));

//1.factorialize

// function factorialize(num) {
//   let total = 1;

//   while (num > 1) {
//     total = total * num;
//     num--;
//   }
//   return console.log(total);
// }

// factorialize(8);

//2. JavaScript: Capitalize the first letter of each word of a given string

// function capital_letter(str) {
//   str = str.split(" ");

//   for (let i = 0, x = str.length; i < x; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//   }
//   return console.log(str.join(" "));
// }

// capital_letter(
//   "write a javaScript program to capitalize the first letter of each word of a given string."
// );

//3.Palindrome
function palindrome(str) {
  let word = str.match(/[A-Za-z0-9]/g);
  word = word.join("");
  word = word.toLowerCase();
  let wordlength = word.length;

  console.log(wordlength);
  for (let i = 0; i < wordlength / 2; i++) {
    if (word[i] !== word[wordlength - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("aaddc8956467854678aa"));
