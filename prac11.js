let marks = [89, 76, 93, 78];

let filteredMarks = marks.filter((mark) => mark >= 90);

console.log(filteredMarks);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let factorial = marks.reduce((acc, curr) => {
  return acc * curr;
});

console.log(factorial);

rl.question("Enter a number: ", (n) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  rl.close();
  console.log(arr);
});
