const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (n) => {
  const m = Math.pow(2, parseInt(n)) + 1;
  console.log(Math.pow(m, 2));
});