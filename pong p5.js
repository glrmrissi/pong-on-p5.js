let xCircle = 400;
let yCircle = 250;
let Diameter = 20;
let Radius = Diameter / 2;

let xVelocityBall = 7;
let yVelocityBall = 7;

let xRacket = 5
let yRacket = 250
let RacketLength = 10
let RacketHeigth = 100

let xRacketOpponent = 785
let yRacketOpponent = 250
let xVelocityOppo = 3
let yVelocityOppo = 3

let ScoreboardOne = 0
let ScoreboardTwo = 0

let SoundRacket
let Pointsound

let ChanceWrong = 0;

let yCollide = false;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(28,28,28);
  ShowBall();
  MoveBall();
  CollideEdge();
  RacketOne();
  MoveRacketOne();
  //CollideRacket();
  Collide();
  RacketTwo();
  MoveRacketTwo();
  CollideOppo();
  Scoreboard();
  Points();
  
}
 function ShowBall(){
   circle(xCircle, yCircle, Diameter)
}
 function MoveBall(){
   xCircle += xVelocityBall; 
   yCircle += yVelocityBall;
 }
function CollideEdge(){
  if (xCircle + Radius > width || xCircle -Radius < 0){
  xVelocityBall *= -1;
  }
  if (yCircle + Radius > height || yCircle - Radius< 0){
  yVelocityBall *= -1;
  }
}
function RacketOne(){
  rect(xRacket, yRacket, RacketLength, RacketHeigth)
}
function RacketTwo(){
  rect(xRacketOpponent, yRacketOpponent, RacketLength, RacketHeigth)
}
function MoveRacketOne(){
  if (keyIsDown (UP_ARROW)){
    yRacket -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRacket += 10;
  }
}
function CollideRacket(){
  if (xCircle - Radius < xRacket + RacketLength && yCircle - Radius < yRacket + RacketHeigth && yCircle + Radius > yRacket){
    xVelocityBall *= -1;
  }
}

function Collide(){
  yCollide =
   collideRectCircle(xRacket, yRacket, RacketLength, RacketHeigth, xCircle, yCircle, Radius);
 if(yCollide){
   xVelocityBall *= -1;
 }  
   
}
function MoveRacketTwo(){
  yVelocityOppo = yCircle - yRacketOpponent - RacketLength / 2 - 30;
   yRacketOpponent += yVelocityOppo;
   
}
function CollideOppo(){
  yCollide =
   collideRectCircle(xRacketOpponent, yRacketOpponent, RacketLength, RacketHeigth, xCircle, yCircle, Radius);
 if(yCollide){
   xVelocityBall *= -1;
   
   }
  }
function Scoreboard(){
  stroke(245)
  textAlign (CENTER);
  textSize(18);
  fill(color(0,139,139));
  rect(130, 10, 40 ,20);
  rect(630, 10, 40 ,20);
  fill(255);
  text(ScoreboardOne, 150, 26);
  text(ScoreboardTwo,650,26);
}
function Points(){
  if (xCircle > 790){
    ScoreboardOne += 1;
  }
 if (xCircle < 10){
   ScoreboardTwo += 1;
 }
}
function Preload(){
  SoundRacket = loadSound ("racket.mp3")
  Ponitsound = loadSound ("point.mp3")
} 

function ChanceWrongs() {
  if (ScoreboardOne >= ScoreboardTwo) {
    ChanceWrong += 1
    if (ChanceWrong >= 39){
    ChanceWrong = 40
    }
  } else {
    ChanceWrong -= 1
    if (ChanceWrong <= 35){
    ChanceWrong = 35
    }
  }
}
