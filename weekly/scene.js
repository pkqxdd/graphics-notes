// ------ constructing scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    80, // vertical height
    window.innerWidth / window.innerHeight, // aspect ratio
    1, // near plane
    1000 // far plane
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

scene.add(camera);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// ------ scene construction completed


// ------ construct material for the spheres
const backWallMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0xfaf2e1 // base wall color
    }
);

const floorMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0xfaf2e1,
    }
);

const leftWallMaerial = new THREE.MeshStandardMaterial(
    {
        color: 0xfae1f1 // triadic harmony color with base
    }
);

const rightWallMaterial = new THREE.MeshStandardMaterial(
    {
        color: 0xe1faf3 // triadic harmony color with base
    }
);

const sphereMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0xffc9c5 // base object color
    }
);

const boxMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0xffd7c5 // analogous harmony color with base
    }
);

const cylinderMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0xffc5da // analogous harmony color with base
    }
);



// ------ material construction completed

// ------ constructing geometry objects in the box

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
        30, //radius
        100, // width segments
        100, // height segments
        20, //ring
    ), sphereMaterial);
sphere.position.z = -250;
sphere.position.y = -45;
sphere.position.x = -100;
sphere.castShadow = true;
scene.add(sphere);


const box = new THREE.Mesh(
    new THREE.BoxGeometry(
        30, //width
        100, //height
        30, //depth
    ),
    boxMaterial
);
box.position.z = -200;
box.position.x = 0;
box.position.y = -25;
box.rotation.y = Math.PI / 6;
box.castShadow = true;
scene.add(box);

const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(
        20, // top radius
        20, // bottom radius
        100, // height
        1000, // radius segments
    ),
    cylinderMaterial
);

cylinder.position.x = 70;
cylinder.position.y = -75;
cylinder.position.z = -145;
cylinder.castShadow = true;
cylinder.receiveShadow = true;
scene.add(cylinder);
// ----- geometry objects construction completed

// constructing the box 
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(
        2000, //height
        2000, //width
    ),
    floorMaterial
);
floor.position.z = -300;
floor.position.y = -75;
floor.position.x = 0;
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);


const ceiling = new THREE.Mesh(
    new THREE.PlaneGeometry(
        2000, //height
        2000, //width
    ),
    backWallMaterial
    // ceiling uses material of the back wall instead of the floor so it can be properly lit
);
ceiling.position.z = -300;
ceiling.position.y = 150;
ceiling.position.x = 0;
ceiling.rotation.x = Math.PI / 2; //90 degrees in radian
ceiling.receiveShadow = true;
scene.add(ceiling);


const backWall = new THREE.Mesh(
    new THREE.PlaneGeometry(
        2000, //height
        2000, //width
    ),
    backWallMaterial
);
backWall.position.z = -300;
scene.add(backWall);


const leftWall = new THREE.Mesh(
    new THREE.PlaneGeometry(
        2000, //height
        2000, //width
    ),
    leftWallMaerial
);
leftWall.position.x = -150;
leftWall.position.y = 0;
leftWall.position.z = -200;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(
    new THREE.PlaneGeometry(
        2000, //height
        2000, //width
    ),
    rightWallMaterial
);

rightWall.position.x = 150;
rightWall.position.y = 0;
rightWall.position.z = -200;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

// ------ box construction completed

// ------ constructing light sources
const light = new THREE.PointLight(0xffffff, 0.8);
light.position.x = -50;
light.position.y = 149;
light.position.z = -150;
light.castShadow = true;
light.shadow.mapSize.width = 4096;
light.shadow.mapSize.height = 4096;
scene.add(light);

const ambient = new THREE.AmbientLight(0xfffebe, 0.3); // warm white
scene.add(ambient);
// ------ light sources construction completed

// trigger the actual rendering
function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();
