let n = 3;

do {
  userInput = prompt("Guess a number:");
  if (userInput != n) {
    console.log("You have entered the wrong number");
    userInput = prompt("You have entered the wrong number. Please try again:");
  } else {
    console.log("You have entered the correct number");
  } 
} while (userInput != n);