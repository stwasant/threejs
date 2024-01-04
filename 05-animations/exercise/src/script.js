import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let previousTime = Date.now();

const clock = new THREE.Clock();

// Animations
const tick = () => {
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - previousTime;
  //   previousTime = currentTime;

  // Updating objects
  //   mesh.position.x += 0.01;
  //   mesh.position.y -= 0.01;
  //   mesh.rotation.x += 0.001 * deltaTime;
  //   mesh.rotation.y += 0.001 * deltaTime;

  const elapsedTime = clock.getElapsedTime();

  // Rotation
  //   mesh.rotation.y = elapsedTime;
  //   mesh.rotation.z = elapsedTime;
  //   mesh.rotation.y = elapsedTime * Math.PI * 2;
  
  // Position
//   mesh.position.y = Math.sin(elapsedTime);
//   mesh.position.x = Math.cos(elapsedTime);

  // Camera
  camera.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  // Rendering
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
