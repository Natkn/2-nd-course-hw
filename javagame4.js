function showAnswer(){
    
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let correctAnswers = 0; 
    
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        alert(question.question); 
    
        for (let j = 0; j < question.options.length; j++) {
            alert(question.options[j]);
        }
    
        const userAnswer = prompt("Введите номер правильного ответа:");
    
        if (Number(userAnswer) === question.correctAnswer) {
            correctAnswers++;
            alert("Правильно!");
        } else {
            alert("Неверно!");
        }
    }
    
    alert(`Количество правильных ответов: ${correctAnswers}`);
}