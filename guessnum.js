const prompt = require('prompt-sync')({sigint: true});
 
const number = Math.floor(Math.random() * 100) + 1;
let answer = false;
 
while (!answer) {
  let guess = prompt('Guess the number (1-100): ');
  guess = Number(guess);
  if (guess === number) {
    console.log(`Correct! Answer is ${number}`);
    answer = true;
  } else if (answer !== number) {
    console.log('No, It isn\'t');
  } 
}
