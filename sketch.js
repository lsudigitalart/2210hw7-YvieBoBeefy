
//timers
var timer;
var loadTime;

//creepy 8 bit
var mySound;

//bats and friends
var bat;

  var bh = 300
  var bw = 300
  var bx = 320
  var by = 400

//noivern
var bat1;

  var bx1;
  var by1;

//noibat
var bat2;

  var bx2;
  var by2;

//golbat
var bat3;

  var bx3;
  var by3;

//swoobat
var bat4;

  var bx4;
  var by4;

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
var speed4 = 1.2;
var speed3 = 2.5;

function preload(){
  bat1 = loadImage("assets/batty2.png");
  bat2 = loadImage("assets/batty3.png");
  bat3 = loadImage("assets/batty4.png");
  bat4 = loadImage("assets/batty5.png");
  bat = loadImage("assets/bat.png");
  ghost = loadImage("assets/ghost.png");
  bg = loadImage("assets/GRAVEYARD.png");
}

function setup(){
createCanvas(1280, 960);
 background(0);

mySound = loadSound("FNAF.mp3", playMusic);

}

function playMusic(){
  loadTime = millis();
  mySound.play();
}

function draw(){
background(0)

timer = millis() - loadTime;
 println(timer);

//background
    image(bg, bgx, bgy, 1600*4, 234*4);

    //side scroller effect
      if (timer > 10000){
        bgx = bgx - speed;
      }

//ghost animation
push();

//friends<3
  image(bat1, bx1, by1, bw, bh);
  image(bat2, bx2, by2, bw, bh);
  image(bat3, bx3, by3, bw, bh);
  image(bat4, bx4, by4, bw, bh);

//ghosty
  image(ghost, gx, gy, gw, gh);

//the true friend
  image(bat, bx, by, bw, bh);

//bat appears
  if (timer < 9300){
    bx = -400;
  }

  if (timer > 9300){
    bx = 300;
  }

//bob up and down
      if (timer > 10000){
        gy = gy + speed2;
        by = by + speed4;
      }

//jitter forward and back
      if ((timer > 32200) && (timer < 32800)){
        gx = 240;
        bx = 740;
        rt2 = 100;
      }

      if ((timer > 32800) && (timer < 33200)){
        gx = 640;
        bx = 240;
        rt3 = 100;
        rt2 = 0;
      }

      if ((timer > 33200) && (timer < 37000)){
        gx = 440;
        bx = 740;
        rt3 = 0;
      }

      if ((timer > 37000) && (timer < 37600)){
        gx = 640;
        bx = 440;
        rt3 = 100;
      }

      if ((timer > 37600) && (timer < 38200)){
        gx = 240;
        bx = 840;
        rt2 = 100;
        rt3 = 0;
      }

      if ((timer > 38200) && (timer < 41700)){
          gx = 100;
          bx = 500;
          rt2 = 0;
      }

      if ((timer > 41700) && (timer < 42300)){
        gx = 240;
        bx = 100;
        rt2 = 100;
      }

      if((timer > 42300) && (timer < 42700)){
        gx = 640;
        bx = 340;
        rt3 = 100;
        rt2 = 0;
      }

      if(timer > 42700){
        gx = 440;
        bx = 300;
        rt3 = 0;
      }

      if (timer < 47000){
        bx1 = -400;
        bx2 = -400;
        bx3 = -400;
        bx4 = -400;
      }

      if (timer > 47000){
        bx1 = 20;
        by1 = 200;
        bx2 = 320;
        by2 = 150;
        bx3 = 660;
        by3 = 150;
        bx4 = 960;
        by4 = 200;
        bx = 400;
        gx = 540;
      }

      if (timer > 48000){
        by1 = 150;
        by2 = 200;
        by3 = 200;
        by4 = 150;
        gx = 440;
        bx = 300;
      }

      if (timer > 49100){
        by1 = 200;
        by2 = 200;
        by3 = 200;
        by4 = 200;
        bx = 400;
        gx = 540;
      }

      if (timer > 50200){
        by1 = 150;
        by2 = 200;
        by3 = 150;
        by4 = 200;
        gx = 440;
        bx = 300;
      }

      if (timer > 51300){
        by1 = 200;
        by2 = 150;
        by3 = 200;
        by4 = 150;
        bx = 400;
        gx = 540;
      }

      if (timer > 52400){
        bx1 = 660;
        by1 = 200
        bx2 = 960;
        by2 = 150;
        bx3 = 20;
        by3 = 150;
        bx4 = 320;
        by4 = 200;
        gx = 440;
        bx = 300;
      }

      if (timer > 53500){
        bx1 = 660;
        bx2 = 960;
        bx3 = 20;
        bx4 = 320;
        by1 = 150;
        by2 = 200;
        by3 = 200;
        by4 = 150;
        bx = 400;
        gx = 540;
      }

      if (timer > 54600){
        bx3 = 20;
        bx4 = 320;
        bx1 = 660;
        bx2 = 960;
        by3 = 150;
        by4 = 150;
        by1 = 150;
        by2 = 150;
        gx = 440;
        bx = 300;
      }

      if (timer > 55700){
        bx3 = 20;
        bx4 = 320;
        bx1 = 660;
        bx2 = 960;
        by3 = 150;
        by4 = 200;
        by1 = 150;
        by2 = 200;
        bx = 400;
        gx = 540;
      }

      if(timer > 56800){
        bx3 = 20;
        bx4 = 320;
        bx1 = 660;
        bx2 = 960;
        by3 = 200;
        by4 = 150;
        by1 = 200;
        by2 = 150;
        gx = 440;
        bx = 300;
      }

      if(timer > 57900){
        bx4 = 20;
        bx2 = 320;
        bx3 = 660;
        bx1 = 960;
        by4 = 200;
        by2 = 200;
        by3 = 200;
        by1 = 200;
        bx = 400;
        gx = 540;
      }

      if (timer > 59000){
        bx4 = 20;
        bx2 = 320;
        bx3 = 660;
        bx1 = 960;
        by4 = 150;
        by2 = 200;
        by3 = 200;
        by1 = 150;
        gx = 440;
        bx = 300;
      }

      if (timer > 60100){
        bx4 = 20;
        bx2 = 320;
        bx3 = 660;
        bx1 = 960;
        by4 = 200
        by2 = 150
        by3 = 150
        by1 = 200
        bx = 400;
        gx = 540;
      }

      if (timer > 61500){
        bx4 = 20;
        bx2 = 20;
        bx3 = 960;
        bx1 = 960;
        by4 = 20
        by2 = 200
        by3 = 20
        by1 = 200
        gx = 440;
        bx = 300;
      }

      if (timer > 62500){
        bx4 = 20;
        bx2 = 320;
        bx3 = 660;
        bx1 = 960;
        by4 = 200
        by2 = 150
        by3 = 200
        by1 = 150
        bx = 400;
        gx = 540;
      }

      if (timer > 63800){
        bx4 = 20;
        bx2 = 320;
        bx3 = 660;
        bx1 = 960;
        by4 = 150
        by2 = 200
        by3 = 150
        by1 = 200
        gx = 440;
        bx = 300;
      }

      if (timer > 66000){
        gy = 470;
        bx = -400;
        bx1 = -400;
        bx2 = -400;
        bx3 = -400;
        bx4 = -400;
      }

      if(gy > 490){
        speed2 = speed2 * -1;
      } else{
      if(gy < 470){
        speed2 = 1
        }
      }

      if(by > 420){
        speed4 = speed4 * -1;
      } else{
      if(by < 400){
        speed4 = 1.5
        }
      }

      if(timer > 66000){
        gh = 500;
        gw = 500;
        gx = 440;
        gy = 330;
        bgx = 20000;
        rt2 = 100;
      }

      if(timer > 70600){
        gh = 800;
        gw = 800;
        gx = 140;
        gy = 0;
        rt3= 100;
        rt2 = 0;
}
      if (timer > 75200){
        gh = 1000;
        gw = 1000;
        gx = -10;
        gy = -10;
        rt3 = 0;
        rt2 = 100;
      }

      if (timer > 80000){
        gh = 3000;
        gw = 3000;
        gx = -810;
        gy = -640;
        rt2 = 0;
        rt3 = 100;
      }
pop();


      if (timer > 84800){
        mySound.stop();
        rt = 255;
        rt3 = 0;
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
