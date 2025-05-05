let temperature = 20;
if (temperature < 15) {
   console.log("холодно");
} else if (temperature < 30) {
   console.log("тепло");
} else console.log("спекотно");

let num = 7;
let res = (num%2==0) ? "парне" : "не парне";
console.log(res);

let day = "середа";
switch (day) {
   case "понеділок":
      console.log("сьогодні понеділок");
      break;
   case "вівторок":
      console.log("сьогодні вівторок");
      break;
   case "середа":
      console.log("сьогодні середа");
      break;
   case "четвер":
      console.log("сьогодні четвер");
      break;
   case "п'ятниця":
      console.log("сьогодні п'ятниця");
      break;
   case "субота":
      console.log("сьогодні субота");
      break;
   case "неділя":
      console.log("сьогодні неділя");
      break;
   default:
      console.log("не є днем тижня");
}

let parol = "admin123";
let user = (parol == "admin111") ? "доступ дозволено" : "доступ заборонено"; 
console.log(user);