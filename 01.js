var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const speedX = 60;
const speedY = 90;

// Calculate the relative speed in km/h
const relativeSpeed = speedY - speedX;

// Calculate the time in minutes
const timeMinutes = (input / relativeSpeed) * 60;

// Print the result
console.log(`${Math.floor(timeMinutes)} minutos`);