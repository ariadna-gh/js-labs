function summation(n){
    return n.length == 0 ? 0 : n[0] + summation(n.slice(1));
}
const numbers1 = [1, 2, 3, 4, 5, -8, 45, -56];
console.log(summation(numbers1));
//slice() створює новий масив, який є копією частини вихідного масиву.