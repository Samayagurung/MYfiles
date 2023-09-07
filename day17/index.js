// Conditional Operator -> comparison operator

// if else condition

//Syntax
// if(condition){
//   block of code
// }else{
//   next block of code
// }

// let age = 27;

// let email = prompt('Enter your email');

// let password;

// // one false else condition works
// if (!email && !password) {
//   console.log("Please enter an email or password to cotinue");
// } else {
//   console.log(email,password);
// }
// // one false if condition works
// if (!email || !password) {
//   console.log("Please enter an email or password to cotinue");
// } else {
//   console.log(email,password);
// }

// if (!email) {
//   console.log("Please enter an email to cotinue");
// } else if(!password) {
//   console.log('Please enter password to continue');
// }else{
//   console.log('Valid email password')
// }

// if (age >= 18) {
//   alert("Eligible to drink for age "+ age);
// } else {
//   alert("Not eligible to drink for age "+ age);
// }

// let marks = prompt("Enter marks");

// let num = Number(marks);

// let message;

// if(num % 2 === 0){
//   message='Even'
// }else{
//   message='Odd'
// }

// if (num >= 80 && num <= 100) {
//   console.log('marks ' + num + ' is ' + message + ' and It is Distinction');
// } else if (num >= 70 && num < 80) {
//   console.log('marks ' + num + ' is ' + message + ' and It is First Division');
// } else if (num >= 65 && num < 70) {
//   console.log('marks ' + num + ' is ' + message + ' and It is Second Division');
// } else if (num >= 40 && num < 65) {
//   console.log('marks ' + num + ' is ' + message + ' and It is Third Division');
// } else if (num >= 0 && num < 40) {
//   console.log('marks ' + num + ' is ' + message + ' and It is fail');
// } else {
//   console.log("Marks doesnot exist");
// }

// Functions -> block of code which solves specific problem\

// Camel case
// let firstName;
// let lastNameTest;

// // Pascal case
// FirstName;
// lastNameTest;

// let email, password, gender, postalCode;
// function declartaion

// function functionName(){
//syntax
//block of code
//}

// function call

// functionName()

function sum(x,y,z) {

  document.write(x + y + z);

}
sum(1,2,3);
sum(10,10,10);
sum(2,2,2);
sum(1,1,1);

const number = prompt('Enter number')
const toNum = Number(number);

function calculateSeriesSum(num){
  //add logic here
  console.log('Sum of series till 10 is',sum)
}

calculateSeriesSum(toNum)