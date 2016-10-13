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
}

function setup(){

 createCanvas(1280, 960);
 background(0);

  MySound.play();

}

function draw(){

  background(0)

  var timer = millis();
    println(timer);

  //image(bat, bx, by, bw, bh);

//background
    image(bg, bgx, bgy, 1600*4, 234*4);

    //side scroller effect
      if (timer > 10000){
        bgx = bgx - speed;
      }

//ghost animation
push();

  image(ghost, gx, gy, gw, gh);

  //bob up and down
      if (timer > 10393){
        gy = gy + speed2
      }

//jitter forward anf back
      if ((timer > 32400) && (timer < 33000)){
        gx = 240;
        rt2 = 100;
      }

      if ((timer > 33000) && (timer < 33400)){
        gx = 640;
        rt3 = 100;
        rt2 = 0;
      }

      if ((timer > 33400) && (timer < 37200)){
        gx = 440;
        rt3 = 0;
      }

      if ((timer > 37200) && (timer < 37800)){
        gx = 640;
        rt3 = 100;
      }

      if ((timer > 37800) && (timer < 38200)){
        gx = 240;
        rt2 = 100;
        rt3 = 0;
      }

      if ((timer > 38200) && (timer < 41700)){
          gx = 100;
          rt2 = 0;
      }

      if ((timer > 41700) && (timer < 42300)){
        gx = 240;
        rt2 = 100;
      }

      if((timer > 42300) && (timer < 42700)){
        gx = 640;
        rt3 = 100;
        rt2 = 0;
      }

      if(timer > 42700){
        gx = 440;
        rt3 = 0;
      }

      if (timer > 66000){
        gy = 470;
      }

      if(gy > 490){
        speed2 = speed2 * -1;
      } else{
      if(gy < 470){
        speed2 = 1
        }
      }

      if(timer > 66000){
        gh = 500;
        gw = 500;
        gx = 440;
        gy = 330;
        bgx = 20000;
      }

      if(timer > 70800){
        gh = 800;
        gw = 800;
        gx = 140;
        gy = 0;
}
      if (timer > 75500){
        gh = 1000;
        gw = 1000;
        gx = -10;
        gy = -10;
      }

      if (timer > 80000){
        gh = 3000;
        gw = 3000;
        gx = -810;
        gy = -640;
      }
pop();


      if (timer > 85000){
        MySound.stop();
        rt = 255;
      }

      if ((timer > 1000) && (timer < 10000)){
        rt = rt - 2;
      }



noStroke();
  fill(0, 0, 0, rt);
    rect(0, 0, 1280, 960);

  fill(86, 86, 161, rt2);
    rect(0, 0, 1280, 960);

  fill(219, 68, 167, rt3);
    rect(0, 0, 1280, 960);
}
