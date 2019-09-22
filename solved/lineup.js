const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

let players = [];

rl.on('line', (line) => {
  if(!isNaN(line)) return;
  players.push(line);
})

rl.on('close', () => {
  let c = [...players];
  c.sort();
  if(players.join("") === c.join("")) {
    console.log("INCREASING");
  } else if (players.join("") === c.reverse().join("")) {
    console.log("DECREASING");
  } else {
    console.log("NEITHER");
  }
})
