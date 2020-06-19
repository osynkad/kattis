const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const words = line.split(" ");
  const temp = [];

  for (let word of words) {
    if (!temp.includes(word)) {
      temp.push(word)
    } else {
      return console.log("no");
    }
  } console.log("yes");
});