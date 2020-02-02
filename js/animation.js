let i = 0;
let counter = 0;
let playing = false;
let status = "loading...";
let camX = 0;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cube = [];
for (let i = 0; i < 12; i++) {
  cube.push(new THREE.Mesh(geometry, material));
  cube[i].scale.x = 0.1;
  cube[i].scale.y = 0.1;
  cube[i].scale.z = 0.1;
  scene.add(cube[i]);
}

var animate = function() {
  requestAnimationFrame(animate);
  if (speakers.every(speaker => speaker.state() === "loaded")) {
    for (let i = 0; i < 12; i++) {
      cube[i].position.x = x[i];
      cube[i].position.z = z[i];
    }

    // camera.rotation.y = camX;
    renderer.render(scene, camera);
    if (!playing) {
      play();
      playing = true;
    }
    camX += 0.01;
    // console.log(camX);
  }
  // listenerOrientation(camX);

  camera.position.z = 50 - camX;
  Howler.pos(0, 0, 50 - camX);
};

animate();
