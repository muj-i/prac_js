let inputNum = 55;

if (inputNum % 5 === 0) {
  console.log(inputNum, "is multiple of 5");
} else {
  console.log(inputNum, "is not multiple of 5");
}

let score = prompt("Enter your marks:");

if (score >= 80 && score <= 100) {
  console.log("You got A");
} else if (score >= 70 && score < 79) {
  console.log("You got B");
} else if (score >= 60 && score < 69) {
  console.log("You got C");
} else if (score >= 50 && score < 59) {
  console.log("You got D");
} else if (score >= 40 && score < 49) {
  console.log("You got E");
} else {
  console.log("You got F");
}
