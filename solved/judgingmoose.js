const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [l, r] = line.split(" ").map((x) => parseInt(x));
  const highest = l > r ? l : r;
  if (l + r === 0) return console.log("Not a moose");
  if (l === r) return console.log(`Even ${l * 2}`)
  else return console.log(`Odd ${highest * 2}`);
});