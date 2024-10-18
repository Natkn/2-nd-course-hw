function showGameAnswer() {

const userAnswer = prompt(`Что выберешь: камень, ножницы или бумага ?`);

if (!userAnswer || !["камень", "ножницы", "бумага"].includes(userAnswer.toLowerCase())) {
    alert(`Некорректный ввод! Пожалуйста, выберите: камень, ножницы или бумага.`);
    return;
}

const choices = ["камень", "ножницы", "бумага"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

let result;

if (userAnswer.toLowerCase() === computerChoice) {
    result = `Ничья!`;
  } else if (
    (userAnswer.toLowerCase() === "камень" && computerChoice === "ножницы") ||
    (userAnswer.toLowerCase() === "ножницы" && computerChoice === "бумага") ||
    (userAnswer.toLowerCase() === "бумага" && computerChoice === "камень")
  ) {
    result = `Вы победили!`;
  } else {
    result = `Компьютер победил!`;
  }

  alert(`Вы выбрали: ${userAnswer}`);
  alert(`Компьютер выбрал: ${computerChoice}`);
  alert(result);
}

showGameAnswer();




