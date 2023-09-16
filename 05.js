var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

function determineWinner(player1, player2) {
    if (player1 === "ataque" && player2 === "ataque") {
      return "Aniquilacao mutua";
    } else if (player1 === "papel" && player2 === "papel") {
      return "Ambos venceram";
    } else if (player1 === "pedra" && player2 === "pedra") {
      return "Sem ganhador";
    } else if (
      (player1 === "ataque" && player2 === "pedra") ||
      (player1 === "pedra" && player2 === "papel") ||
      (player1 === "ataque" && player2 === "papel")
    ) {
      return "Jogador 1 venceu";
    }  else {
      return "Jogador 2 venceu";
    } 
  }
  
  lines.shift()
  
  var pairs = [];
  
  for (let i = 0; i < lines.length; i += 2) {
    pairs.push([lines[i], lines[i + 1]]);
  }
  
  pairs.forEach((pair) => console.log(determineWinner(pair[0], pair[1])))
  