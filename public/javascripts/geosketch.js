var con = Math.PI/180;
var dummy=0;
function Rotation(theta)
  {
  this.sn = Math.sin(theta*con);
  this.cs = Math.cos(theta*con);
  }
function Vector(x,y)
  {
  this.x= x
  this.y= y
  }
function rotateB (v, r) {
  var tempX = v.x
  var tempY = v.y
  v.x = r.cs*tempX +r.sn*tempY
  v.y = r.cs*tempY -r.sn*tempX
}
function changeROne(angle) {
  firstR = new Rotation(angle);
  redraw();
}
function changeRTwo(angle) {
  secondR = new Rotation(angle);
  redraw();
}
function changeRThree(angle) {
  thirdR = new Rotation(angle);
  redraw();
}
function setup() {
  createCanvas(600, 600);
  noLoop();
}
  var firstR = new Rotation(1);
  var firstV = new Vector(0,1);
  var secondR = new Rotation(-2);
  var secondV = new Vector(0,1);
  var thirdR = new Rotation(1);
  var thirdV = new Vector(0,1);
  var newTotal = new Vector(firstV.x+secondV.x+thirdV.x,firstV.y+secondV.y+thirdV.y);
  var oldTotal = new Vector(firstV.x+secondV.x+thirdV.x,firstV.y+secondV.y+thirdV.y);
var x =0;
function draw() {
  background('#5A647A')
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke('#F0EAD6');
  for(i=0;i<360;i++){
  rotateB(firstV,firstR);
  rotateB(secondV,secondR);
  rotateB(thirdV,thirdR);

  newTotal.x = firstV.x+secondV.x+thirdV.x;
  newTotal.y = firstV.y+secondV.y+thirdV.y;
  line(-oldTotal.x*100, -oldTotal.y*100, -newTotal.x*100,-newTotal.y*100);
  oldTotal.x=newTotal.x;
  oldTotal.y=newTotal.y;
  }
}
