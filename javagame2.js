  function showManyGames() {
    function generateTask() {
  const operations = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];

  return {
    task: `${num1} ${operation} ${num2}`,
    answer: eval(`${num1}${operation}${num2}`)
  };
}

function checkAnswer(task) {
  const userAnswer = prompt(`Решите задачу: ${task.task}`);
  if (Number(userAnswer) === task.answer) {
    alert('Верно!');
  } else {
    alert(`Неверно. Правильный ответ: ${task.answer}`);
  }
}

while (true) {
  
  const task = generateTask();
  checkAnswer(task);

  if (confirm('Хотите решить еще одну задачу?')) {
    continue;
  } else {
    break;
  }
}
}