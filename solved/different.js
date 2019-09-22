const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let nums = line.split(' ').sort(((a, b) => {
    return b - a;
  }));

  console.log(nums[0] - nums[1]);
})