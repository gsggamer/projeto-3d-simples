const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
const camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT, 1, 800);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);