function discover(){
  if(disco==0){
    for (var i=0;i<8;i++){
      orbe[i].show();
      var ang=2*PI/8;
      orbe[i].x= (width/7)*cos(ang*i+des)+width/2;
      orbe[i].y= (width/7)*sin(ang*i+des)+height/2;  
      if(orbe[i].mouseClick()){
        disco=1;
        ex=i;
        xd=(orbe[i].x+width/8)/50;
        yd=(orbe[i].y-height/2)/50;
      }
    }
  des=des+0.0005;
  }
  if(disco==1){
    if(td<30){
      orbe[ex].x=orbe[ex].x-xd;
      orbe[ex].y=orbe[ex].y-yd;
      orbe[ex].show();
      td++;
    }else{
    disco=2;
    }
  }
  if(disco==2){      
    orbe[ex].x=width/8;
    orbe[ex].y=height/2;
    orbe[ex].show();disco=3;
  }
  if(disco==3){    
    for(var i=0;i<3;i++){ 
      if(suborbs[i].mouseClick()){
        sd=i;
        
      }      
      childs[1].lines(suborbs[i]); suborbs[i].show(); 
    }
    for(var i=0;i<5;i++){       
      orbe[ex].lines(childs[i]); childs[i].show(); 
    }
    orbe[ex].show();    
    if(sd!=-1){
      fill(255,200);noStroke(); rect(0.7*width,height/2,0.5*width,height/2);
      if(clicked(0.55*width,(i*(height/12))+0.3*height,0.7*width,height/13)){
      textSize(20);
      if(mouseIsPressed){window.open(links[3][sd]); }
      }else{  textSize(15);}
       fill(0);text(links[3][sd],0.7*width,0.3*height);
       text("title and content description texttitle and content description texttitle and content description texttitle and content description texttitle and content description texttitle and content description texttitle and content description texttitle and content description text",0.7*width,0.6*height,0.4*width,0.4*height);
    }
   }
bboton();
}
