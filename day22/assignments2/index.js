//  Data Filtering and Aggregation
const data = [
  { product: "Widget", sales: 100, region: "North" },
  { product: "Gadget", sales: 200, region: "South" },
  { product: "Widget", sales: 150, region: "North" },
  { product: "Gadget", sales: 120, region: "South" },
];

let sum = 0;
data
  .filter((item) => {
    return item.region === "North";
  })
  .forEach((item) => {
    sum += item.sales;
  });
console.log(`${sum}`);

const text = "This is a simple example. This is just an example of word frequency.";
// the result should be in object: { this: 2, is: 2, a: 1, simple: 1, example: 2, just: 1, an: 1, of: 1, word: 1, frequency: 1 }

 

