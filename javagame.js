
function showTextGame() {
    let userAnswer = prompt('Угадайте число от 1 до 100');
    if (userAnswer == 73) {
        alert('Ты угадал!');
    } else if (userAnswer < 73) {
        alert('Не угадал, больше.');
    } else {
        alert('Не угадал, меньше.');
    }
}