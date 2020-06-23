const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let characters = {
  whitespace: 0,
  lowercase: 0,
  uppercase: 0,
  symbols: 0,
}

rl.on('line', (line) => {
  for (let i = 0; i < line.length; i++) {
    const charCode = line.charCodeAt(i);
    if (charCode === 95) characters.whitespace += 1;
    else if (charCode >= 97 && charCode <= 122) characters.lowercase += 1;
    else if (charCode >= 65 && charCode <= 90) characters.uppercase += 1;
    else characters.symbols += 1;
  }

  console.log((parseInt(characters.whitespace) / line.length).toFixed(15));
  console.log((parseInt(characters.lowercase) / line.length).toFixed(15));
  console.log((parseInt(characters.uppercase) / line.length).toFixed(15));
  console.log((parseInt(characters.symbols) / line.length).toFixed(15));
});