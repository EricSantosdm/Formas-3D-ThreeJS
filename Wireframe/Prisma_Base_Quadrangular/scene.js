const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 8;


const quad = new THREE.BufferGeometry();
const cube = new THREE.BufferGeometry();

const base = [
    //BCA
    0.0, 0.0, 0.0,
    2.0, 0.0, 0.0,
    2.0, 0.0, 2.0,
    //ADB
    2.0, 0.0, 2.0,
    0.0, 0.0, 2.0,
    0.0, 0.0, 0.0,
]

const face1 = [
    //BCE
    0.0, 0.0, 0.0,
    2.0, 0.0, 0.0,
    2.0, 4.0, 0.0,
    
    //EHB

    2.0, 4.0, 0.0,
    0.0, 4.0, 0.0,
    0.0, 0.0, 0.0,
]

const face2 = [
    //CAF
    2.0, 0.0, 0.0,
    2.0, 0.0, 2.0,
    2.0, 4.0, 2.0,
    //FEC
    2.0, 4.0, 2.0,
    2.0, 4.0, 0.0,
    2.0, 0.0, 0.0,
]

const face3 = [
    //ADG
    2.0, 0.0, 2.0,
    0.0, 0.0, 2.0,
    0.0, 4.0, 2.0,
    //GFA
    0.0, 4.0, 2.0,
    2.0, 4.0, 2.0,
    2.0, 0.0, 2.0,
]

const face4 = [
    //DBH
    0.0, 0.0, 2.0,
    0.0, 0.0, 0.0,
    0.0, 4.0, 0.0,
    //HGD
    0.0, 4.0, 0.0,
    0.0, 4.0, 2.0,
    0.0, 0.0, 2.0,
]

const topo = [
   
    0.0, 4.0, 0.0,
    2.0, 4.0, 0.0,
    2.0, 4.0, 2.0,

    2.0, 4.0, 2.0,
    0.0, 4.0, 2.0,
    0.0, 4.0, 0.0,
]

const vertices = new Float32Array(
    Array.prototype.concat(base, face1,face2,face3,face4, topo)
);

const uvs = new Float32Array([
	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,

	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,

    1.0, 1.0,
	0.0, 1.0,
	0.0, 0.0,
]);

const texture = new THREE.TextureLoader().load('./static/cube_texture.jpg');


cube.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
cube.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

 const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
//const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(cube, mat);
scene.add(mesh);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y+=0.01;
    mesh.rotation.x+=0.01;
}
animate();
