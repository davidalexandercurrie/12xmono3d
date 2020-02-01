let i = 0;
let counter = 0;
let playing = false;
let status = "loading...";
function preload() {
  speaker1 = new Howl({
    src: ["audio/12xmonobrowser-001.ogg"],
    preload: true
  });
  speaker2 = new Howl({
    src: ["audio/12xmonobrowser-002.ogg"],
    preload: true
  });
  speaker3 = new Howl({
    src: ["audio/12xmonobrowser-003.ogg"],
    preload: true
  });
  speaker4 = new Howl({
    src: ["audio/12xmonobrowser-004.ogg"],
    preload: true
  });
  speaker5 = new Howl({
    src: ["audio/12xmonobrowser-005.ogg"],
    preload: true
  });
  speaker6 = new Howl({
    src: ["audio/12xmonobrowser-006.ogg"],
    preload: true
  });
  speaker7 = new Howl({
    src: ["audio/12xmonobrowser-007.ogg"],
    preload: true
  });
  speaker8 = new Howl({
    src: ["audio/12xmonobrowser-008.ogg"],
    preload: true
  });
  speaker9 = new Howl({
    src: ["audio/12xmonobrowser-009.ogg"],
    preload: true
  });
  speaker10 = new Howl({
    src: ["audio/12xmonobrowser-010.ogg"],
    preload: true
  });
  speaker11 = new Howl({
    src: ["audio/12xmonobrowser-011.ogg"],
    preload: true
  });
  speaker12 = new Howl({
    src: ["audio/12xmonobrowser-012.ogg"],
    preload: true
  });
}
function setup() {
  // createCanvas(400, 400);
  noCanvas();
  document.getElementById("status").textContent = "Loading...";
}
function draw() {
  //wait 10sec
  if (counter > 600 && !playing) {
    playing = true;
    play();
  }
  counter++;
}

function play() {
  document.getElementById("status").textContent = "Playing!";
  console.log("playing");
  id1 = speaker1.play();
  id2 = speaker2.play();
  id3 = speaker3.play();
  id4 = speaker4.play();
  id5 = speaker5.play();
  id6 = speaker6.play();
  id7 = speaker7.play();
  id8 = speaker8.play();
  id9 = speaker9.play();
  id10 = speaker10.play();
  id11 = speaker11.play();
  id12 = speaker12.play();
  speaker1.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker2.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker3.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker4.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker5.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker6.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker7.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker8.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker9.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker10.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker11.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
  speaker12.pos(Math.random() * 5 - 2.5, 0, Math.random() * 5 - 2.5);
}
