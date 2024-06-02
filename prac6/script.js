let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let i  of marks) {
    sum += marks[i];
}

let avg = sum / marks.length;

console.log(`The average of the marks is ${avg}`);