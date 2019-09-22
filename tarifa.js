const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let lines = [];

rl.on('line', line => {
  lines.push(line);
})

rl.on('close', () => {
  let x = parseInt(lines[0]);
  let n = parseInt(lines[1]);
  let pot = x * n;

  for (let i = 2; i < lines.length; i++) {
    pot -= parseInt(lines[i]);
  }
  console.log(pot + x);
})