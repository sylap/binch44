function Dilemma(numGates) {
  this.x = CANVAS_WIDTH;
  this.y = 0;
  this.xspeed = -1;
  this.yspeed = 0;

  this.numGates = numGates;
  this.gates = [];

  this.rewarded = false;

  for (var i = 0; i < numGates; i++) {
    this.gates.push( random([10, 20, -10, -20, random([10, 10, 300, 300, -1])]) );
  }

  this.id = -1;

  this.move = function() {
    this.x = this.x + this.xspeed * scl;
  } 

  this.death = function() {
      if (this.x < 0) {
          delete this;
          return true;
      }

      return false;
  }

  this.show = function() {
    noStroke();
    fill('#ff3232');
    rect(this.x-3, 0, 6, CANVAS_HEIGHT);

    stroke('#ff7332');
    strokeWeight(5);
    fill('#ffffff');
    for (var i = 1; i <= numGates; i++) {
      ellipse(this.x, CANVAS_HEIGHT / (this.numGates+1) * i, scl*10, scl*10);

      if (this.rewarded) {
        textSize(16);
        // textWidth = textWidth(gates[i-1]);
        text(this.gates[i-1], CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT / (this.numGates+1) * i);
      }
    }
  }

  this.isOver = function() {
    return this.x <= CANVAS_WIDTH/2;
  }

  this.isAlmostOver = function() {
    return !this.isOver() && this.x <= CANVAS_WIDTH/2 + 30;
  }

  this.getDilemmaId = function() {
    setId = function (id) { this.id = id; }

    /*$.ajax({
      type: "GET",
      url: 'dilemma/new',
      async: false,
      success: function(data) {
        setId(Number.parse(data));
      }
    });*/
  }

  this.getDilemmaId();
}
