const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cases;
let isPositions = false;

rl.on('line', (line) => {
  isPositions = !isPositions;
  if (!cases) return cases = line;
  if (!isPositions) return;

  const positions = line.split(" ");
  positions.sort((a, b) => a - b);

  console.log((positions[positions.length - 1] - positions[0]) * 2);
});