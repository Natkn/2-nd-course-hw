//РЕШЕНИЕ ЗАДАЧИ 1

let i=0;
while(i<2){
    console.log("Привет");
    i++;
}

//РЕШЕНИЕ ЗАДАЧИ 2

let a=1;
while(a<=5){
    console.log(a);
    a++;
}
    


//РЕШЕНИЕ ЗАДАЧИ 3

let b=7;
while(b<=22){
    console.log(b);
    b++;
}
    

//РЕШЕНИЕ ЗАДАЧИ 4

const obj = {
"Коля" : '200',
"Вася" : '300',
"Петя" : '400'
 }
 
 for (let key in obj) {
    console.log(` Имя сотрудника: ${key}, Сумма: ${obj[key]}$`);
 }


 //РЕШЕНИЕ ЗАДАЧИ 5

let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Результат деления: " + n);
console.log("Количество итераций: " + num);


//РЕШЕНИЕ ЗАДАЧИ 6

let firstFriday = 5;

for (let i = firstFriday; i <= 31; i += 7) {
console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}