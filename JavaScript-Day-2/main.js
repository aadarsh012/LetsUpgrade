const foodData = [
  { name: "Biryani", price: 150, quantity: 60 },
  { name: "Mutton", price: 700, quantity: 20 },
  { name: "Chicken", price: 200, quantity: 100 },
  { name: "Raita", price: 100, quantity: 30 },
  { name: "Salad", price: 50, quantity: 70 }
];

for (let food in foodData) {
  console.log(`Name: ${foodData[food].name}, Price: ${foodData[food].price}, Quantity: ${foodData[food].quantity}`);
}
