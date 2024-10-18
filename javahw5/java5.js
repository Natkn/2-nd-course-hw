

//РЕШЕНИЕ ЗАДАЧИ 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
 console.log(numbers[i]);

  if (numbers[i] === 10) {
    break; 
  }
}


//РЕШЕНИЕ ЗАДАЧИ 2

const  nums = [1, 5, 4, 10, 0, 3];

let i = nums.indexOf(4);

console.log(i);



//РЕШЕНИЕ ЗАДАЧИ 3

const  mass = [1, 3, 5, 10, 20];

let joinedNum = mass.join(" ");
console.log(joinedNum);



//РЕШЕНИЕ ЗАДАЧИ 4

const masive = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}

console.log(masive); 


//РЕШЕНИЕ ЗАДАЧИ 5

const numberOne = [1, 1, 1];

numberOne.push(2, 2, 2);

console.log(numberOne);


//РЕШЕНИЕ ЗАДАЧИ 6

const del = [9, 8, 7, 'a', 6, 5];

del.sort();
del.pop();

console.log(del);



//РЕШЕНИЕ ЗАДАЧИ 7

const  guess = [9, 8, 7, 6, 5];

let userAnswer = +prompt(`Угадай число`);

if (guess.includes(+userAnswer))  {
    alert(`Угадал`);
} else  {
    alert('Не угадал');
}



//РЕШЕНИЕ ЗАДАЧИ 8

const str = 'abcdef';

let reversed = str.split('').reverse().join(''); 
console.log(reversed); 

const massTwo = [[1, 2, 3], [4, 5, 6]];
const singlenum = massTwo.flat();

console.log(singlenum);



//РЕШЕНИЕ ЗАДАЧИ 9

const sumNum = [3, 7, 1, 9, 5, 2, 10];

for (let i = 0; i < sumNum.length - 1; i++) {
  const sum = sumNum[i] + sumNum[i + 1];
  
  console.log(`${sum}`);
}




//РЕШЕНИЕ ЗАДАЧИ 10

const duble = [3, 7, 2, 9];

let multi = duble[i] * duble[i];

console.log(`${multi}`);



//РЕШЕНИЕ ЗАДАЧИ 11

function squareNum(numbers) {
  return numbers.map(number => number * number);
}

const count = [2,6,9,7];
const squareNum = squareNum(count);

console.log(squareNum); 



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
  
  const negative = [ -2, 3, -4, 5];
  const negativeNumbers = getNegativeNumbers(negative);
  
  console.log(negativeNumbers);




//РЕШЕНИЕ ЗАДАЧИ 14

  const slot = [];

for (let i = 0; i < 10; i++) {
  slot.push(Math.floor(Math.random() * 11)); 
}

const evenNumbers = slot.filter(number => number % 2 === 0);

console.log(`Исходный массив:`, slot);
console.log(`Массив с четными числами:`, evenNumbers);




//РЕШЕНИЕ ЗАДАЧИ 15

const empty = [];

for (let i = 0; i < 6; i++) {
  empty.push(Math.floor(Math.random() * 10) + 1); 
}


const average = empty.reduce((sum, number) => sum + number, 0) / empty.length;

console.log("Массив:", empty);
console.log("Среднее арифметическое:", average);