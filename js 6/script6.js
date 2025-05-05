let arr = [56, 12, 45, 47, 23, 52, 62, 48, 21];
let even = arr.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);