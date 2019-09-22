const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a;
let b;

rl.on('line', (line) => {
  if (!parseInt(a)) {
    a = line;
  } else {
    b = line;
  }
});

rl.on('close', () => {
  if (a >= 0) {
    if (b >= 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (b >= 0) {
      console.log(2);
    } else {
      console.log(3)
    }
  }
})