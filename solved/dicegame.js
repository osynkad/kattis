const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0, m = 0;

rl.on('line', (line) => {
  if (!n) return n = line.split(" ");
  if (!m) m = line.split(" ");
  const gunnar = n.reduce(((acc, current) => parseInt(acc) + parseInt(current)), 0);
  const emma = m.reduce(((acc, current) => parseInt(acc) + parseInt(current)), 0);

  if (emma > gunnar) return console.log("Emma");
  else if (gunnar === emma) return console.log("Tie")
  return console.log("Gunnar");
});
