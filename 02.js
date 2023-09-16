var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const ageInDays = parseInt(lines[0]);

const years = Math.floor(ageInDays / 365);
const remainingDays = ageInDays % 365;
const months = Math.floor(remainingDays / 30);
const days = remainingDays % 30;

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);