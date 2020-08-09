//console.log("Hello World");

//1. Use strict
"use strict";

//2. variable, rw(read/write)
//변수를 선언, 할당
let globalName = "global name";
{
  let name = "joanna";
  console.log(name);
  name = "sooyeon";
  console.log(name);
}
console.log(name);
console.log(globalName);

//3. Constants, r(read only)
const count = 17;
const size = 17.1;

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type ${typeof size}`);

const char = "c";
console.log(`value: ${char}, type: ${typeof char}`);

const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
