const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

const t = 4;

rl.on('line', (line) => {
  let [n, h, v] = line.split(" ");
  h = h > n - h ? h : n - h;
  v = v > n - v ? v : n - v;
  console.log(t * h * v);
})