let in_x;
let de_x;
let te_x;
let rmi_x;
let na_x;
let cy_x;

let macchinetta;

let sillabe_scelte = [];
let posizioni_sillabe = [];

function preload() {
  in_x = [
    loadImage("sillabe/in_2.svg"),
    loadImage("sillabe/in_1.svg"),
    loadImage("sillabe/in_3.svg"),
    loadImage("sillabe/in_4.svg"),
    loadImage("sillabe/in_5.svg"),
    loadImage("sillabe/in_6.svg"),
  ];

  de_x = [
    loadImage("sillabe/de_1.svg"),
    loadImage("sillabe/de_2.svg"),
    loadImage("sillabe/de_3.svg"),
    loadImage("sillabe/de_4.svg"),
    loadImage("sillabe/de_5.svg"),
    loadImage("sillabe/de_6.svg"),
  ];

  te_x = [
    loadImage("sillabe/te_1.svg"),
    loadImage("sillabe/te_2.svg"),
    loadImage("sillabe/te_3.svg"),
    loadImage("sillabe/te_4.svg"),
    loadImage("sillabe/te_5.svg"),
    loadImage("sillabe/te_6.svg"),
  ];

  rmi_x = [
    loadImage("sillabe/rmi_1.svg"),
    loadImage("sillabe/rmi_2.svg"),
    loadImage("sillabe/rmi_3.svg"),
    loadImage("sillabe/rmi_4.svg"),
    loadImage("sillabe/rmi_5.svg"),
    loadImage("sillabe/rmi_6.svg"),
  ];

  na_x = [
    loadImage("sillabe/na_1.svg"),
    loadImage("sillabe/na_2.svg"),
    loadImage("sillabe/na_3.svg"),
    loadImage("sillabe/na_4.svg"),
    loadImage("sillabe/na_5.svg"),
    loadImage("sillabe/na_6.svg"),
  ];

  cy_x = [
    loadImage("sillabe/cy_1.svg"),
    loadImage("sillabe/cy_2.svg"),
    loadImage("sillabe/cy_3.svg"),
    loadImage("sillabe/cy_4.svg"),
    loadImage("sillabe/cy_5.svg"),
    loadImage("sillabe/cy_6.svg"),
  ];

  macchinetta = loadModel("nuvole/macchinetta_linee.stl", true);
}

//

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  scegli_sillabe();
  scegli_posizioni_sillabe();

  //angleMode(DEGREES);
}

//

let condition = true;

function draw() {
  background("white");
  //circle(width / 2, height / 2, width / 2);

  nuvola();
  if (condition) {
    sillabe();
  }
}

//

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//

setInterval(() => {
  condition = !condition;
}, 5000);

//

function sillabe() {
  background(255);

  let sillaba_h = height / sillabe_scelte.length;

  push();
  // resetMatrix();
  translate(-width / 2, -height / 2);
  for (let [i, sillaba] of Object.entries(sillabe_scelte)) {
    push();
    let f = sillaba_h / sillaba.height;
    let x = posizioni_sillabe[i];
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

  push();
  noFill();
  //let c = cos(frameCount);
  //let s = height / 150;
  //scale(c * c * s);
  //scale(height / random(20, 200));
  scale(height / 150);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  stroke("white");
  model(macchinetta);

  // macchinetta.vertices.forEach((vertice) => {
  //   point(vertice.x, vertice.y, vertice.z);
  // });

  pop();
}

//

function scegli_sillabe() {
  sillabe_scelte = [
    random(in_x),
    random(de_x),
    random(te_x),
    random(rmi_x),
    random(na_x),
    random(cy_x),
  ];
}

function scegli_posizioni_sillabe() {
  posizioni_sillabe = [];
  let sillaba_h = height / sillabe_scelte.length;
  for (let sillaba of sillabe_scelte) {
    let f = sillaba_h / sillaba.height;
    let larghezza_a_disposizione = width - sillaba.width * f;
    let x = random(0, larghezza_a_disposizione);
    posizioni_sillabe.push(x);
  }
}

setInterval(() => {
  scegli_sillabe();
  scegli_posizioni_sillabe();
}, 1000);
