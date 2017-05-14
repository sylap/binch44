var player;
// var dilemmas = [];
var dilemma;
var scl = 5;

CANVAS_WIDTH = 1000;
CANVAS_HEIGHT = 600;

var gameOver = false;

/* P5 functions */

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  frameRate(60)

  player = new Player("Dally");
  dilemma = new Dilemma(random([3, 4, 5]));

  // dilemmas.push(new_dilemma);
}

function draw() {
  background('#f0ffff');

  // for (var i = 0; i < dilemmas.length; i++)
  //   dilemmaFrame(dilemmas[i]);

  if ( ! gameOver) {
    dilemmaFrame();
    playerFrame();
  }
  else {
    fill("#000");
    textSize(36);
    text('D.E.A.D', CANVAS_WIDTH/2 - 100, CANVAS_HEIGHT/2 - 100);
  }
  
}

function keyPressed() {
  if ( ! dilemma.isAlmostOver()) {
    if (keyCode == UP_ARROW)
      player.gateChoice = constrain(player.gateChoice - 1, 1, dilemma.numGates);
    else if (keyCode == DOWN_ARROW)
      player.gateChoice = constrain(player.gateChoice + 1, 1, dilemma.numGates);
  }
  
  return 0;
}

/* Custom functions */

// Player

function playerFrame() {
  player.update();
  player.show();
  // playerControls();
}

function playerControls() {
    if (keyIsDown(UP_ARROW))
      player.gateChoice = constrain(player.gateChoice - 1, 1, dilemma.numGates);
    else if (keyIsDown(DOWN_ARROW))
      player.gateChoice = constrain(player.gateChoice + 1, 1, dilemma.numGates);
}

// dilemma

function dilemmaFrame() {
  dilemma.move();

  if(dilemma.isOver()) {
    let reward = getPlayerReward(player, dilemma);

    if (reward == -1) {
      player.death();
    }
    else {
      player.score += reward;
      // updateScore()
    }
  }

  if (dilemma.death()) {
    dilemma = new Dilemma(random([3, 4, 5]));
    player.gateChoice = constrain(player.gateChoice, 1, dilemma.numGates);
  }

  dilemma.show();
}

function getPlayerReward(player, dilemma) {
  // retVal = 5;
  // setRetVal = function(val) { retVal = val; }

  /*$.ajax({
    type: 'GET',
    url: 'dilemma/checkgate?id=' + dilemma.id + '&gate=' + player.gateChoice,
    async: false,
    success: function(data) {
      setRetVal(Number.parse(data));
    }
  });*/

  if (dilemma.rewarded)
    return 0;
  else {
    dilemma.rewarded = true;
    return dilemma.gates[player.gateChoice - 1];
  }
}

/*
function getActiveDilemma() {
  for (var i = 0; i < dilemmas.length; i++)
    if ( ! dilemmas[i].isOver())
      return dilemmas[i];
  return null;
}
*/