let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
<<<<<<< HEAD
  // background(backgroundColor);


  drawGrid();
=======
  background(backgroundColor);

  strokeWeight(5);
>>>>>>> fce883477b22ffeb3dfc75e91266d930de7cd768
  noFill();
}

function draw() {
<<<<<<< HEAD

=======
  
>>>>>>> fce883477b22ffeb3dfc75e91266d930de7cd768
  if (mouseIsPressed){
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }
    beginShape();
    for(let i = 0; i < array.length; i++){
    // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1])
  }
    endShape();
}

function keyTyped(){

      if (key === 's'){
        //save this image
        saveCanvas('fileName', 'png');
      } else if (key==='d'){
        //display image
        background(255);
    }

      return false;
}

function mousePressed(){
  array =[];
  backgroundColor = 255;
}
<<<<<<< HEAD

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  // noStroke();
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j<= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
  }
}
strokeWeight(5);
}
=======
>>>>>>> fce883477b22ffeb3dfc75e91266d930de7cd768
