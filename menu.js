
function menu(){
  textAlign(CENTER);
  textSize(50);text("WELLCOME TO ONTO NETWORK",width/2,height/8);
  textSize(25);text("let me be your guide",width/2,1.5*height/8);
  
  fill(255,200);noStroke(); rect(width/4,height/2,width/8,height/13);
   if(clicked(width/4,height/2,width/8,height/13)){
   textSize(30);
   if(mouseIsPressed){ state=1; }
   }
   else {textSize(25);}
   fill(0);text("Discover",width/4,height/2);
   
     fill(255,200);noStroke(); rect(2*width/4,height/2,width/8,height/13);
   if(clicked(2*width/4,height/2,width/8,height/13)){
   textSize(30);
   if(mouseIsPressed){ state=2; }
   }
   else {textSize(25);}
   fill(0);text("Topic",2*width/4,height/2);
   
   
   fill(255,200);noStroke(); rect(3*width/4,height/2,width/8,height/13);
   if(clicked(3*width/4,height/2,width/8,height/13)){
   textSize(30);
   if(mouseIsPressed){ state=3; }
   }
   else {textSize(25);}
   fill(0);text("Relates",3*width/4,height/2);
}
