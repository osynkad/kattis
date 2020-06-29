const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const regex = new RegExp(`.{1,${line.length / 3}}`, 'g');
  const words = line.match(regex);
  if (words[0] === words[1]) return console.log(words[0]);
  if (words[0] === words[2]) return console.log(words[0]);
  return console.log(words[1]);
});