function Player(name) {
  this.x = CANVAS_WIDTH/2;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;

  this.name = name;
  this.score = 0;
  this.gateChoice = 1;
  this.frames = 30;

  this.from_y = 0;
  this.to_y = 0;

  this.death = function() {
      gameOver = true;
  }

  this.update = function() {
    targety = CANVAS_HEIGHT / (dilemma.numGates+1) * this.gateChoice;

    if (abs(this.y - targety) <= 30)
      this.y = targety;
    else
      this.y += (this.y < targety ?+30 :-30);
  }

  this.show = function() {
    // body
    noStroke();
    fill('#62dfef');
    ellipse(this.x, this.y, scl*6, scl*6);
    fill(150);

    textSize(24);
    text('Score: ' + this.score, 50, 50);

    // name
    /*
    textSize(12);
    textwidth = textWidth(this.name);
    text(this.name, this.x - textwidth/2, this.y - 25, 300, 300);
    */
  }
}
