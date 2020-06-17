const readLine = require('readline');
const fs = require('fs');

const rl = readLine.createInterface({
  input: fs.createReadStream('./filip.dummy.3.in'),
  output: process.stdout
});


rl.on('line', (line) => {
  let [first, second] = line.split(" ");
  first = first.split("").reverse().join("");
  second = second.split("").reverse().join("");

  if (first > second) return console.log(first);
  console.log(second);
});