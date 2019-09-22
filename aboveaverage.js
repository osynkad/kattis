const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  if (line.length <= 2) return;

  let nums = line.split(' ');
  nums.shift();
  
  let sum = nums.reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);

  let above = 0;
  for (let num of nums) {
    if(parseInt(num) > sum/nums.length) {
      above++;
    }
  }

  console.log((above/nums.length*100).toFixed(3) + '%');
})
