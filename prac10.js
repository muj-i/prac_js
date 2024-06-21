function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(`Vowels found in "${str}" is: ${count}`);
  console.log(`Consonants found in "${str}" is: ${str.length - count}`);
}

countVowels("mujahedul islam");
countVowels("sumya afrin suma");

let arr = ["mujahedul", "islam", "sumya", "afrin", "suma"];

let evenArr = arr.filter((_item, idx) => idx % 2 === 0);

console.log(arr);
console.log(evenArr);

const array = [1, 2, 3, 4];

const output = array.reduce((acc, curr) => {
  return acc + curr;
});

console.log(output);
