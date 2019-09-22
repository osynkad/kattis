const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

//thank you soh cah toa

rl.on('line', (line) => {
  let h = line.split(" ")[0];
  let a = line.split(" ")[1];
  console.log(Math.ceil(h/Math.sin(a * Math.PI / 180)));
})
