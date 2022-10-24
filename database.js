function init(){
  onto=loadImage("data/onto.png");
   let cat=[]; 
 cat[0]="Aerospace";
  cat[1]="Applied Science";
  cat[2]= "Apps";
  cat[3]="Earth Science";
  cat[4]="Management \n Operations";
  cat[5]="Raw Data";
  cat[6]="Software" ;
  cat[7]="Space Science"; 
  
    for (var i=0;i<8;i++){
    var ang=2*PI/8;
    var xa= (width/7)*cos(ang*i)+width/2;
    var ya= (width/7)*sin(ang*i)+height/2; 
    var C=color(random(0,255),random(0,255),random(0,255));
    orbe[i]=new orb(cat[i],C,xa,ya,displayWidth/10);
    
  }


  for(var i=0;i<26;i++){
  tags[i]=[];
  tags[i][0]="airs (2)";
  tags[i][1]="airspace (2)";  
  tags[i][2]="akari (1)";
  tags[i][3]="alais (3)";
  tags[i][4]="alarm (1)";    
  }
  
  for (var i=0;i<5;i++){
    var xb= width/4;
    var yb= (i*width/12)+height/6; 
    var ce=color(random(0,255),random(0,255),random(0,255));
    childs[i]=new orb(tags[0][i],ce,xb,yb,displayWidth/15);
    
  }
  
  
  for (var j=0;j<3;j++){
    var xc= width/3;
    var yc= (j*width/12)+height/6; 
    var cc=color(random(0,255),random(0,255),random(0,255));
    suborbs[j]=new orb("tag" ,cc,xc,yc,displayWidth/15);
    
  }

  
  links[0]=[];
  links[0][0]='https://data.nasa.gov/Earth-Science/CO2-Virtual-Science-Data-Environment-API/sqqj-9bmz';
  links[0][1]='https://data.nasa.gov/dataset/Goddard-Earth-Sciences-Data-and-Information-Servic/bgui-7jtm';
  links[1]=[];
  links[1][0]='https://data.nasa.gov/Management-Operations/ARC-Code-TI-Multi-Fidelity-Simulator-MFSim-/dgar-6yep';
  links[1][1]='https://data.nasa.gov/Aerospace/The-NASA-Air-Traffic-Management-Ontology-atmonto-/2fu8-vt82';
  links[2]=[];
  links[2][0]='https://data.nasa.gov/Management-Operations/NASA-IPAC-Infrared-Science-Archive/axpt-d988';
  links[3]=[];
  links[3][0]='https://data.nasa.gov/Earth-Science/Gaffey-Meteorite-Spectra-V1-0/ixqf-c3wf';
  links[3][1]='https://data.nasa.gov/Earth-Science/GAFFEY-METEORITE-SPECTRA-V2-0/vppn-d6um';
  links[3][2]='https://data.nasa.gov/Earth-Science/GAFFEY-METEORITE-SPECTRA-V2-0/dr5f-j88n';
  links[4]=[];
  links[4][0]='https://data.nasa.gov/Management-Operations/ARC-Code-TI-Optimal-Alarm-System-Design-and-Implem/f4rm-fmya';


 
}
