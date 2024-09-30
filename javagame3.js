function showText() {

    const answerUser = prompt('Введите текст');

    let revText = answerUser.split('').reverse().join('').toLowerCase(); 
    
    alert(`Перевернутый текст: ${revText}`); 
  }