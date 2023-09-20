//  Data Filtering and Aggregation
const data = [
  { product: "Widget", sales: 100, region: "North" },
  { product: "Gadget", sales: 200, region: "South" },
  { product: "Widget", sales: 150, region: "North" },
  { product: "Gadget", sales: 120, region: "South" },
];
let sum = 0;

const filterdItem = data.filter((val) => {
  return val.region === "North";
});
filterdItem.forEach((val) => {
  return (sum = sum + val.sales);
});
console.log(filterdItem);
console.log("Sum of region North only:",sum);
