const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(3, 2, 1);
scene.add(pointLight, ambientLight);



const cubeGeo = new THREE.BoxGeometry();
const cubeMat = new THREE.MeshLambertMaterial({color: 0x55f8f9});
const cube = new THREE.Mesh(cubeGeo, cubeMat);
scene.add(cube);



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.y += 0.025;
    cube.rotation.x += 0.025;
}

animate();