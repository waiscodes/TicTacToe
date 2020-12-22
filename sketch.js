let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let players = ["X", "O"];
let currentPlayer;
let available = [];

function setup() {
  createCanvas(400, 400);
  currentPlayer = random(players);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      available.push([i, j]);
    }
  }
}

function nextTurn() {
  let index = floor(random(available.length));
  let spot = available.splice(index, 1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

function draw() {
  background(255);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot == players[0]) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  nextTurn();
}
