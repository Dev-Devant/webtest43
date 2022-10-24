function relate(){
  textSize(25);  fill(sy);text("type a few tag , the documents that match the tags will be displayed in the search",0.45*width,0.12*height);
    sy=sy+ssy;
     if(sy>255){ssy=-10;}
     if(sy<0){ssy=10;}   
     var f=[];
     f[0]="AIR";
     f[1]="Space";
     f[2]="Huble";
     f[3]="add tags";
     f[4]="add tags";
     
     for(var i=0;i<5;i++){
       fill(255,200);noStroke(); rect(width/8,(i*height/12)+0.2*height,width/8,height/13);
       textSize(25);
       fill(0);text(f[i],width/8,(i*height/12)+0.2*height);
       if(sy>255){ssy=-10;}if(sy<0){ssy=10;}  
       if(keyIsPressed){k=key;}         
     }
      
     fill(255,200);noStroke(); rect(0.55*width,height/2,0.7*width,height/2);    
     for(var i=0;i<links[3].length;i++){
      if(clicked(0.55*width,(i*(height/12))+0.3*height,0.7*width,height/13)){
      textSize(20);
      if(mouseIsPressed){window.open(links[3][i]); }
      }else{  textSize(18);}
       fill(0);text(links[3][i],width/2,(i*(height/12))+0.3*height);
    }
     
     
  
  bboton();
}
