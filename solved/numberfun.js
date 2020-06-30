const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cases;

rl.on('line', (line) => {
  if (!cases) return cases = line;
  const [a, b, c] = line.split(" ").map((x) => parseInt(x));
  if (a + b === c) return console.log("Possible");
  if (a - b === c || b - a === c) return console.log("Possible");
  if (a * b === c) return console.log("Possible");
  if (a / b === c || b / a === c) return console.log("Possible");
  console.log("Impossible");
});
