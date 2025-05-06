function createCar(customCar){
    const defaultCar = {
    brand: "Toyota",
    model: "Corolla",
    color: "Black",
};
return {...defaultCar, ...customCar};
};
const car1 = createCar({brand: "Honda", model: "Civic"});
console.log(car1);
