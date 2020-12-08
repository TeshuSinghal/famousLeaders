var mainPg, SVPicture;
var sardarVallabhaiPic;
var bio, quo, ach, fac;
var buttons;
var buttonObj;

function preload(){
  SVPicture = loadImage("pictures/sardar-vallabhai.jpg");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  mainPg = new MainPage();
  //buttonObj = new Button();                        

  
}

function draw() {
  background(255,255,255);  
  mainPg.display();

  //if(buttonObj.btnBioDisplay === 1){
    //buttonObj.btnBiography.setAttribute('disabled','disabled');
//}

  

  drawSprites();
}