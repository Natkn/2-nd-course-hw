
function showTextGame() {
let answer = 73;
while (true) {
    let userAnswer = prompt('Угадайте число от 1 до 100');
   if (userAnswer == answer) {
        alert('Ты угадал!');
        break;
    }  else if (userAnswer < answer) {
        alert('Не угадал, больше.');
    } else {
        alert('Не угадал, меньше.');
    }
}
}
