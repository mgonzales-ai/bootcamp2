
/**
 * Build a program that generates a secret random number between 0 and 99 and gives the user 3 opportunities to guess the number.
 *   - Per each try except the last one, give a hint to the user letting them know if the secret number is greater or less than the input number.
 *   - If the user guesses the number, print ‘Congratulations! You found the secret!’.
 *   - If the user uses their 3 tries and didn’t get the number, print ‘That’s sad, the secret number was ___’, ___ should be the secret number.
 *   - The program can be designed to be only executed once, no need to restart the program after the process finishes.
 */
const promptUserGG = require("prompt-sync")({ sigint: true });
let userResponse: boolean;
do {
    const secretNumber: number = Math.floor(Math.random() * 100);
    let guessedCorrectly: boolean = false;
    for (let attempt = 1; attempt <= 5; attempt++) {
        const userGuessString: string = promptUserGG(`Attempt ${attempt}/3 - Guess the secret number (0-99): `) || "50"; // Default to "50" if input is empty
        const userGuess: number = Number.parseInt(userGuessString.trim());
        if (Number.isNaN(userGuess) || userGuess < 0 || userGuess > 99) {
            console.log("Invalid input. Please enter a number between 0 and 99.");
            continue;
        }
        if (userGuess === secretNumber) {
            guessedCorrectly = true;
            break;
        } else if (userGuess < secretNumber) {
            console.log("The secret number is greater than your guess.");
        } else { // userGuess > secretNumber
            console.log("The secret number is less than your guess.");
        }
    }
    if (guessedCorrectly) {
        console.log("Congratulations! You found the secret!");
    } else {
        console.log(`That's sad, the secret number was ${secretNumber}`);
    }
    // yes YES Yes yEs YeS
    userResponse = promptUserGG("Do you want to play the guessing game? (yes/no): ").toLowerCase() === "yes";
} while (userResponse);
console.log("Thanks for playing! Goodbye!");
 