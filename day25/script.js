// Body

const mainContainer = document.getElementById("main-container");
mainContainer.className="d-flex flex-wrap justify-content-center gap-2"



// Make Card Div

const cardDiv = document.createElement("div");

fetch("https://dummyjson.com/products/", {
  method: "GET",
})
  .then((resp) => {
    return resp.json();
  })
  .then((value) => {
    value.products.forEach((product) => {
      //Create Card and append
      const card = document.createElement("div");
      card.className = "card ";
      card.style.width="18%"
      card.style.height="400px"

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header h-50";

      const image = document.createElement("img");
      image.src=product.thumbnail;
      image.className = "card-img-top h-100";

      cardHeader.append(image);
      card.append(cardHeader);

      //Create Card Body and append
      const cardbody = document.createElement("div");
      cardbody.className = "card-body ";
      cardbody.style.textAlign = "center";

      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.innerText=product.brand;

      const p = document.createElement("p");
      p.className = "card-text";
      p.innerText=product.description;

      const button = document.createElement("button");
      button.className = "btn btn-primary";
      button.innerText = "Open";

      cardbody.append(h5, p, button);
      card.append(cardbody);

      mainContainer.append(card);
    });
  });
