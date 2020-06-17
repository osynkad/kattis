const readLine = require('readline');
const fs = require('fs');

const rl = readLine.createInterface({
  input: fs.createReadStream('./1.in'),
  output: process.stdout
});

const vertices = {
  x: {

  },
  y: {

  }
};

rl.on('line', (line) => {
  const [x, y] = line.split(" ");

  if (!vertices.x[x]) vertices.x = { ...vertices.x, [x]: 1 }
  else vertices.x = { ...vertices.x, [x]: vertices.x[x] + 1 }

  if (!vertices.y[y]) vertices.y = { ...vertices.y, [y]: 1 }
  else vertices.y = { ...vertices.y, [y]: vertices.y[y] + 1 }
});

rl.on('close', () => {
  const log = [];
  for (let dim in vertices) {
    for (let key in vertices[dim]) {
      if (vertices[dim][key] === 1) log.push(key)
    }
  }
  console.log(log.join(" "));
});