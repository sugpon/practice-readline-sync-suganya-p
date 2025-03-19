const readline = require('readline-sync');

// Prompt for user's name and greet them
const name = readline.question("What is your name? ");
console.log(`Hello, ${name}! Let's test your JavaScript knowledge.`);

// Ask 5 questions and store responses
const answer1 = readline.question("1. What data type is used to store true or false values? ");
const answer2 = readline.question("2. What keyword is used to declare a constant variable in JavaScript? ");
const answer3 = readline.question("3. What is the result of 5 + '5' in JavaScript? ");
const answer4 = readline.question("4. What function converts a string to an numeric value in JavaScript? ");
const answer5 = readline.questionInt("5. What is 10 divided by 2? ");

// Print back the user's answers
console.log("\nYour Answers:");
console.log(`1. ${answer1}`);
console.log(`2. ${answer2}`);
console.log(`3. ${answer3}`);
console.log(`4. ${answer4}`);
console.log(`5. ${answer5}`);

console.log("\nThanks for playing, " + name + "!");
