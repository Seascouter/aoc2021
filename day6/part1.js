const fs = require('fs');
const readline = require('readline');

let lanternfish = [];

async function processLine() {
	const fileStream = fs.createReadStream('input.txt');
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	
	for await (const line of rl) {
		for (let i = 0; i < line.length; i++) {
			if (line[i] != ',') {
				lanternfish.push(parseInt(line[i]));
			} 
		}
	}
	console.log(lanternfish);
	for (let k = 0; k < 80; k++) {
		processDay();
	}

	console.log(lanternfish.length);
}	

function processDay() {
	for (let i = 0; i < lanternfish.length; i++) {
		if (lanternfish[i] == 0) {
			lanternfish[i] = 6;
			lanternfish.push(9);
		} else {
			lanternfish[i] = lanternfish[i]-1;
		}
	}
}

processLine()
