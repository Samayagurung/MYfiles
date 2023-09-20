// Cards with Js

const container = document.getElementById("container");

// create the mainContainer with the h2 & sub-title
// const mainContainer = document.createElement("div");
// mainContainer.className = "block";
// mainContainer.style.backgroundColor="orange"

// const mainTitle = document.createElement("h1");
// mainTitle.className = "text-primary";
// mainTitle.innerText = "Straw Hat Pirates";
// mainTitle.style.textAlign = "center";

// const subTitle = document.createElement("h3");
// subTitle.className = "text-danger";
// subTitle.innerText = "Our Crew";
// subTitle.style.textAlign = "center";

// mainContainer.append(mainTitle, subTitle);
// container.append(mainContainer);

// create the main container for the cards

// const mainContainer2=document.getElementById("card-container")

// // Create a div
const cardContainer = document.createElement("div");
cardContainer.className =
  "d-flex justify-content-center align-items-center flex-wrap";
cardContainer.style.backgroundColor = "gold";

const cardBox = document.createElement("div");
cardBox.className = "card";
cardBox.style.width = "25rem";
cardBox.style.border = "solid white";

const luffyImage = document.createElement("img");
luffyImage.className = "card-img-top";
luffyImage.src =
  "https://i.pinimg.com/750x/ff/63/78/ff6378cdd0c7fa42e679f3d359314ef4.jpg";

cardBox.append(luffyImage);

const cardBody = document.createElement("div");
cardBody.className = "card-body";

cardBox.append(cardBody);

const cardTitle = document.createElement("h2");
cardTitle.className = "card-title";
cardTitle.innerText = "Monkey D. Luffy";

cardBox.append(cardTitle);

const cardText = document.createElement("p");
cardText.className = "card-text";
cardText.innerText =
  "Monkey D. Luffy, also known as Straw Hat, is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters. He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King.";

cardBox.append(cardText);

const cardButton = document.createElement("button");
cardButton.className = "btn btn-danger";
cardButton.innerText = "Open Bounty";

cardBox.append(cardButton);

cardContainer.append(cardBox);

// Zoro Card
const cardBox2 = document.createElement("div");
cardBox2.className = "card";
cardBox2.style.width = "25rem";
cardBox2.style.border = "solid white";

cardContainer.append(cardBox2);

const zoroImage = document.createElement("img");
zoroImage.className = "card-img-top";
zoroImage.src =
  "https://cdn.idntimes.com/content-images/duniaku/post/20200817/roronoa-zoro-drink-3c442bc12ef090f0995a2cf93a9c4733.jpg";

cardBox2.append(zoroImage);

const cardBody2 = document.createElement("div");
cardBody2.className = "card-body";

cardBox2.append(cardBody2);

const cardTitle2 = document.createElement("h2");
cardTitle2.className = "card-title";
cardTitle2.innerHTML = "Ronoroa Zoro";

cardBox2.append(cardTitle2);

const cardText2 = document.createElement("p");
cardText2.className = "card-text";
cardText2.innerText =
  "Roronoa Zoro, also known as Pirate Hunter Zoro, is a main combatant of the Straw Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet, and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy.Born in the East Blue, Zoro is the son of Tera and Roronoa Arashi,making him a descendant of both the Shimotsuki Family of Wano Country and the legendary samurai, Shimotsuki Ryuma.";

cardBox2.append(cardText2);

const cardButton2 = document.createElement("button");
cardButton2.className = "btn btn-success";
cardButton2.innerText = "Open Bounty";

cardBox2.append(cardButton2);

// Nami Card
const cardBox3 = document.createElement("div");
cardBox3.className = "card";
cardBox3.style.width = "25rem";
cardBox3.style.border = "solid white";

cardContainer.append(cardBox3);

const namiImage = document.createElement("img");
namiImage.className = "card-img-top";
namiImage.src =
  "https://staticg.sportskeeda.com/editor/2023/03/474e0-16794903651247-1920.jpg?w=840";

