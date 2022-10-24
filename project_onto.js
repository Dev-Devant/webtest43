let orbe=[],childs=[],tags=[],links=[],suborbs=[],srh=[];
var des=0.01;
let img,onto;
var state=0;
let font;
var sx=0,sy=0,ssy=10,ts=false,visual=0,disco=0,xd,yd,td=0,ex,sd=-1;
function setup() {
  createCanvas(displayWidth,displayHeight);
  init();  
  font=loadFont('data/Luc.otf');
  textFont(font);
  frameRate(30);  
  img=loadImage('https://image.freepik.com/foto-gratis/render-3d-diseno-baja-poli-sobre-fondo-borroso-abstracto_1048-12681.jpg');
  imageMode(CENTER);
}



function draw() {
  image(img,width/2-mouseX/50,height/2-mouseY/50,width*1.5,height*1.5);
  fill(0,120);  rectMode(CENTER);noStroke();
  rect(width/2,height/2-25,sx,height-100);
  if(sx<width-100){sx=sx+20;fill(255,sx/8);}else{fill(255);}
  switch(state){
    case 0:{menu();    }break;
    case 1:{discover();}break;
    case 2:{subject(); }break;
    case 3:{relate();  }break;
  }
  image(onto,0.9*width,0.75*height,width/10,width/10);
  
}
