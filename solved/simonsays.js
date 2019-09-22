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
  for (let i = 1; i <= lines[0]; i++) {
    if (lines[i].startsWith('Simon says')) {
      console.log(lines[i].replace('Simon says', ''));
    }
  }
})