cardBox3.append(namiImage);

const cardBody3 = document.createElement("div");
cardBody3.className = "card-body";

cardBox3.append(cardBody3);

const cardTitle3 = document.createElement("h2");
cardTitle3.className = "card-title";
cardTitle3.innerHTML = "Nami";

cardBox3.append(cardTitle3);

const cardText3 = document.createElement("p");
cardText3.className = "card-text";
cardText3.innerText =
  "Cat Burglar Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.She is the third member of the crew and the second to join, doing so during the Orange Town Arc.She was formerly a member of the Arlong Pirates and initially joined the Straw Hats so that she could rob them in order to buy back her village from Arlong. Her dream is to make a map of the entire world ";

cardBox3.append(cardText3);

const cardButton3 = document.createElement("button");
cardButton3.className = "btn btn-info";
cardButton3.innerText = "Open Bounty";

cardBox3.append(cardButton3);

// Usopp Card
const cardBox4 = document.createElement("div");
cardBox4.className = "card";
cardBox4.style.width = "25rem";
cardBox4.style.border = "solid white";

cardContainer.append(cardBox4);

const usoppImage = document.createElement("img");
usoppImage.className = "card-img-top";
usoppImage.src =
  "https://wallpapers.com/images/hd/one-piece-usopp-on-tree-branch-c0h7fulqgotcqmyj.jpg";

cardBox4.append(usoppImage);

const cardBody4 = document.createElement("div");
cardBody4.className = "card-body";

cardBox4.append(cardBody4);

const cardTitle4 = document.createElement("h2");
cardTitle4.className = "card-title";
cardTitle4.innerHTML = "Usopp";

cardBox4.append(cardTitle4);

const cardText4 = document.createElement("p");
cardText4.className = "card-text";
cardText4.innerText =
  "Cat Burglar Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.She is the third member of the crew and the second to join, doing so during the Orange Town Arc.She was formerly a member of the Arlong Pirates and initially joined the Straw Hats so that she could rob them in order to buy back her village from Arlong. ";

cardBox4.append(cardText4);

const cardButton4 = document.createElement("button");
cardButton4.className = "btn btn-dark";
cardButton4.innerText = "Open Bounty";

cardBox4.append(cardButton4);

// Sanji Card
const cardBox5 = document.createElement("div");
cardBox5.className = "card";
cardBox5.style.width = "25rem";
cardBox5.style.border = "solid white";

cardContainer.append(cardBox5);

const sanjiImage = document.createElement("img");
sanjiImage.className = "card-img-top";
sanjiImage.src = "https://www.gluwee.com/wp-content/uploads/2022/08/Sanji.jpg";

cardBox5.append(sanjiImage);

const cardBody5 = document.createElement("div");
cardBody5.className = "card-body";

cardBox5.append(cardBody5);

const cardTitle5 = document.createElement("h2");
cardTitle5.className = "card-title";
cardTitle5.innerHTML = "Sanji";

cardBox5.append(cardTitle5);

const cardText5 = document.createElement("p");
cardText5.className = "card-text";
cardText5.innerText =
  "Black Leg Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc.His dream is to find the rumored chef's paradise, All Blue, which is where the East Blue, West Blue, North Blue, and South Blue meet, along with their wildlife. ";

cardBox5.append(cardText5);

const cardButton5 = document.createElement("button");
cardButton5.className = "btn btn-warning";
cardButton5.innerText = "Open Bounty";

cardBox5.append(cardButton5);

// const breaktag=document.createElement("br")
// cardBox5.append(breaktag)

// Chopper Card
const cardBox6 = document.createElement("div");
cardBox6.className = "card";
cardBox6.style.width = "25rem";
cardBox6.style.border = "solid white";

cardContainer.append(cardBox6);

