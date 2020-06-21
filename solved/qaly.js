const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let periods;
let tq = 0;

rl.on('line', (line) => {
  if (!periods) return periods = line;
  const [q, y] = line.split(" ");
  tq += q * y;
});

rl.on('close', () => {
  console.log(tq.toFixed(3));
})