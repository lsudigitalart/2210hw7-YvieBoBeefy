//creepy 8 bit
var mySound;

//ghost
var ghost;

  var gh = 400;
  var gw = 400;
  var gx = 440;
  var gy = 470;

//background
var bg;
  var bgx = 1280;
  var bgy = 0;

//bateyes
var bat;
  var bx = -250;
  var by = 480-245
  var bh = 245;
  var bw = 500;

//extra time variables
var time1;
var time2;

//rectangle transparency
var rt = 255;

var rt2 = 0;

var rt3 = 0;

//direction and speed
var speed = 2;
var speed2 = 1;
var speed3 = 2.5;

function preload(){
  MySound = loadSound("assets/FNAF.mp3");

  ghost = loadImage("assets/ghost.gif");
  bg = loadImage("assets/GRAVEYARD.png");
  //bat = loadImage("assets/BAT.gif");
}

function setup(){

 createCanvas(1280, 960);
 background(0);

 push();
    MySound.play();
pop();

}

function draw(){

  background(0)

  var timer = millis();
    println(timer);

  //image(bat, bx, by, bw, bh);

//background
    image(bg, bgx, bgy, 1600*4, 234*4);

    //side scroller effect
      if (timer > 15000){
        bgx = bgx - speed;
      }

//ghost animation
push();

  image(ghost, gx, gy, gw, gh);

  //bob up and down
      if (timer > 15393){
        gy = gy + speed2
      }

//jitter forward anf back
      if ((timer > 37400) && (timer < 38000)){
        gx = 240;
        rt2 = 100;
      }

      if ((timer > 38000) && (timer < 38400)){
        gx = 640;
        rt3 = 100;
        rt2 = 0;
      }

      if ((timer > 38400) && (timer < 42200)){
        gx = 440;
        rt3 = 0;
      }

      if ((timer > 42200) && (timer < 42800)){
        gx = 640;
        rt3 = 100;
      }

      if ((timer > 42800) && (timer < 43200)){
        gx = 240;
        rt2 = 100;
        rt3 = 0;
      }

      if ((timer > 43200) && (timer < 46400)){
          gx = 100;
          rt2 = 0;
      }

      if ((timer > 46700) && (timer < 47300)){
        gx = 240;
        rt2 = 100;
      }

      if((timer > 47300) && (timer < 47600)){
        gx = 640;
        rt3 = 100;
        rt2 = 0;
      }

      if(timer > 47600){
        gx = 440;
        rt3 = 0;
      }

      if (timer > 79000){
        gy = 470;
      }

      if(gy > 490){
        speed2 = speed2 * -1;
      } else{
      if(gy < 470){
        speed2 = 1
        }
      }

      if(timer > 71000){
        gh = 500;
        gw = 500;
        gx = 440;
        gy = 330;
        bgx = 20000;
      }

      if(timer > 75500){
        gh = 800;
        gw = 800;
        gx = 140;
        gy = 0;
}
      if (timer > 80500){
        gh = 1000;
        gw = 1000;
        gx = -10;
        gy = -10;
      }

      if (timer > 85000){
        gh = 3000;
        gw = 3000;
        gx = -810;
        gy = -640;
      }
pop();


      if (timer > 90000){
        MySound.pause();
      }

      if ((timer > 4000) && (timer < 15000)){
        rt = rt - 1;
      }

      if (timer > 90000){
        rt = 255;
      }



noStroke();
  fill(0, 0, 0, rt);
    rect(0, 0, 1280, 960);

  fill(86, 86, 161, rt2);
    rect(0, 0, 1280, 960);

  fill(219, 68, 167, rt3);
    rect(0, 0, 1280, 960);
}
