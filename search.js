function subject(){
  var k;  
   fill(255,200);noStroke(); rect(2*width/4,0.2*height,width/8,height/13);
   textSize(25);
   if(!ts){
     fill(sy);text("type your tag",2*width/4,0.2*height);
     sy=sy+ssy;
     if(sy>255){ssy=-10;}
     if(sy<0){ssy=10;}     
     if(keyIsPressed){
       k=key;
       ts=true;
     }     
   }else{
     k=key;     
     fill(0);text(k,2*width/4,0.2*height);
     for(var i=0;i<5;i++){
       fill(255,200);noStroke(); 
       rect(width/8,(i*(height/12))+0.3*height,width/8,height/13);
       textSize(25);
       fill(0);text(tags[inter(k)][i],width/8,(i*(height/12))+0.3*height); 
       if(clicked(width/8,(i*(height/12))+0.3*height,width/8,height/13)){
       if(mouseIsPressed){ visual=i+1; }
       }       
     }
     docs();
   }   
bboton();  
}


function docs(){
  if(visual!=0){
    fill(255,200);noStroke(); rect(0.55*width,height/2,0.7*width,height/2);    
    for(var i=0;i<links[visual-1].length;i++){
      if(clicked(0.55*width,(i*(height/12))+0.3*height,0.7*width,height/13)){
      textSize(20);
      if(mouseIsPressed){window.open(links[visual-1][i]); }
      }else{  textSize(18);}
       fill(0);text(links[visual-1][i],width/2,(i*(height/12))+0.3*height);
    }
  }  
}
