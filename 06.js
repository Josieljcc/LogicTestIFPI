var n = parseInt(lines[0]);

var hobbits = 0;
var humans = 0;
var elves = 0;
var dwarves = 0;
var magicians = 0;

for (let i = 1; i <= n; i++) {
  const [name, race] = lines[i].trim().split(' ');
  switch (race) {
    case 'X':
      hobbits++;
      break;
    case 'H':
      humans++;
      break;
    case 'E':
      elves++;
      break;
    case 'A':
      dwarves++;
      break;
    case 'M':
      magicians++;
      break;
  }
}

console.log(`${hobbits} Hobbit(s)`);
console.log(`${humans} Humano(s)`);
console.log(`${elves} Elfo(s)`);
console.log(`${dwarves} Anao(oes)`);
console.log(`${magicians} Mago(s)`);