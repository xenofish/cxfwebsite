var con = Math.PI/180;
var dummy=0;
var showDraw = true;
var showVect = true;
var drawn = true;
var backgroundColor = '#5A647A';
var strokeColor = '#F0EAD6';
var labelOn = true;
var label = "5 -7 1";
var valid = true;
function Rotation(theta)
  {
  this.sn = Math.sin(theta*con);
  this.cs = Math.cos(theta*con);
  this.theta = theta
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
  background(backgroundColor)
  translate(width / 2, height / 2);

  strokeWeight(2);
  stroke(strokeColor);
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
background(backgroundColor)
translate(width / 2, height / 2);
strokeWeight(2);
stroke(strokeColor);
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
if (showVect==true&& dummy!=0 && dummy<360)
{
var ori = new Vector(0,0);
   stroke('#33A');
for(j=0;j<vectors.length;j++)
 {
   line(-ori.x*300.0/vectors.length,-ori.y*300.0/vectors.length,-(ori.x+vectors[j].x)*300.0/vectors.length,-(ori.y+vectors[j].y)*300.0/vectors.length );
   ori.x+=vectors[j].x;
   ori.y+=vectors[j].y;
 }
    stroke(strokeColor);
}
resetVectors();
oldTot.x=0;
oldTot.y=1;
dummy+=1;
}
if (dummy>361){
  noLoop();
  showDraw= false;
  dummy=0;
}
if (labelOn == true){
textSize(32);
fill(strokeColor);
text(label,-width/2,-height/2 +30);
}
}







var rotators = [new Rotation(5),new Rotation(-7),new Rotation(1)];
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
  label= text;
  validTemp=true;
  for (i=0;i<parsed.length; i++)
  {
    if (isNumeric(parsed[i])==false)
    {
      validTemp = false;
    }
  }
  valid= validTemp;
  if (valid == false)
  {
    label = "Error: Not A Vaild Input"
    var tempRotators = [];
    var tempVectors = [];
    for (i=0;i<parsed.length; i++)
    {
      tempRotators[i] = new Rotation(0);
      tempVectors[i] = new Vector(0,1);
    }
    if (drawn==true){
      showDraw = true;
    }
  }
  if (valid== true){
  var tempRotators = [];
  var tempVectors = [];
  for (i=0;i<parsed.length; i++)
  {
    tempRotators[i] = new Rotation(parseInt(parsed[i]));
    tempVectors[i] = new Vector(0,1);
  }
  if (drawn==true){
    showDraw = true;
  }
}
  rotators = tempRotators;
  vectors = tempVectors;
  loop();
  resetVectors();
  dummy=0;
}
function resetVectors(){
  for (i=0;i<vectors.length; i++)
  {
    vectors[i] = new Vector(0,1);
  }
}
function setDraw(bool){
  drawn = bool;
  showDraw=bool;
  loop();
  resetVectors();
  dummy=0;
}
function setVect(bool){
  showVect=bool;
  if (drawn==true){
    showDraw = true;
  }
  loop();
  resetVectors();
  dummy=0;
}
function saved(text){
  save(label.replace(/ /g,'_')+'.jpg');
}
function changeBackgroundColor(color){
backgroundColor = '#'+color;
if (drawn==true){
  showDraw = true;
}
loop();
resetVectors();
dummy=0;
}
function changeStrokeColor(color){
strokeColor = '#'+color;
if (drawn==true){
  showDraw = true;
}
loop();
resetVectors();
dummy=0;
}
function setLabel(bool){
labelOn = bool;
if (drawn==true){
  showDraw = true;
}
loop();
resetVectors();
dummy=0;
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
