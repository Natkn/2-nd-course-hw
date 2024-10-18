//РЕШЕНИЕ ЗАДАЧИ 1

const num = (a,b) => {
    if (a > b) {
     return b;
    } else {
    return a;
    }
}

alert (num(76, 65));


//РЕШЕНИЕ ЗАДАЧИ 2

function isEven(num) {
    if (num % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  
  console.log(isEven(6));
  
 

  //РЕШЕНИЕ ЗАДАЧИ 3

  
 function add(a) {
    return  a * a;
  }
  
  console.log(`Квадрат данного числа равен ${add(9)}`);
  
  

 //РЕШЕНИЕ ЗАДАЧИ 4

 function age() {
    let userAge = +prompt(`Сколько вам лет?`);

    if (userAge < 0) {
        alert(`'Вы ввели неправильное значение'`);
    } else if (userAge <= 12) {
        alert('Привет, друг!');
    } else if (userAge > 13) {
        alert('Добро пожаловать!');
 }
}

  age(); 


   //РЕШЕНИЕ ЗАДАЧИ 5
   
   

   function Numbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))){
        return('Одно или оба значения не являются числом');
    } else {
        return Number(a) * Number(b); 
    }
   }


  let result = Numbers(5, `true`); 
  console.log(result); 
 
  

    //РЕШЕНИЕ ЗАДАЧИ 6

    function cubeNumber() {
        let userNumber = +prompt(`Введите число`);

        if (isNaN((userNumber))) {
            return 'Переданный параметр не является числом';
        } else {
            let result = (userNumber * userNumber * userNumber);
          return  `${userNumber} в кубе равняется ${result} `;
        }
       }
    
    
        let result = cubeNumber();
        console.log(result);


         //РЕШЕНИЕ ЗАДАЧИ 7
      
         const circle1 = {
            radius: 65,
            getArea(){
                console.log( Math.PI *  this.radius * this.radius);
            },
            getPerimeter(){
                console.log( Math.PI * this.radius * 2);
            }
         }

        
         const circle2 = {
            radius: 25,
            getArea(){
                console.log( Math.PI * this.radius * this.radius);
            },
            getPerimeter(){
                console.log( Math.PI * this.radius * 2);
            }
         }


         circle1.getArea();
         circle2.getArea();
         circle1.getPerimeter();
         circle2.getPerimeter();

    