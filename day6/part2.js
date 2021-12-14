const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();
const inputArray = input.split(',');

const lanternfishSchool = {};
for (let i = 0; i < 9; i++) {
  lanternfishSchool[i] = 0;
}


inputArray.forEach(fishTimer => {
	if (fishTimer == 0) {
		lanternfishSchool[0]++;
	} else if (fishTimer == 1) {
		lanternfishSchool[1]++;
	} else if (fishTimer == 2) {
		lanternfishSchool[2]++;
	} else if (fishTimer == 3) {
		lanternfishSchool[3]++;
	} else if (fishTimer == 4) {
		lanternfishSchool[4]++;
	} else if (fishTimer == 5) {
		lanternfishSchool[5]++;
	}
});

console.log(lanternfishSchool);
function grow(schoolObj) {
  const tempZero = schoolObj[0];
  for (let i = 0; i < 8; i++) {
    schoolObj[i] = schoolObj[i + 1];
  }
  schoolObj[8] = tempZero;
  schoolObj[6] += tempZero;
}

function numberAfterDays(schoolObj, days) {
  const schoolCopy = {...schoolObj};
  for (let i = 0; i < days; i++) {
    grow(schoolCopy);
  }
  return Object.values(schoolCopy).reduce((accu, curr) => accu + curr);
}

console.log(numberAfterDays(lanternfishSchool,256));
