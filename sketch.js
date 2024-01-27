// initialize a counter variable
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(193, 220, 224);
  noStroke();

//canvas width=x and height=y variables
//  var x = -210 + count;
  var y = height;
  
// rectangle 1 orange
  fill(252, 115, 3);
  rect(-210 + count1, y*(1/6), 100, 50);
  
// rectangle 2 yellow
  fill(245, 212, 66);
  rect(-210 + count2, y*(2/6), 200, 40);
  
// rectangle 3 pink
  fill(252, 3, 252);
  rect(-210 + count3, y*(3/6), 140, 20);
  
// rectangle 4 blue
  fill(3, 74, 252);
  rect(-210 + count4, y*(4/6), 80, 50);
  
// rectangle 5-turquoise
  fill(3, 252, 181);
  rect(-210 + count5, y*(5/6), 170, 40);
  
// increment the counter variable
  count1 = count1 + 1.5;
  count2 = count2 + 2.5;
  count3 = count3 + 1.75;
  count4 = count4 + 2.25;
  count5 = count5 + 2;
}