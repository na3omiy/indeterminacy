let in_x;
let de_x;
let te_x;
let rmi_x;
let na_x;
let cy_x;
let macchinetta;

function preload() {
  in_1 = loadImage("sillabe/in_1.svg");
  in_2 = loadImage("sillabe/in_2.svg");
  in_3 = loadImage("sillabe/in_3.svg");
  in_4 = loadImage("sillabe/in_4.svg");
  in_5 = loadImage("sillabe/in_5.svg");
  in_6 = loadImage("sillabe/in_6.svg");

  de_1 = loadImage("sillabe/de_1.svg");
  de_2 = loadImage("sillabe/de_2.svg");
  de_3 = loadImage("sillabe/de_3.svg");
  de_4 = loadImage("sillabe/de_4.svg");
  de_5 = loadImage("sillabe/de_5.svg");
  de_6 = loadImage("sillabe/de_6.svg");

  te_1 = loadImage("sillabe/te_1.svg");
  te_2 = loadImage("sillabe/te_2.svg");
  te_3 = loadImage("sillabe/te_3.svg");
  te_4 = loadImage("sillabe/te_4.svg");
  te_5 = loadImage("sillabe/te_5.svg");
  te_6 = loadImage("sillabe/te_6.svg");

  rmi_1 = loadImage("sillabe/rmi_1.svg");
  rmi_2 = loadImage("sillabe/rmi_2.svg");
  rmi_3 = loadImage("sillabe/rmi_3.svg");
  rmi_4 = loadImage("sillabe/rmi_4.svg");
  rmi_5 = loadImage("sillabe/rmi_5.svg");
  rmi_6 = loadImage("sillabe/rmi_6.svg");

  na_1 = loadImage("sillabe/na_1.svg");
  na_2 = loadImage("sillabe/na_2.svg");
  na_3 = loadImage("sillabe/na_3.svg");
  na_4 = loadImage("sillabe/na_4.svg");
  na_5 = loadImage("sillabe/na_5.svg");
  na_6 = loadImage("sillabe/na_6.svg");

  cy_1 = loadImage("sillabe/cy_1.svg");
  cy_2 = loadImage("sillabe/cy_2.svg");
  cy_3 = loadImage("sillabe/cy_3.svg");
  cy_4 = loadImage("sillabe/cy_4.svg");
  cy_5 = loadImage("sillabe/cy_5.svg");
  cy_6 = loadImage("sillabe/cy_6.svg");

  macchinetta = loadModel("nuvole/macchinetta tatuaggi.stl", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //angleMode(DEGREES);
}

let condition = false;

function draw() {
  background("white");
  //circle(width / 2, height / 2, width / 2);

  if (condition) {
    nuvola();
  } else {
    sillabe();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

setInterval(() => {
  condition = !condition;
}, 5000);

function sillabe() {
  background(255);
  frameRate(2);

  in_x = [in_1, in_2, in_3, in_4, in_5, in_6];
  let in_s = random(in_x);

  de_x = [de_1, de_2, de_3, de_4, de_5, de_5, de_6];
  let de_s = random(de_x);

  te_x = [te_1, te_2, te_3, te_4, te_5, te_6];
  let te_s = random(te_x);

  rmi_x = [rmi_1, rmi_2, rmi_3, rmi_4, rmi_5, rmi_6];
  let rmi_s = random(rmi_x);

  na_x = [na_1, na_2, na_3, na_4, na_5, na_6];
  let na_s = random(na_x);

  cy_x = [cy_1, cy_2, cy_3, cy_4, cy_5, cy_6];
  let cy_s = random(cy_x);

  let sillabe = [in_s, de_s, te_s, rmi_s, na_s, cy_s];
  let sillaba_h = height / sillabe.length;

  push();
  resetMatrix();
  translate(-width / 2, -height / 2);
  for (let sillaba of sillabe) {
    push();
    let f = sillaba_h / sillaba.height;
    let larghezza_a_disposizione = width - sillaba.width * f;
    let x = random(0, larghezza_a_disposizione);
    let w = sillaba.width * f;
    let h = sillaba.height * f;
    image(sillaba, x, 0, w, h);
    pop();
    translate(0, sillaba_h);
  }
  pop();
}

function nuvola() {
  background(0);
  frameRate(60);

  orbitControl();
  push();
  noFill();
  //let s = height / 150;
  //let c = cos(frameCount);
  //scale(c * c * s);
  scale(height / 150);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  stroke("white");
  //model(macchinetta);

  for (let vertice of macchinetta.vertices) {
    point(vertice.x, vertice.y, vertice.z);
  }
  pop();
}
