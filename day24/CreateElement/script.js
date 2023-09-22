// Create Element

// const button = document.createElement("button");
// button.innerText = "Submit";
// button.className = "btn btn-outline-primary";
// button.id = "unique-btn";

// const container = document.getElementById("container");
// container.append(button);

// console.log(button);

// const breakTag = document.createElement("br");
// container.append(breakTag);

// const cancelButton = document.createElement("button");
// cancelButton.innerText = "Cancel";
// cancelButton.className = "btn btn-outline-danger";

// container.append(cancelButton);

// const ul = document.createElement('ul')
// ul.className="list-group"

// const li1= document.createElement('li')
// li1.className="list-group-item active"
// li1.innerText="An active item"

// ul.appendChild(li1)

// const li2= document.createElement('li')
// li2.className="list-group-item"
// li2.innerText="An item"

// ul.appendChild(li2)

// const li3= document.createElement('li')
// li3.className="list-group-item"
// li3.innerText="An item"

// ul.appendChild(li3)

// const li4= document.createElement('li')
// li4.className="list-group-item"
// li4.innerText="An item"

// ul.appendChild(li4)

// container.append(ul)

const container = document.getElementById("container");
const cardContainer = document.createElement("div");
container.className = "card";
container.style.width = "18rem";

const img = document.createElement("img");
img.className = "card-img-top";
img.src =
  "https://images.unsplash.com/photo-1694112867341-8a2087c50c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80";
img.alt = "...";

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const h5 = document.createElement("h5");
h5.className = "card-title";
h5.innerText = "Card title";

const p = document.createElement("p");
p.className = "card-text";
p.innerText =
  "Some quick example text to build on the card title and makeup the bulk of the catrds content";

const button = document.createElement("button");
button.className = "btn btn-primary";
button.innerText = "Go somewhere";

cardBody.append(img, h5, p, button);
container.append(cardBody);
