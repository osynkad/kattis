const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

let row = 1;
const blimps = [];

rl.on('line', (line) => {
  if (line.includes('FBI')) blimps.push(row);
  row++;
})

rl.on('close', () => {
  if (!blimps.length) return console.log('HE GOT AWAY!')
  console.log(blimps.join(" "));
})
