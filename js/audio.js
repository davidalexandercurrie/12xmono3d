let x = [];
let z = [];
for (let i = 0; i < 12; i++) {
  x[i] = Math.random() * 20 - 10;
}
for (let i = 0; i < 12; i++) {
  z[i] = Math.random() * 20 - 10;
}
let speakers = [
  new Howl({
    src: ["audio/12xmonobrowser-001.ogg"],
    // src: ["audio/09 Lost Souls_Eelings.mp3"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-002.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-003.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-004.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-005.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-006.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-007.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-008.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-009.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-010.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-011.ogg"],
    preload: true
  }),
  new Howl({
    src: ["audio/12xmonobrowser-012.ogg"],
    preload: true
  })
];

function play() {
  // speakers[0].play();
  // speakers[0].pos(x[0], 0, z[0]);
  for (let i = 0; i < 12; i++) {
    speakers[i].pos(x[i], 0, z[i]);
    speakers[i].play();
  }
  console.log("ready to play");
  playing = true;
}

Howler.pos(0, 0, 5);

function listenerOrientation(rotation) {
  // let rotation = 2 * Math.PI - (rad % (2 * Math.PI));
  var x = Math.cos(rotation);
  var y = 0;
  var z = Math.sin(rotation);
  // console.log(x, y, z);
  Howler.orientation(x, 0, z, 0, 1, 0);
}
