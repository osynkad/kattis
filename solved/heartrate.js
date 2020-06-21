const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cases;

rl.on('line', (line) => {
  if (!cases) return cases = parseInt(line);
  const [b, p] = line.split(" ");
  const bpm = 60 * b / p;
  console.log((bpm - 60 / p).toFixed(4), bpm.toFixed(4), (bpm + 60 / p).toFixed(4));
});