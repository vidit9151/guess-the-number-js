'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; //MAth .random give a number betweeen 0 and 1 in decimal⭐⭐Math.truc display the first number integer without decimal...WE multiplied math .ranodm by 20 becaue e want random numbers till 20 as for example .1 x20 =2 and .5 x20=10 we added 1 at last so .9x20=19.95903 so it will display 19 math will trunc display 19 so we added 1 so it is between 1 and 20
let score = 20;
let highscore = 0;
console.log(`Cheats: ${secretNumber}`);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.highscore').style.animation = 'none';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.message').style.animation = 'none';
  document.querySelector('.rainbow').style.animation = 'none';
  document.querySelector('body').style.backgroundColor = '#333';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  console.log(`Cheat: new value of Number ${secretNumber}`);
});
document.querySelector('.clear').addEventListener('click', function () {
  document.querySelector('.guess').value = null;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚫 Enter a number!';
    } else {
      document.querySelector('.rainbow').textContent =
        "You wern't able to guess the number😑";
      document.querySelector('.message').textContent = `❌GAME OVER!
                    press again to play again!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#EE4B2B';

      document.querySelector('number').style.width = '30rem';
    }
  } else if (secretNumber === guess) {
    if (score > 1) {
      document.querySelector(
        '.message'
      ).textContent = `Congradulations you choose the right number ${secretNumber} and your score is ${score}`;
      document.querySelector('.message').style.animation =
        'rainbow1 10s ease infinite ';
      document.querySelector('.rainbow').style.animation =
        'rainbow1 10s ease infinite ';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347'; //select style an then property
      document.querySelector('.number').style.width = '30rem'; //to increase wifth
      if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.highscore').style.animation =
          'rainbow1 10s ease infinite ';
      }
    } else {
      document.querySelector('.rainbow').textContent =
        "You wern't able to guess the number😑";
      document.querySelector('.message').textContent = `❌GAME OVER!
                    press again to play again!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#EE4B2B';

      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess > 20) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '🚫 Enter a number between 1 and 20!Its too high⚡';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.rainbow').textContent =
        "You wern't able to guess the number😑";
      document.querySelector('.message').textContent = `❌GAME OVER!
                    press again to play again!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#EE4B2B';

      document.querySelector('.number').style.width = '30rem';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚫 Its too low⭕';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.rainbow').textContent =
        "You wern't able to guess the number😑";
      document.querySelector('.message').textContent = `❌GAME OVER!
                    press again to play again!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#EE4B2B';

      document.querySelector('.number').style.width = '30rem';
    }
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚫 Its too High⚡';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.rainbow').textContent =
        "You wern't able to guess the number😑";
      document.querySelector('.message').textContent = `❌GAME OVER!
                     press again to play again!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#EE4B2B';

      document.querySelector('.number').style.width = '30rem';
    }
  }
});
//To make code smaller an to refactor it we can make functions of messagegues etc to make code smaller⭐⭐⭐ Its calle refactoring to make it DRY (DOnt repeat yourself)
