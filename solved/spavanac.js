const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  let time = line.split(' ');
  if (parseInt(time[1]) >= 45) {
    console.log(parseInt(time[0]), parseInt(time[1]) - 45);
    return;
  }

  if (parseInt(time[0]) === 0) {
    console.log(23, parseInt(time[1]) - 45 + 60)
    return;
  }

  console.log(parseInt(time[0]) - 1, parseInt(time[1]) - 45 + 60)
})