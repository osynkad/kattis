const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  let count = 0;
  let temps = lines[1].split(' ');
  for (let t of temps) {
    if (t < 0) {
      count++;
    }
  }
  console.log(count);
})