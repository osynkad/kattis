const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  console.log((Math.pow(parseInt(line), 2) * Math.PI).toFixed(6));
  console.log((Math.pow(parseInt(line), 2) * 2).toFixed(6));
});