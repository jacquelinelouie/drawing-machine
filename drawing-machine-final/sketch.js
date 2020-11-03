let array = [];
let backgroundColor = 200;
let strokeWidth = 5;
let words = ["I am loved.", "I am strong.", "I am growing into my fullest self.", "My presence is more powerful than pain.", "I can make it happen.", "I am worthy of all things wonderful.", "I believe in what’s possible for me.", "I cherish my capacity to live deeper.", "I can. I will."];
var index = 0;

function setup() {
  createCanvas(600,600);
  background(199, 216, 255);
}

function draw() {
background(199, 216, 255, 5);
stroke(255);
textSize(22);
text(words[index], 140, 200);

if (mouseIsPressed === true) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped(){

      if (key === 's'){
        //save this image
        saveCanvas('fileName', 'png');
      } else if (key ==='c'){
        //display image
        clear();
      } else if (key === 'a') {
        index = Math.floor(random(0, words.length));
        clear();
        background(0);
  }
      return false;
}

// function mousePressed(){
//   array =[];
//   backgroundColor = 255;
// }
