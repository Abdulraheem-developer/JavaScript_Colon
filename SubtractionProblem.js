const prompt = require('prompt-sync')(); 

    let score = 0;
    let totalQuestions = 10;

    for (let i = 1; i <= totalQuestions; i++) {
      let num1 = Math.floor(Math.random() * 100) + 1;
      let num2 = Math.floor(Math.random() * 100) + 1;

      if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
      }

      let correctAnswer = num1 - num2;
      let isCorrect = false;

      for (let attempt = 1; attempt <= 2; attempt++) {
        let userAnswer = prompt(`Question ${i}: What is ${num1} - ${num2}?\nAttempt ${attempt}:`);

        if (parseInt(userAnswer) === correctAnswer) {
          alert("The answer is correct");
          score++;
          isCorrect = true;
          break;
        } else {
          alert("Incorrect.");
        }
      }

     
    }

  
