let actualProduct = [];
let productID = [];

const container = document.getElementById("container");
container.className = "d-flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";
container.style.gap = "10px";

const fetchProduct = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const { products } = await resp.json();
  actualProduct = products;
  newProducts(products);
};

const newProducts = (products) => {
  container.innerHTML = "";
  for (let product of products) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "25%";
    card.style.height = "520px";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header h-50";

    const image = document.createElement("img");
    image.src = product.thumbnail;
    image.className = "img-fluid";
    image.style.height = "250px";

    const h2 = document.createElement("h2");
    h2.innerText =
      product.title.length > 14
        ? product.title.slice(0, 13) + "..."
        : product.title;

    const p = document.createElement("p");
    p.innerText = product.description;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const filteredProduct = products.filter((prod) => {
        return prod.id !== product.id;
      });
      newProducts(filteredProduct);
    });

    const viewBtn = document.createElement("button");
    viewBtn.className = "btn btn-success";
    viewBtn.innerText = "View";

    viewBtn.setAttribute("data-bs-toggle", "modal");
    viewBtn.setAttribute("data-bs-target", "#viewModal");

    viewBtn.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("view-imageURL").src = product.thumbnail;
      document.getElementById("view-title").value = product.title;
      document.getElementById("view-price").value = product.price;
      document.getElementById("view-description").value = product.description;
      document.getElementById("view-category").value = product.category;
      setreadonly(document.getElementById("view-title"));
      setreadonly(document.getElementById("view-price"));
      setreadonly(document.getElementById("view-description"));
      setreadonly(document.getElementById("view-category"));
    });

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning";
    editBtn.innerText = "Edit";

    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editModal");

    editBtn.addEventListener("click", (event) => {
      event.preventDefault();
      productID = product.id;
      const imageURL = document.getElementById("edit-imageURL");
      imageURL.value = product.thumbnail;
      const title = document.getElementById("edit-title");
      title.value = product.title;
      const description = document.getElementById("edit-description");
      description.value = product.description;
    });

    cardHeader.append(image, h2, p, viewBtn, deleteBtn, editBtn);

    card.append(cardHeader);

    container.append(card);
  }
};
function setreadonly(element) {
  element.setAttribute("readOnly", "true");
}
fetchProduct();

function editProduct() {
  const title = document.getElementById("edit-title").value;
  const description = document.getElementById("edit-description").value;
  const imageURL = document.getElementById("edit-imageURL").value;
  const editedFinaldata = {
    id: productID,
    title,
    description,
    thumbnail: imageURL,
  };

  const editedProductData = actualProduct.map((product) => {
    // if(product.id === productID){
    //   return editedFinaldata;
    // }else{
    //   return product;
    // }
    return product.id === productID ? editedFinaldata : product;
  });
  actualProduct = editedProductData;

  newProducts(editedProductData);
  document.getElementById("edit-closebtn").click();
}

function addProduct() {
  const imageURL = document.querySelector("#imageURL").value;
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const category = document.querySelector("#category").value;
  let newProduct = {
    id: Date.now(),
    title,
    description,
    thumbnail: imageURL,
  };

  actualProduct = [newProduct, ...actualProduct];
  newProducts(actualProduct);
  document.getElementById("closebtn").click();
  // console.log({imageURL,title,price,description,category})
}
