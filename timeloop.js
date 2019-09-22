const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  var input = line.split(' ');
  
  for (let i = 1; i <= input[0]; i++) {
    console.log(`${i} Abracadabra`)
  }
});