
//РЕШЕНИЕ ЗАДАЧИ 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 
 console.log(people.sort(((a, b) => a.age - b.age)));



 //РЕШЕНИЕ ЗАДАЧИ 2

 function isPositive(number) {
  return  number > 0 ;
    }

    function isMale(person) {
    return person.gender === 'male';
    }


    function filter(arr, ruleFunction) {
    const output = [];

 for (let i = 0; i < arr.length; i++) {
 output.push(ruleFunction(arr[i]));
}
      
 return output;
 }
    
    
console.log(filter([3, -4, 1, 9], isPositive));
    
    const peoples = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peoples, isMale));




 //РЕШЕНИЕ ЗАДАЧИ 3
    
let currentDate = new Date();

const timer = (deadline) => {
const interval = setInterval(() => {
 console.log(currentDate);
}, 3000);
 
setTimeout(() => {
 clearInterval(interval);
console.log(`30 секунд прошло`);
}, deadline * 1000)
 };
 
 timer(30);



//РЕШЕНИЕ ЗАДАЧИ 4

 function delayForSecond(callback) {
setTimeout(callback, 1000 );
  
}

delayForSecond(function () {
console.log('Привет, Глеб!');
})



//РЕШЕНИЕ ЗАДАЧИ 5

function delayForSecond(cb) {
setTimeout(() => {
console.log(`Прошла одна секунда`);
if(cb) {  cb(); }
}, 1000)
}

function sayHi (name) {
console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi(`Глеб`));