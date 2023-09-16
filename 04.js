var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  const pair = lines[i].split(' ');
  const X = parseInt(pair[0]);
  const Y = parseInt(pair[1]);

  Y === 0
    ? console.log('divisao impossivel')
    : console.log((X / Y).toFixed(1))
}