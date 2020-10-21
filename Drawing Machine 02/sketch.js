var img = [];
var imgPicker = 0;
var b;

function preload() {
  for (var i = 0; i < 6; i++) {
    img[i] = loadImage("Poster" + i + ".jpg");
  }
}

function setup() {
  b = createCanvas(500, 735);
  rectMode(CENTER);
}

function draw() {
  noStroke()

  var circleX = random(width);
  var circleY = random(height);
  c = img[imgPicker].get(circleX, circleY);
  fill(c);

  var diam = map(mouseY, 0, height, 5, 50);

  ellipse(circleX, circleY, diam, diam);
  ellipse(-circleX, -circleY, diam, diam);
}

function keyPressed() {
  if (keyCode === RETURN) {
    clear();
    imgPicker++;
    if (imgPicker > 5) {
      imgPicker = 0;
    }
  }
}

function mousePressed() {
  background(img[imgPicker]);
}

function keyReleased() {
  if (key == 's') {
    saveCanvas(b, 'myCanvas' + frameCount + 'jpg', 'jpg');
  }
}