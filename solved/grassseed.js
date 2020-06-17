const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cost = false;
let lawns = false;
let tc = 0;

rl.on('line', (line) => {
  if (cost === false) return cost = line;
  if (lawns === false) return lawns = line;
  const [width, length] = line.split(' ');
  tc += (width * length) * cost;
});

rl.on('close', () => {
  console.log(tc.toFixed(7));
});