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

camera.position.z = 6;

const piramide = new THREE.BufferGeometry();

const base = [
    //5,3,4
    0.0,-2.0 , 0.0,
    0.0, 0.0, -2.0,
    0.0, 2.0, 0.0,
    //4,2,5
    0.0, 2.0, 0.0,
    0.0, 0.0, 2.0,
    0.0,-2.0 , 0.0,
]

const face1 = [
    //4,3,1
    0.0, 2.0, 0.0,
    0.0, 0.0, -2.0,
    4.0, 0.0, 0.0,
]

const face2 = [
    //5,3,1
    0.0,-2.0 , 0.0,
    0.0, 0.0, -2.0,
    4.0, 0.0, 0.0,
]

const face3 = [
    //5,2,1
    0.0,-2.0 , 0.0,
    0.0, 0.0, 2.0,
    4.0, 0.0, 0.0,
]

const face4 = [
    //2,4,1
    0.0, 0.0, 2.0,
    0.0, 2.0, 0.0,
    4.0, 0.0, 0.0,
]

const vertices = new Float32Array(
    Array.prototype.concat(base, face1, face2, face3, face4 )
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
	0.5, 1.0,

	0.0, 0.0,
	1.0, 0.0,
	0.5, 1.0,

	0.0, 0.0,
	1.0, 0.0,
	0.5, 1.0,

	0.0, 0.0,
	1.0, 0.0,
	0.5, 1.0,
]);

const texture = new THREE.TextureLoader().load('./static/pyramid_texture.jpg');


piramide.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
piramide.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

// const mat = new THREE.MeshBasicMaterial({ color: 0x00ffdd, wireframe: true });
const mat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(piramide, mat);
scene.add(mesh);


function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    mesh.rotation.y+=0.01;
}
animate();
