var con = Math.PI/180;
var dummy=0;
var showDraw = true;
var showVect = true;
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

function setup() {
  createCanvas(610, 610);
}

function draw() {
  if(showDraw == false){
  background('#5A647A')
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke('#F0EAD6');
  for(i=0;i<360;i++){
    for(j=0;j<vectors.length;j++){
      rotateB(vectors[j],rotators[j])
    }
    xcount = 0;
    ycount = 0;
    for(j=0;j<vectors.length;j++)
     {
       xcount+=vectors[j].x
       ycount+=vectors[j].y
     }

  newTot.x = xcount*(1.0/vectors.length);
  newTot.y = ycount*(1.0/vectors.length);
  line(-oldTot.x*300, -oldTot.y*300, -newTot.x*300,-newTot.y*300);
  oldTot.x=newTot.x;
  oldTot.y=newTot.y;
  noLoop();
  }
}
if(showDraw==true){
background('#5A647A')
translate(width / 2, height / 2);
strokeWeight(2);
stroke('#F0EAD6');
for(i=0;i<dummy&&i<360;i++){
  for(j=0;j<vectors.length;j++){
    rotateB(vectors[j],rotators[j])
  }
  xcount = 0;
  ycount = 0;
  for(j=0;j<vectors.length;j++)
   {
     xcount+=vectors[j].x
     ycount+=vectors[j].y
   }

newTot.x = xcount*(1.0/vectors.length);
newTot.y = ycount*(1.0/vectors.length);
line(-oldTot.x*300, -oldTot.y*300, -newTot.x*300,-newTot.y*300);
oldTot.x=newTot.x;
oldTot.y=newTot.y;
}
if (showVect==true&& dummy<360)
{
var ori = new Vector(0,0);
   stroke('#33A');
for(j=0;j<vectors.length;j++)
 {
   line(-ori.x*300.0/vectors.length,-ori.y*300.0/vectors.length,-(ori.x+vectors[j].x)*300.0/vectors.length,-(ori.y+vectors[j].y)*300.0/vectors.length );
   ori.x+=vectors[j].x;
   ori.y+=vectors[j].y;
 }
    stroke('#F0EAD6');
}
resetVectors();
oldTot.x=0;
oldTot.y=1;
dummy+=1;
}
if (dummy>=361){
  noLoop();
}
}







var rotators = [new Rotation(5),new Rotation(-7),new Rotation(89)];
var vectors = [new Vector(0,1),new Vector(0,1),new Vector(0,1)];
var xcount = 0;
var ycount = 0;
for(j=0;j<vectors.length;j++)
 {
   xcount+=vectors[j].x
   ycount+=vectors[j].y
 }
var oldTot = new Vector(xcount*(1.0/vectors.length),ycount*(1.0/vectors.length))
var newTot = new Vector(xcount*(1.0/vectors.length),ycount*(1.0/vectors.length))
function parseRotators(text) {
  var parsed = text.split(' ');
  var tempRotators = [];
  var tempVectors = [];
  for (i=0;i<parsed.length; i++)
  {
    tempRotators[i] = new Rotation(parseInt(parsed[i]));
    tempVectors[i] = new Vector(0,1);
  }
  rotators = tempRotators;
  vectors = tempVectors;
  loop();
  resetVectors();
  dummy=0;
  redraw();
}
function resetVectors(){
  for (i=0;i<vectors.length; i++)
  {
    vectors[i] = new Vector(0,1);
  }
}
function setDraw(bool){
  showDraw=bool;
  loop();
  resetVectors();
  dummy=0;
}
function setVect(bool){
  showVect=bool;
  loop();
  resetVectors();
  dummy=0;
}
