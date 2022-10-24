
function clicked(x,y,xl,yl){
  if(mouseX<x+xl/2 && mouseX>x-xl/2){
    if(mouseY<y+yl/2 && mouseY>y-yl/2){
      return true;
    }    
  }  
  return false;
}
function bboton(){
   fill(255,200);noStroke(); rect(3.5*width/4,height/8,width/8,height/13);
   if(clicked(3.5*width/4,height/8,width/8,height/13)){
   textSize(30);
   if(mouseIsPressed){ state=0;}
   }
   else {textSize(25);}
   fill(0);text("Back",3.5*width/4,height/8);
}

function inter(l){
  switch(l){
    case 'a' || 'A' :{return 0;}break;
    case 'b' || 'B' :{return 1;}break;
    case 'c' || 'C' :{return 2;}break;
    case 'd' || 'D' :{return 3;}break;
    case 'e' || 'E' :{return 4;}break;
    case 'f' || 'F' :{return 5;}break;
    case 'g' || 'G' :{return 6;}break;
    case 'h' || 'H' :{return 7;}break;
    case 'i' || 'I' :{return 8;}break;
    case 'j' || 'J' :{return 9;}break;
    case 'k' || 'K' :{return 10;}break;
    case 'l' || 'L' :{return 11;}break;
    case 'm' || 'M' :{return 12;}break;
    case 'n' || 'N' :{return 13;}break;
    case 'o' || 'O' :{return 14;}break;
    case 'p' || 'P' :{return 15;}break;
    case 'q' || 'Q' :{return 16;}break;
    case 'r' || 'R' :{return 17;}break;
    case 's' || 'S' :{return 18;}break;
    case 't' || 'T' :{return 19;}break;
    case 'u' || 'U' :{return 20;}break;
    case 'v' || 'V' :{return 21;}break;
    case 'w' || 'W' :{return 22;}break;
    case 'x' || 'X' :{return 23;}break;
    case 'y' || 'Y' :{return 24;}break;
    case 'z' || 'Z' :{return 25;}break;
    default :{return 0;}break;
  }
}
