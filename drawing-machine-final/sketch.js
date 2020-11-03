let array = [];
let backgroundColor = 200;

let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(199, 216, 255);



}

function draw() {

background(199, 216, 255, 5);
strokeWeight(strokeWidth);

noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 100;

stroke(map(mouseX, 0, 199, 216, 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY)
line(mouseX,mouseY, pmouseX, pmouseY)
}

function keyTyped(){

      if (key === 's'){
        //save this image
        saveCanvas('fileName', 'png');
      } else if (key ==='c'){
        //display image
        clear();
    }

      return false;
}

function mousePressed(){
  array =[];
  backgroundColor = 255;
}
