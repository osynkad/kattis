const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let [n, b] = [false, false];
let score = 0;

rl.on('line', (line) => {
  if (!n) [n, b] = line.split(" ");
  const [num, suit] = line.split("");

  if (num === 'A') score += 11;
  else if (num === 'K') score += 4;
  else if (num === 'Q') score += 3;
  else if (num === 'T') score += 10;

  if (suit === b) {
    if (num === 'J') score += 20;
    if (num === '9') score += 14;
  } else {
    if (num === 'J') score += 2;
  }
});

rl.on('close', () => {
  console.log(score);
})