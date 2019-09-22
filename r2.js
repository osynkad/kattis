const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let nums = line.split(' ');
  console.log(nums[1] * 2 - nums[0]);
})