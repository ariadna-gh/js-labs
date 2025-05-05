const userInfo = user => "Користувач " + user.name + ", " + user.age + " років";
let user = { name: "Іван", age: 25 };
let result = userInfo(user);
console.log(result); 
