const fs = require('fs');
const readline = require('readline');

let binary = [];
let binaryC = [];

async function processLine() {
	const fileStream = fs.createReadStream('input.txt');

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});

	for await (const line of rl) {
		binary.push(line);
		binaryC.push(line);
	}
	oxy = solveO();
	co = solveC();
	console.log(parseInt(oxy, 2) * parseInt(co, 2));
}

function solveO() {



    let ones = 0, zeros = 0;

    let oxygen = '';
    for (let j = 0; j < binary[0].length; j++) {
        for (let i = 0; i < binary.length; i++) {
            if (binary[i][j] == '1') ones++;
            else zeros++;
        }

        if (ones >= zeros) binary = binary.filter(element => element[j] === '1');
        else binary = binary.filter(element => element[j] === '0');

        ones = 0;
        zeros = 0;
        if (binary.length == 1) {
            oxygen = binary[0];
            break;
        }
    }
	return oxygen;
}

function solveC(){

    let ones = 0, zeros = 0;

	let carbon = '';

    for (let j = 0; j < binaryC[0].length; j++) {
        for (let i = 0; i < binaryC.length; i++) {
            if (binaryC[i][j] == '1') ones++;
            else zeros++;
        }

        if (ones < zeros) binaryC = binaryC.filter(element => element[j] === '1');
        else binaryC = binaryC.filter(element => element[j] === '0');

        ones = 0;
        zeros = 0;
        if (binaryC.length == 1) {
            carbon = binaryC[0];
            break;
        }
    }
    
	return carbon;
}

processLine()
