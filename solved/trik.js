const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
	let moves = line.split("");
	let cups = [1, 0, 0];

	moves.map((move) => {
		switch(move) {
			case "A":
				[cups[0], cups[1]] = [cups[1], cups[0]];
				break;
			case "B":
					[cups[1], cups[2]] = [cups[2], cups[1]];
				break;			
			case "C":
					[cups[0], cups[2]] = [cups[2], cups[0]];
				break;
		}
	})
	console.log(cups.indexOf(1) + 1);
})