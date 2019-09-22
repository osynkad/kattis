const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  console.log(parseInt(parseInt(line).toString(2).split("").reverse().join(""), 2));
})