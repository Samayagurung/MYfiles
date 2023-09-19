const array = [
  {
    id: 1,
    production: "Phone",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 20,
    rating: 3,
  },
  {
    id: 2,
    production: "Phone2",
    description: "loremloremlorem",
    price: 10000,
    currency: "MXN",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 30,
    rating: 4,
  },
  {
    id: 3,
    production: "Phone3",
    description: "loremloremlorem",
    price: 15000,
    currency: "NPR",
    address: {
      city: "kathmandu",
      postalCode: 2000,
    },
    discountPercent: 70,
    rating: 1,
  },
  {
    id: 4,
    production: "Phone4",
    description: "loremloremlorem",
    price: 1000,
    currency: "USD",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 30,
    rating: 4,
  },
  {
    id: 5,
    production: "Phone5",
    description: "loremloremlorem",
    price: 30000,
    currency: "MXN",
    address: {
      city: "Washington",
      postalCode: 2000,
    },
    discountPercent: 30,
    rating: 2,
  },
];

// //Delete

const deleteProduct = (id) => {
  const filteredProducts = array.filter((item) => {
    return item.id !== id;
  });
  console.log("filteredProducts", filteredProducts);
};
// deleteProduct(1);

// Syncronous Programming/ Async Programming

// Async

console.log("1");

setTimeout(() => {
  console.log("2");
}, 5000);

console.log("3");
console.log("4");

// callback functions & callback hell

const addition = (a, b, callback) => {
  setTimeout(() => {
    callback(a+b)
  }, 2000);

};
const logger = (value) => {
  console.log("Added value is following: ", value);
};

const data = addition(1, 2, logger);
logger(data);

// promise
let error=false;
const returnProducts = () =>{
  return new Promise((resolve,reject)=>{
    if(!error){
      resolve(array)
    }else{
      reject('Failed to fetch  data from backend')
    }
  })
}

returnProducts().then((value)=>{
  console.log(value)
})

