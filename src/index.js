import * as THREE from 'three';

// Scene 세팅
const scene = new THREE.Scene();

// Camera 세팅 - Perspective Camera는 원근법이 적용되는 카메라
// <=> Orthographic Camera
// 75 - file of view(FOV) 각도
// window.innerWidth / window.innerHeight - 카메라 비율
// 0.1, 1000 - near, far. 이 수치 내부의 오브젝트들만 카메라에 표시
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer 세팅
// setSize로 크기 설정 가능
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 4;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
