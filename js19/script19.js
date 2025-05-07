const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.even += 1;}
    else {
        acc.odd += 1;
    }
    return acc;
}, { even: 0, odd: 0 }
);
console.log("Парні", count.even);
console.log("Непарні", count.odd);