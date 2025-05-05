let num = [23, [5, [74, 5]], 89];
let flatNum = num.flat(2);
// якщо поставити (1) то вийде [23, 5, [74, 5], 89]
console.log(flatNum);