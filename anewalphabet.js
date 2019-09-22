const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const alphabet = {
  a: '@',
  b: '8',
  c: '(',
  d: '|)',
  e: '3',
  f: '#',
  g: '6',
  h: '\[-]',
  i: '|',
  j: '_|',
  k: '|<',
  l: '1',
  m: '[]\\/[]',
  n: '[]\\[]',
  o: '0',
  p: '|D',
  q: '(,)',
  r: '|Z',
  s: '$',
  t: '\'][\'',
  u: '|_|',
  v: '\\/',
  w: '\\/\\/',
  x: '}{',
  y: '`/',
  z: '2'
}

rl.on('line', line => {
  let letters = line.split('');
  const converted = letters.map(letter => {
    if (alphabet[letter.toLowerCase()]) {
      return alphabet[letter.toLowerCase()]
    }
    return letter;
  })
  console.log(converted.join(""));
})