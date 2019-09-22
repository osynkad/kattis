const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (line) => {
  line.includes('ss') ? console.log("hiss") : console.log("no hiss");
});