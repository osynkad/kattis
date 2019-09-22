const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

let count = 0;
let ignoreLines = 2;
let cities = [];

rl.on('line', (line) => {
  ignoreLines--;
  if(ignoreLines >= 0) return;

  if(isNaN(line)) {
    if(!cities.includes(line)) {
      count++;
      cities.push(line);
    }
  } else {
    console.log(count);
    count = 0;
  }
})

rl.on('close', () => {
  console.log(count);
})