const chopperImage = document.createElement("img");
chopperImage.className = "card-img-top";
chopperImage.src =
  "https://www.themarysue.com/wp-content/uploads/2022/03/chopper-one-piece-straw-hats.jpg";

cardBox6.append(chopperImage);

const cardBody6 = document.createElement("div");
cardBody6.className = "card-body";

cardBox6.append(cardBody6);

const cardTitle6 = document.createElement("h2");
cardTitle6.className = "card-title";
cardTitle6.innerHTML = "Tony Tony Chopper";

cardBox6.append(cardTitle6);

const cardText6 = document.createElement("p");
cardText6.className = "card-text";
cardText6.innerText =
  "Tony Tony Chopper, also known as Cotton Candy Lover Chopper, is the doctor of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the sixth member of the crew and the fifth to join, doing so at the end of the Drum Island Arc. He was temporarily forced to join the Foxy Pirates during the Long Ring Long Land Arc, but was quickly returned to Luffy's crew";

cardBox6.append(cardText6);

const cardButton6 = document.createElement("button");
cardButton6.className = "btn btn-secondary";
cardButton6.innerText = "Open Bounty";

cardBox6.append(cardButton6);

// Nico Robin Card
const cardBox7 = document.createElement("div");
cardBox7.className = "card";
cardBox7.style.width = "25rem";
cardBox7.style.border = "solid white";

cardContainer.append(cardBox7);

const nicoRobinImage = document.createElement("img");
nicoRobinImage.className = "card-img-top";
nicoRobinImage.src =
  "https://staticg.sportskeeda.com/editor/2022/03/669db-16477247716001-1920.jpg";

cardBox7.append(nicoRobinImage);

const cardBody7 = document.createElement("div");
cardBody7.className = "card-body";

cardBox7.append(cardBody7);

const cardTitle7 = document.createElement("h2");
cardTitle7.className = "card-title";
cardTitle7.innerHTML = "Nico Robin";

cardBox7.append(cardTitle7);

const cardText7 = document.createElement("p");
cardText7.className = "card-text";
cardText7.innerText =
  "Nico Robin, also known by her epithet Devil Child and the Light of the Revolution, is the archaeologist of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the seventh member of the crew and the sixth to join, doing so at the end of the Arabasta Arc. She temporarily left the crew during the Water 7 Arc but rejoined during the Enies Lobby Arc.";

cardBox7.append(cardText7);

const cardButton7 = document.createElement("button");
cardButton7.className = "btn btn-primary";
cardButton7.innerText = "Open Bounty";

cardBox7.append(cardButton7);

// Franky Card
const cardBox8 = document.createElement("div");
cardBox8.className = "card";
cardBox8.style.width = "25rem";
cardBox8.style.border = "solid white";

cardContainer.append(cardBox8);

const frankyImage = document.createElement("img");
frankyImage.className = "card-img-top";
frankyImage.src =
  "https://media.hitekno.com/thumbs/2022/05/12/39043-one-piece-franky/730x480-img-39043-one-piece-franky.jpg";

cardBox8.append(frankyImage);

const cardBody8 = document.createElement("div");
cardBody8.className = "card-body";

cardBox8.append(cardBody8);

const cardTitle8 = document.createElement("h2");
cardTitle8.className = "card-title";
cardTitle8.innerHTML = "Franky";

cardBox8.append(cardTitle8);

const cardText8 = document.createElement("p");
cardText8.className = "card-text";
cardText8.innerText =
  "Iron Man Franky is the shipwright of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet.He is the crew's eighth member and the seventh to join, doing so at the end of the Post-Enies Lobby Arc. Born Cutty Flam, he chose to go by his nickname of Franky until eventually permanently discarding his true name per the request of Iceburg to hide his identity.";

cardBox8.append(cardText8);

const cardButton8 = document.createElement("button");
cardButton8.className = "btn btn-info";
cardButton8.innerText = "Open Bounty";

cardBox8.append(cardButton8);

container.append(cardContainer);
