const fs = require('fs');
const readline = require('readline');
const {isNullOrUndefined} = require('util');

let bitValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let commonValues = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

let gamma = '';
let epsilon = '';
let oxy = '';
let co2 = '';

async function processLineStepOne() {
	const fileStream = fs.createReadStream('input.txt');

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});

	for await (const line of rl) {
		for (let i = 0; i < line.length; i++) {
			if (line[i] == '1') {
				bitValues[i]+=1;
			} else {
				bitValues[i]+=-1;
			}
		}
	}

	sortCommonValues(bitValues);
	findGamma();
	findEpsilon();

	console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
}

async function processLineStepTwo() {
	const flieStream = fs.createReadStream('input.txt');

	const rl = readline.createInterface({
		input: flieStream,
		crlfDelay: Infinity
	});
	
	mostCommonBit = 0;

	for (let i = 0; i < 12; i++) {
		for await (const line of rl) {
			if (i != 0) {
				// gets most common bit
				if (line[i] == '1') {
					mostCommonBit += 1;
				} else {
					mostCommonBit += -1;
				}

				// tells array most common bit
				if (mostCommonBit >= 0) {
					commonValues[i][0] == 1;
				} else {
					commonValues[i][0] == 0;
				}
				mostCommonBit = 0;
			} else {
				// gets most common bit
				if (line[i] == '1') {
					mostCommonBit += 1;
				} else {
					mostCommonBit += -1;
				}
	
				// tells array most common bit
				if (mostCommonBit >= 0) {
					commonValues[i][0] == 1;
				} else {
					commonValues[i][0] == 0;
				}
				mostCommonBit = 0;
			}
			
		}
		
	}
}	

function sortCommonValues(valueArr) {
	for (let i = 0; i < valueArr.length; i++) {
		if (valueArr[i] > 0) {
			commonValues[i][0] = 1;
			commonValues[i][1] = 0;
		} else {
			commonValues[i][0] = 0;
			commonValues[i][1] = 1;
		}
	}
}

function findGamma() {
	for (let i = 0; i < commonValues.length; i++) {
		if (commonValues[i][0] == '1') {
			gamma += '1';
		} else {
			gamma += '0';
		}
	}
}
function findEpsilon() {
	for (let i = 0; i < commonValues.length; i++) {
		if (commonValues[i][1] == '1') {
			epsilon += '1';
		} else {
			epsilon += '0';
		}
	}
}

function clearVariables() {
	bitValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	commonValues = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
}

processLineStepOne();
clearVariables();

