const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;

rl.on('line', (line) => {
  if (!n) return n = line;

  const [r, e, c] = line.split(" ");
  if (parseInt(e) - parseInt(c) > parseInt(r)) return console.log('advertise')
  if (parseInt(e) - parseInt(c) === parseInt(r)) return console.log('does not matter')
  return console.log('do not advertise')
});