const products = [
    { name: "Banana", inStock: false },
    { name: "Bread", inStock: true },
    { name: "Orange", inStock: true },
    { name: "Cheese", inStock: false }
];
const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts);