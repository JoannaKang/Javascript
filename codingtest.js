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

var reverse = function (x) {
  x = String(x);

  if (x[0].match(/[0-9]/)) {
    x = x.reverse();
    return x;
  }

  if (x[0] == "-") {
    y = x.substring(1);
    y = y.split("");
    y = y.reverse();
    y = y.join("");
    return x[0].concat(y);
  }

  if (x[-1] == "0") {
    y = y.reverse();
    y = y(1);
    return y;
  }
};
console.log(reverse(-321));
