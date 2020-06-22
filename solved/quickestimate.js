const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cases;

rl.on('line', (line) => {
  if (!cases) return cases = line;
  console.log(line.length);
});