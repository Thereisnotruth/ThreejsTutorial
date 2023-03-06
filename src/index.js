import * as THREE from 'three';

// Scene 세팅
const scene = new THREE.Scene();

// Camera 세팅 - Perspective Camera는 원근법이 적용되는 카메라
// <=> Orthographic Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
