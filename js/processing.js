void setup() {
  size(1200, 700);
  fill(#E1EAEE);
  noStroke();
  }
  
void draw() {
  background(33 - (mouseY * (31.0 / 500.0)), 172 - (mouseY * (144.0 / 500.0)), 234 - (mouseY * (82.0 / 500.0)));
  fill(#F0FF2E);
  maakSter(120,-180,100,-135,140,-135,0.4);
  maakZon();
  maakIjs();
  maakWeerspiegeling();
  fill(#FFFFFF); 
  maakWolk(100,100,120,70,1.8);
  maakWolk(415,215,80,30,-1.1);
  maakWolk(770,290,100,50,-0.3);
  maakDeur();
  maakMan();  
  fill(#FFFFFF);
  maakSneeuwvlokGroot();
  maakSneeuwvlokMiddel();
  maakSneeuwvlokKlein();
  circle(415 - (mouseY * 1.1),258,10);  
  circle(430 - (mouseY * 1.1),264,10);  
  circle(403 - (mouseY * 1.1),270,10);  
  circle(400 - (mouseY * 1.1),283,10);  
  circle(416 - (mouseY * 1.1),273,10);  
  maakWater();
  maakBoot();
  fill(#C1C1C9);
  rect(880,580,95,77);
  fill(#FF0307);
  triangle(880,580,927,520,975,580);
  fill(#FFFFFF);
  rect(945,590,12,12);
    if (mousePressed) {
  fill(#19BF04);
  circle(600,350,700); 
  fill(#175BE8);
  circle(400,250,145);
  circle(800,250,145);
  fill(#FEFF27);
  circle(600,350,125);
  fill(#FF0022);
  arc(600,500,300,200,0,PI);
  fill(#000000);
  text("KIEKEBOE",580,550);
    }
  
//functieessss

}

void maakWolk(int startXCoordinaat, int startYCoordinaat, int breedteWolk, int hoogteWolk, float beweegSnelheid) {
  ellipse(startXCoordinaat+mouseY*beweegSnelheid, startYCoordinaat, breedteWolk, hoogteWolk);
  ellipse(startXCoordinaat-20+mouseY*beweegSnelheid, startYCoordinaat+5, breedteWolk, hoogteWolk);
  ellipse(startXCoordinaat+20+mouseY*beweegSnelheid, startYCoordinaat+10, breedteWolk, hoogteWolk);
  ellipse(startXCoordinaat+mouseY*beweegSnelheid, startYCoordinaat+15, breedteWolk, hoogteWolk);
  
}
  
void maakSter(int startXpunt1,int startYpunt1,int startXpunt2,int startYpunt2,int startXpunt3,int startYpunt3,float beweegSnelheid) {
  triangle(startXpunt1,startYpunt1+mouseY*beweegSnelheid, startXpunt2,startYpunt2+mouseY*beweegSnelheid, startXpunt3,startYpunt3+mouseY*beweegSnelheid);
  triangle(startXpunt1-20,startYpunt1+15+mouseY*beweegSnelheid, startXpunt2+40,startYpunt2-30+mouseY*beweegSnelheid, startXpunt3-20,startYpunt3+15+mouseY*beweegSnelheid);
}

void maakZon() {
  fill(213, 229 - (mouseY * (147.0 / 500.0)), 0);
  circle(600, mouseY, 105 + mouseY * 0.2);
  
  
}

void maakIjs() {
  fill(185 - (mouseY * (24.0 / 500.0)), 245 - (mouseY * (62.0 / 500.0)), 255);
  rect(0, 500, 1200, 200);
}

void maakWeerspiegeling() {
  fill(213, 229 - (mouseY * (147.0 / 500.0)), 0);
  arc(600, 500, 105 + mouseY * 0.2, 105 - mouseY * 0.1683, 0, PI);
}

void maakDeur() {
  fill(#000000);
    rect(860,590,20,67);
    fill(#FFFFFF);
    rect(863,615,5,3);
}

void maakMan() {
   fill(#FF0505);
    circle(740 - (mouseY*-0.3),600,10);
    line(740 - (mouseY*-0.3),605,740 - (mouseY*-0.3),608);
    circle(740 - (mouseY*-0.3),620,22);
    line(736 - (mouseY*-0.3),631,733 - (mouseY*-0.3),645);
    line(744 - (mouseY*-0.3),631,747 - (mouseY*-0.3),645);
    rect(728 - (mouseY*-0.3),645,7,2);
    rect(743 - (mouseY*-0.3),645,7,2);
    line(738 - (mouseY*-0.3),598,739 - (mouseY*-0.3),598);
    line(742 - (mouseY*-0.3),598,743 - (mouseY*-0.3),598);
    line(739 - (mouseY*-0.3),602,741 - (mouseY*-0.3),602);
    line(760 - (mouseY*-0.3),625,751 - (mouseY*-0.3),617);
    line(730 - (mouseY*-0.3),615,720 - (mouseY*-0.3),605);
    circle(720 - (mouseY*-0.3),605,5);
    circle(760 - (mouseY*-0.3),624,5);
}

void maakSneeuwvlokGroot() {
    fill(#FFFFFF);
    circle(140 - (mouseY * -1.8),165,10);  
    circle(124 - (mouseY * -1.8),181,10);  
    circle(110 - (mouseY * -1.8),165,10);  
    circle(80 - (mouseY * -1.8),189,10);  
    circle(68 - (mouseY * -1.8),165,10);  
}

void maakSneeuwvlokMiddel() {
  fill(#FFFFFF);
  circle(780 - (mouseY * 0.3),352,10);  
    circle(815 - (mouseY * 0.3),334,10);  
    circle(760 - (mouseY * 0.3),358,10);  
    circle(740 - (mouseY * 0.3),355,10);  
    circle(805 - (mouseY * 0.3),372,10);  
    
  
}


void maakSneeuwvlokKlein() {
   fill(#FFFFFF);
   circle(415 - (mouseY * 1.1),258,10);  
    circle(430 - (mouseY * 1.1),264,10);  
    circle(403 - (mouseY * 1.1),270,10);  
    circle(400 - (mouseY * 1.1),283,10);  
    circle(416 - (mouseY * 1.1),273,10);  
  
}
//S.O. naar meneer Dukers
void maakBoot(){
 fill(0, 0, 0);
 rect(300-mouseY/1.5, 550, 50, 20);
 triangle(300-mouseY/1.5, 550, 300-mouseY/1.5, 570, 250-mouseY/1.5, 550);
 triangle(350-mouseY/1.5, 550, 350-mouseY/1.5, 570, 365-mouseY/1.5, 550 );
 //Rode streep op de boot
 fill(255, 0, 0);
 rect(300-mouseY/1.5, 555, 50, 5);
 triangle(300-mouseY/1.5, 555, 300-mouseY/1.5, 560, 260-mouseY/1.5, 555 );
 triangle(350-mouseY/1.5, 555, 350-mouseY/1.5, 560, 362-mouseY/1.5, 555 );
 //Kajuit
 fill(128, 48, 10);
 rect(320-mouseY/1.5, 535, 30, 15);
 //Stoompijp
 fill(0, 0, 0);
 rect(330-mouseY/1.5, 520, 10, 15);
 rect(290-mouseY/1.5, 520, 10, 30);
 fill(255, 0, 0);
 rect(330-mouseY/1.5, 525, 10, 5);
 rect(290-mouseY/1.5, 525, 10, 5);

}
void maakWater() {
 fill(3.0-(mouseY*(2.0/500.0)),42.0-(mouseY*(18.0/500.0)),255.0-(mouseY*(108.0/500.0)));
 rect(350-mouseY/1.5,555,2000000,15);
}

void keyPressed(){
    if(key=='s'||key=='S'){
 
        // Saves each frame as line-000001.png, line-000002.png, etc.
        saveFrame("Meesterwerk_final-######.pde");
 
    }
}
