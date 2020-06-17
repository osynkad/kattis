const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = false;

rl.on('line', (line) => {
  if (input === false) return input = line.split(" ");
  const [matches, width, height] = [input[0], input[1], input[2]];
  if (line <= Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))) return console.log("DA");
  console.log("NE");
});