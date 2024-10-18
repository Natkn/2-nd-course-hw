
//РЕШЕНИЕ ЗАДАЧИ 1

const answer = 'js';
const up = answer.toUpperCase();

console.log(up);




//РЕШЕНИЕ ЗАДАЧИ 2

const words = ["Apple", "Banana", "Orange", "Apricot", "grape"];

const search = `banana`;

words.forEach((words) => {
if (words.toLowerCase().startsWith(search.toLowerCase())) {
    console.log(words);
}
})
;




//РЕШЕНИЕ ЗАДАЧИ 3

const dotNumber = 32.58884;

console.log(Math.floor(dotNumber));
console.log(Math.ceil(dotNumber));
console.log(Math.round(dotNumber));




//РЕШЕНИЕ ЗАДАЧИ 4

const oddNumbers = [52, 53, 49, 77, 21, 32];

console.log (Math.min(...oddNumbers));
console.log (Math.max(...oddNumbers));




//РЕШЕНИЕ ЗАДАЧИ 5

let num = Math.random() * 10;
console.log ( Math.floor(num));




//РЕШЕНИЕ ЗАДАЧИ 6

function random(number) {
    const randomNumbers = [];
    const arrayLength = Math.floor(number / 2); 
  
    for (let i = 0; i < arrayLength; i++) {
      randomNumbers.push(Math.floor(Math.random() * (number + 1))); 
    }
    return randomNumbers;
  }
  
  const number = 8;
  const randomNum = random(number);
  console.log(randomNum);




//РЕШЕНИЕ ЗАДАЧИ 7

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumb= randomNumber(2, 10);
  console.log(randomNumb);





//РЕШЕНИЕ ЗАДАЧИ 8

  let currentDate = new Date();

console.log(currentDate);





//РЕШЕНИЕ ЗАДАЧИ 9

const currentData = new Date(); 

currentData.setDate(currentData.getDate() + 73); 

console.log(currentData);




//РЕШЕНИЕ ЗАДАЧИ 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let currentDates = new Date();

    let fullDate = "Сегодня: " + currentDates.getDate() + " " + months[currentDates.getMonth()] + " " + currentDates.getFullYear() + " - это " + days[currentDates.getDay()]; 
    let fullTime = "Время: " + currentDates.getHours() + ":" +  currentDates.getMinutes() + ":" + currentDates.getSeconds()
    
    console.log(fullDate);
    console.log(fullTime);