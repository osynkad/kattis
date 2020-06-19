const readLine = require('readline');
const fs = require('fs');

const rl = readLine.createInterface({
  input: fs.createReadStream('./wip/1.in'),
  output: process.stdout
});

let cap, events, current = 0, denied = 0;

rl.on('line', (line) => {
  if (!cap) return [cap, events] = line.split(" ");

  const group = parseInt(line.split(" ")[1]);
  if (line.includes('enter')) {
    if (current + group <= cap) {
      return current += group;
    } else {
      return denied++;
    }
  } current -= group;
});

rl.on('close', () => {
  console.log(denied);
})