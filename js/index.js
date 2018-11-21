import * as THREE from 'three';
import * as Mouse from './mouse';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 , false );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var mouse = new Mouse.Mouse();
//mouse.addMouseMoveListener();

var x = 0, y = 0, z = 0;
function animate() {
    requestAnimationFrame( animate );
    console.log('mouse:' + mouse.lastMovementX + ' ' + mouse.lastMovementY);
    x -= mouse.lastMovementX/100;
    y += mouse.lastMovementY/100;
//    console.log('look at: ' +  x + ' ' +  y);
    camera.lookAt( x , y, 0 );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}




animate();

//debugger;
