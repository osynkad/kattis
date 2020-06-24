const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let s, p;

rl.on('line', (line) => {
  if (!s) return s = line;
  if (!p) p = line;
  const diff = s.replace(p, "");

  if (s === p) return console.log("Yes");
  if (s === reverseCase(p)) return console.log("Yes");
  if (diff === s || diff === p) return console.log("No");
  if (diff.match(/^\d$/) !== null) return console.log("Yes");
  console.log("No");
});


function reverseCase(string) {
  const letters = string.split("");
  for (let letter of letters) {
    if (letter === letter.toUpperCase()) letters[letters.indexOf(letter)] = letter.toLowerCase();
    if (letter === letter.toLowerCase()) letters[letters.indexOf(letter)] = letter.toUpperCase();
  }
  return letters.join("");
}