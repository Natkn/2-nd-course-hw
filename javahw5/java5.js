

//РЕШЕНИЕ ЗАДАЧИ 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
 console.log(numbers[i]);

  if (numbers[i] === 10) {
    break; 
  }
}


//РЕШЕНИЕ ЗАДАЧИ 2

const  array = [1, 5, 4, 10, 0, 3];

let i = array.indexOf(4);

console.log(i);



//РЕШЕНИЕ ЗАДАЧИ 3

const  array = [1, 3, 5, 10, 20];

let joinedNum = array.join(" ");
console.log(joinedNum);



//РЕШЕНИЕ ЗАДАЧИ 4

const arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}

console.log(arr); 


//РЕШЕНИЕ ЗАДАЧИ 5

const num = [1, 1, 1];

  num.push(2, 2, 2);

console.log(num);


//РЕШЕНИЕ ЗАДАЧИ 6

const arr = [9, 8, 7, 'a', 6, 5];

arr.sort();
arr.pop();

console.log(arr);



//РЕШЕНИЕ ЗАДАЧИ 7

const  num = [9, 8, 7, 6, 5];

let userAnswer = +prompt(`Угадай число`);

if (num.includes(+userAnswer))  {
    alert(`Угадал`);
} else  {
    alert('Не угадал');
}



//РЕШЕНИЕ ЗАДАЧИ 8

const str = 'abcdef';

let reversed = str.split('').reverse().join(''); 
console.log(reversed); 

const Array = [[1, 2, 3], [4, 5, 6]];
const singleArray = Array.flat();

console.log(singleArray);



//РЕШЕНИЕ ЗАДАЧИ 9

const numbers = [3, 7, 1, 9, 5, 2, 10];

for (let i = 0; i < numbers.length - 1; i++) {
  const sum = numbers[i] + numbers[i + 1];
  
  console.log(`${sum}`);
}




//РЕШЕНИЕ ЗАДАЧИ 10

const numbers = [3, 7, 2, 9];

let multi = numbers[i] * numbers[i];

console.log(`${multi}`);



//РЕШЕНИЕ ЗАДАЧИ 11

function squareArray(numbers) {
  return numbers.map(number => number * number);
}

const Array = [2,6,9,7];
const squaredArray = squareArray(Array);

console.log(squaredArray); 



//РЕШЕНИЕ ЗАДАЧИ 12

function getWordLengths(words) {
    return words.map(word => word.length);
  }
  
  const strings = ["Hello", "Function", "JavaScript"];
  const lengths = getWordLengths(strings);
  
  console.log(lengths);



//РЕШЕНИЕ ЗАДАЧИ 13

  function getNegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
  }
  
  const numbers = [ -2, 3, -4, 5];
  const negativeNumbers = getNegativeNumbers(numbers);
  
  console.log(negativeNumbers);




//РЕШЕНИЕ ЗАДАЧИ 14

  const numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 11)); 
}

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(`Исходный массив:`, numbers);
console.log(`Массив с четными числами:`, evenNumbers);




//РЕШЕНИЕ ЗАДАЧИ 15

const numbers = [];

for (let i = 0; i < 6; i++) {
  numbers.push(Math.floor(Math.random() * 10) + 1); 
}


const average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

console.log("Массив:", numbers);
console.log("Среднее арифметическое:", average);