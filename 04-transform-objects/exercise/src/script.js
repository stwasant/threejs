import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 1;
mesh.position.y = -1;
mesh.position.z =-2;

// // mesh.position.set(2, 2, -3);
// // mesh.position.normalize();

// scene.add(mesh);

// // scale
mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 1;

// // Rotation
mesh.rotation.reorder('YXZ');
mesh.rotation.y = 3.1;
mesh.rotation.x = 0.7;

// Groups
const group = new THREE.Group();
group.position.y = 2;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
);
cube1.position.x = 1;
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
cube2.position.x = -1;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
);

cube3.position.x = 3;
group.add(cube3);

// Axes helper
// const axesHelper = new THREE.AxesHelper(2);
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 900,
  height: 700,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

// camera.lookAt(mesh.position);
// console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
