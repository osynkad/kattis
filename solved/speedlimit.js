const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;

let [miles, elapsed] = [0, 0];

rl.on('line', (line) => {
  if (parseInt(line) === -1) return console.log(`${miles} miles`);
  if (line.split(" ").length < 2) return op(line);
  const [s, t] = line.split(" ");
  miles += (t - elapsed) * s;
  elapsed = t;
});

function op(line) {
  if (!n) return n = line;
  console.log(`${miles} miles`);
  [miles, elapsed] = [0, 0];
  return n = line;
}