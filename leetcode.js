//parlindrom

// var isPalindrome = function (x) {
//   let numtostr = x.toString();
//   let numberlength = x.toString().length;
//   for (let i = 0; i < numberlength / 2; i++) {
//     if (numtostr[i] !== numtostr[numberlength - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPalindrome(-10001));

//14. longest common prefix
var longestCommonPrefix = function (strs) {
  let longest = 0;

  // console.log(strs[0].substr(0, 2));
  // console.log(strs[1].substr(0, 2));
  // console.log(strs[2].substr(0, 2));
};
//console.log(longestCommonPrefix(["flower", "flow", "flight"]));

var isValid = function (s) {
  //if (s.length % 2 != 0) {
  //  return false;
  // }
  let open = new Array();

  function getType(c) {
    if ((c == "[") | (c == "]")) {
      return 1;
    } else if ((c == "(") | (c == ")")) {
      return 2;
    } else if ((c == "{") | (c == "}")) {
      return 3;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if ((s[i] == "(") | (s[i] == "[") | (s[i] == "{")) {
      open.push(s[i]);
    }
    if ((s[i] == ")") | (s[i] == "]") | (s[i] == "}")) {
      if (getType(s[i]) == getType(open[open.length - 1])) {
        open.pop();
      } else {
        return false;
      }
    }
  }

  if (open.length == 0) {
    return true;
  }
  return false;
};

console.log(isValid("()()((()())))))"));
