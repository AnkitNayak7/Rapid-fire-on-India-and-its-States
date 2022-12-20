const chalk = require('chalk')
const readlineSync = require('readline-sync');

let userName = readlineSync.question('May I have your name? ');
console.log("Welcome ", `${userName}`)

console.log("Lets begin the game...\nChoose the answer by pressing the number infront of the answer");
const pressKey = readlineSync.question('Hit Enter key To start.', { hideEchoBack: true, mask: '' });
console.log(pressKey);

let score = 0

let ansDatabase = [
  {
    question: "India is a federal union comprising twenty-eight states and how many union territories?",
    options: ["6", "7", "8", "9"],
    correctAns: "8",
    explanation: "Presently, India comprises 28 States and 8 Union Territories. India is a democratic country and came into being on 15 August 1947, upon gaining independence."
  }, {
    question: "Which of the following is the capital of Arunachal Pradesh?",
    options: ["Itanagar", "Dispur", "Imphal", "Panaji"],
    correctAns: "Itanagar",
    explanation: "Itanagar is the capital of Arunachal Pradesh and is named after Ita fort which means fort od bricks, build around 14 century AD."
  }
  , {
    question: "Which of the following states is not located in the North?",
    options: ["Jharkhand", "Jammu and Kashmir", "Himachal Pradesh", "Haryana"],
    correctAns: "Jharkhand",
    explanation: "Jharkhand state is not located in the North. It is located in the northeastern part of the country. It is bordered by the states of Bihar to the north, West Bengal to the east, Odisha to the south, Chhattisgarh to the west, and Uttar Pradesh to the northwest. The capital of Jharkhand is Ranchi."
  }
  , {
    question: "Which is the largest coffee-producing state of India?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Arunachal Pradesh"],
    correctAns: "Karnataka",
    explanation: "Karnataka is the largest Coffee-producing state of India with 70.5% and is followed by Kerala, and Tamil Nadu."
  }, {
    question: "Which state has the largest area?",
    options: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh", "Rajasthan"],
    correctAns: "Rajasthan",
    explanation: "In terms of area, Rajasthan is the largest state in India which covers 342,239 sq km and as per Census 2011, the total population of the state is about 68548437."
  }

]


for (let i = 0; i < ansDatabase.length; i++) {
  index = readlineSync.keyInSelect(ansDatabase[i].options, ansDatabase[i].question); 3

  if (ansDatabase[i].correctAns === ansDatabase[i].options[index]) {
    console.log("Yes, you are right")
    console.log(chalk.blue.bgGreen("Explanation: ", ansDatabase[i].explanation))
    score++
  }
  else {
    console.log("Oops, you are wrong")
     console.log(chalk.blue.bgRed("Explanation: ", ansDatabase[i].explanation))
  }

  console.log(chalk.blue("And your score is: " + score))
  console.log("-------------------------------")

  if (i == ansDatabase.length - 1) {
    console.log(chalk.blue(`THANKS FOR PLAYING THE GAME ! ${userName} , \nYour Final Score is "${score}" `))
  }

}
