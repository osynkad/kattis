const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let results = [1, 1, 2, 2, 2, 8];
  let nums = line.split(' ');
  for (let i = 0; i < nums.length; i++) {
    results[i] = results[i] - nums[i];
  }
  console.log(results.join(" "));
});