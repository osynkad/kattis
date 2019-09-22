const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let dictionary = {};


rl.on('line', (line) => {
  if (line.includes(' ')) {
    let word = line.split(' ');
    dictionary[word[1]] = word[0];
  } else if (line.length !== 0) {
    if (dictionary[line]) {
      console.log(dictionary[line])
    } else {
      console.log('eh');
    }
  }
});