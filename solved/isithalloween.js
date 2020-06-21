const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if (line === 'OCT 31' || line === 'DEC 25') console.log('yup');
  else console.log('nope');
});