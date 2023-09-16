var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = [];

for (let i = 0; i < 100; i += 1) {
  A.push(parseFloat(lines[i]));
}

A.forEach((number, i) => 
    number <= 10
    ? console.log(`A[${i}] = ${number.toFixed(1)}`)
    : null)