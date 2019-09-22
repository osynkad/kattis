const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let nums = line.split(' ').sort(((a, b) => {
    return a - b;
  }));

  for (let i = parseInt(nums[0]) + 1; i <= parseInt(nums[1]) + 1; i++) {
    console.log(i);
  }
});