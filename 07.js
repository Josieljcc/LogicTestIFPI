var n = parseInt(lines[0]);

var songs = [
  "PROXYCITY",
  "P.Y.N.G.",
  "DNSUEY!",
  "SERVERS",
  "HOST!",
  "CRIPTONIZE",
  "OFFLINE DAY",
  "SALT",
  "ANSWER!",
  "RAR?",
  "WIFI ANTENNAS",
];

for (let i = 1; i <= n; i++) {
  const [x, y] = lines[i].trim().split(' ').map(Number);
  const songIndex = x + y;
  console.log(songs[songIndex]);
}