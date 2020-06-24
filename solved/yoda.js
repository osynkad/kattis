const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, m;

rl.on('line', (line) => {
  if (!n) return n = line.split("");
  if (!m) m = line.split("");

  const length = n.length > m.length ? m.length : n.length;
  const diff = n.length > m.length ? n.length - m.length : m.length - n.length;

  if (n.length > m.length) {
    for (let i = 0; i < length; i++) {
      if (n[i + diff] > m[i]) m[i] = null;
      else if (n[i + diff] === m[i]) continue;
      else n[i + diff] = null;
    }
  } else {
    for (let i = 0; i < length; i++) {
      if (n[i] > m[i + diff]) m[i + diff] = null;
      else if (n[i] === m[i + diff]) continue;
      else n[i] = null;
    }
  }

  isNaN(parseInt(n.join(""))) ? console.log("YODA") : console.log(parseInt(n.join("")));
  isNaN(parseInt(m.join(""))) ? console.log("YODA") : console.log(parseInt(m.join("")));
});

