const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let items = false;
let rounds = [];

rl.on('line', (line) => {
  if (!items) return items = line;
  const prices = line.split(" ");
  prices.sort((a, b) => b - a);
  for (let i = 0; i < prices.length; i += 3) {
    rounds.push([prices[i], prices[i + 1], prices[i + 2]]);
  }
});

rl.on('close', () => {
  let discount = 0;
  for (let round of rounds) {
    if (round[2]) discount += parseInt(round[2]);
  }
  console.log(discount);
});