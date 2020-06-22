const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cases;

rl.on('line', (line) => {
  if (!cases) return cases = line;
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const input = line.split("");
  for (let letter of input) {
    const lowercase = letter.toLowerCase();
    if (alphabet.indexOf(lowercase) !== -1) alphabet.splice(alphabet.indexOf(lowercase), 1);
  }

  if (alphabet.length) console.log(`missing ${alphabet.join("")}`);
  else console.log('pangram');
});