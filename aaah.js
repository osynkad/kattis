const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
})

rl.on('close', () => {
  lines[0].length >= lines[1].length ? console.log('go') : console.log('no');
})