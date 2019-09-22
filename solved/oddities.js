const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let skip = true;

rl.on('line', (line) => {
  if (!skip) {
    line % 2 !== 0 ? console.log(`${line} is odd`) : console.log(`${line} is even`);
  } else {
    skip = false;
  }
})