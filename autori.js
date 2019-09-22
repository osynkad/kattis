const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  let shortened = "";
  let names = line.split("-");

  for (let name of names) {
    shortened += name.charAt(0);
  }

  console.log(shortened);
})