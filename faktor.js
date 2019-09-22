const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (line) => {
  let nums = line.split(' ');
  let a = nums[0];
  let b = nums[1];
  console.log(a * b - (a - 1));
});