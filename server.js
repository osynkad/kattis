const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let total;
let times;

rl.on('line', (line) => {
  total ? times = line.split(' ') : total = line.split(' ');
})

rl.on('close', () => {
  let tasks = 0;
  total.shift();
  total = total.toString();

  for (let time of times) {
    total -= time;
    if (total >= 0) {
      tasks++;
    }
  }
  console.log(tasks);
})