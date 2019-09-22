const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  let short = "";
  let letters = line.split("");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== letters[i-1]) {
      short += letters[i];
    }
  }

  console.log(short);
})