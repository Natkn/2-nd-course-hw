// ЗАДАНИЕ 1


let passsword = 'katyaa';
let ask = prompt('Введите пароль');

if (ask === passsword) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}


// ЗАДАНИЕ 2


let c = 6;

if (c >0 && c< 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}



// ЗАДАНИЕ 3

let d = 46;
let e = 199;

if (d > 100  || e > 100 ) {
    console.log("Верно");
} else {
console.log("Неверно");
}


// ЗАДАНИЕ 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));



// ЗАДАНИЕ 5

let monthNumber = prompt("Введите число");

  switch (monthNumber) {
    case "12":
    case "1":
    case "2":
      alert("Зима");
      break;
    case "3":
    case "4":
    case "5":
      alert("Весна");
      break;
    case "6":
    case "7":
    case "8":
     alert("Лето");
      break;
    case "9":
    case "10":
    case "11":
      alert("Осень");
      break;
    default:
      alert("Некорректный номер месяца");
  }
 