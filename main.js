import * as THREE from "three";

// Major steps.
// 1. Create the scene
// 2. Add the camera
// 3. Create and add a cube object
// 4. Add lighting
// 5. Set up the renderer
// 6 Animate the scene

//-----------------//

const canvas = document.getElementById("canvas"); // optionally add canvas to interact with a scene, use controls etc.

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

// Add the camera
// camera properties (field of view, aspect ratio, near plane, far plane  )
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

//Create and add a cube object
const geometry = new THREE.BoxGeometry(); // geometry aka object
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
}); //emissive makes colors react with light
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2); // (width, height, depth)
const boxMaterial = new THREE.MeshBasicMaterial({
  color: "#B4B4B3",
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

//Add lighting
// light properties (color,intensity)
const light = new THREE.DirectionalLight(0x9cdba6, 10);
light.position.set(1, 1, 1); // (x,y,z)
scene.add(light);

//Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Animate the scene
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
