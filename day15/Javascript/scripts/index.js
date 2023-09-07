// console.log("I'm here");

// Syntax , Declaring variables, Data Types

// var, let, const  {var is not used anymore, let the variable value can be changed, const variable value can't be changed}

var variableName;
var a;
var b;
var c;

let test;

const cd = 1;

// 8 Data Types

// 1. Number 1,2,3,4,5
let num = 2;
const secNum = 10;
console.log(num, typeof num);

// 2. String
let str = "Hi My name is Samaya";
const str2 = "2";
console.log(str, typeof str);

// 3. Boolean
let bool = true;
let bool2 = false;
console.log(bool, typeof bool);

// 4. Undefined
let notDef;

console.log(typeof notDef);

// 5. Null
let abc = null;
console.log(typeof abc);

// 6. BigInt 7. Symbol

// 8. Object
// key: value pair
let student1 = {
  name: "Samaya",
  age: 28,
  rollNo: 7,
  isPresent: true,
};
console.log(student1, typeof student1);

console.log(student1.name, typeof student1.name);
console.log(student1.age, typeof student1.age);

// Array
let newArr = [1, 2, 3, 4, 5];
let students = ["Ram", "Shyam", "Hari", "Sita"];
console.log(students);
let data = [1, "star", true, false, -99];

let newArObj = [
  student1,
  {
    test: "124",
  },
  true,
  false,
  {
    data: 123,
  },
];

console.log(newArObj);

// let num1 = 30;
// const num2 = 33;
// console.log(num1);
// num1 = "test";
// console.log(num1);

// Operators 1.Arithmetic Operators

const num1 = 10;
const num2 = 30;

const sum = num1 + num2;
console.log("sum", sum);

const sub = num1 - num2;
console.log("sub", sub);

const mul = num1 * num2;
console.log("mul", mul);

const div = num1 / num2;
console.log("div", div);

const rem = num2 % num1;
console.log("rem", rem);

// 2.Assignment Operator
let y = 10;
let z = 30;
// z = z + 30
z += 30;
console.log('z',z);
z -= 30;
console.log('z',z);
