class orb {
  constructor(name,c, x, y, tam) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.c=c;
    this.tam = tam;
  }
  show(){
    noStroke();  
    fill(this.c); circle(this.x,this.y,this.tam);textAlign(CENTER);
    fill(255);    this.mouseOver(); text(this.name,this.x,this.y);      
  }
  mouseOver(){
     if(dist(this.x,this.y,mouseX,mouseY)<this.tam/2){
       textSize(this.tam/5);
     }
     else{       
       textSize(this.tam/6);
     }    
  }
  mouseClick(){
     if(mouseIsPressed && dist(this.x,this.y,mouseX,mouseY)<this.tam/2){
      return true;
     }
     else{       
       return false;
     }    
  }
  lines(other){
    strokeWeight(other.tam/50);
    stroke(255);
    line(other.x,other.y,this.x,this.y);    
  }
  
  
}
