// dom traverse

// 5 methods

/*
1- et element by id
2- get elements by class name
3- get elements by tag name
4- query selector
5- query selector all 
*/

// get element by id
const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");
const text3 = document.getElementById("text-3");

text1.className = "text-center";
text1.style.backgroundColor = "grey";
text1.style.color = "white";
text1.innerText = "NEW TOON"; // edit the content of the text only

text2.className = "text-success";
text2.style.backgroundColor = "yellow";
text2.innerHTML = "<h1>Hey How are u?</h1>"; // edit the content of html

text3.className = "text-danger text-center";
text3.innerHTML = "<strong>ORA ORA ORA</strong>";
text3.style.backgroundColor = "black";

console.log(text1);
console.log(text2);
console.log(text3);

// get element by class -> dynamic

const text5 = document.getElementsByClassName("text5");
for (let i = 0; i < text5.length; i++) {
  text5[i].style.backgroundColor = "green";
}
console.log(text5);

// get element by tag name -> dynamic

const tag = document.getElementsByTagName("h5");
console.log(tag);
for (let i = 0; i < tag.length; i++) {
  tag[i].style.color = "purple";
}

// query selector -> returns the first found class when there is multiple, and can select when there is no class or id

const text6 = document.querySelector(".text6");
console.log(text6);

const input = document.querySelector("input");
console.log(input);
console.log(input.value);

input.value = "gurung@gmail.com" // edit the value

// query selector all -> returns all
const text7 = document.querySelectorAll("h5");
console.log(text7);
