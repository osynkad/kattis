const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const grades = [];

function sumInput(line) {
  return line.split(' ').reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0)
}

rl.on('line', line => {
  grades.push(sumInput(line));
})

rl.on('close', () => {
  console.log(grades.indexOf(Math.max(...grades)) + 1, Math.max(...grades))
})