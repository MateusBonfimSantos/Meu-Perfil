function setup() {
    createCanvas(720, 720);
    background("black")
  }
  
  function draw() {
    stroke("red");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  