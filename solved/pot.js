const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;

rl.on('line', (line) => {
  if (parseInt(line.slice(0, line.length-1))) {
    sum += Math.pow(parseInt(line.slice(0, line.length-1)), parseInt(line.charAt(line.length-1)));
  }
});

rl.on('close', () => {
  console.log(sum);
})