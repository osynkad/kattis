const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  let nums = line.split(' ');
  let x = nums[0], y = nums[1], n = nums[2];

  for (let i = 1; i <= n; i++) {
    if (i % x === 0 && i % y === 0) {
      console.log('FizzBuzz')
    } else if (i % x === 0) {
      console.log('Fizz');
    } else if (i % y === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
})