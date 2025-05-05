for (let i = 1; i <= 20; i++) {
    if (i%2==0)
       console.log(i);
 }

 let n = 8;
 while (n >= 1) {
    console.log(n);
    n--;
 }
 
 let k = 2;
 do {
    console.log("задайте позитивне число: ");
 } while (k <= 0);
 console.log("задано позитивне число: ", k);
 
 let person = {
    name: "Аріадна",
    age: 18,
    city: "Кривий Ріг"
 };
 for (let key in person) {
    console.log(key, person[key]);
 }
 
 let arr = [1, 'two', 3, 'four', 'five'];
 let reversed = arr.reverse(); 
 for (let num of reversed) {
    console.log(num);
 }
 
 let array_numbers = [12, 39, 60, 11, 4, 51, 23, 77];
 array_numbers.forEach(num => console.log(num));
 let map_res = array_numbers.map(num => num*num);
 console.log(map_res);
 let big_num = array_numbers.filter(num => num>=10);
 console.log(big_num);