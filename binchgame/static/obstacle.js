function Obstacle(number) {
  this.x = 700; //right edge of the screen
  this.y = 375;
  this.xspeed = -1;
  this.yspeed = 0;
  this.number = number;
  this.blocks = [];

  this.move = function() {
      this.x = this.x + this.xspeed * scl;
  }

  this.create = function() {
      for(i = 0; i<this.number; i++)
      {
          var c = color(random(256), random(256), random(256));
          this.blocks[i] = c;
          noStroke();
          fill(c);
          rect(this.x+300,100/this.number,60,100);
      }
  }

  this.death = function() {
      if(this.x<=-350)
      {
          delete this;
          return true;
      }
      return false;
  }

  /*this.randomizeSuccessOrFailure = function() {

  }*/

  this.show = function() {
    for(j = 0; j<this.blocks.length; j++)
    {
        noStroke();
        var temp = this.blocks[j];
        fill(temp);
        rect(this.x+300,(750/this.number)*j,10,750/this.number); //(this.y)/(j+1)+
    }
  }
}
