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
  let d = lines.map(num => {
    return num % 42;
  })
  let uniques = [...new Set(d)];
  console.log(uniques.length)
})