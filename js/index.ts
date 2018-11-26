import * as BABYLON from "babylonjs";
import * as Mouse from './mouse';

const canvas: any = document.getElementById("renderCanvas");
console.log(canvas);

const engine: BABYLON.Engine = new BABYLON.Engine(canvas, true);

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

	/********** UNIVERSAL CAMERA EXAMPLE **************************/

    // This creates and positions a universal camera (non-mesh)
	var camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

	/**************************************************************/

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

	//Materials
	var redMat = new BABYLON.StandardMaterial("red", scene);
	redMat.diffuseColor = new BABYLON.Color3(255, 0, 0);
	redMat.emissiveColor = new BABYLON.Color3(255, 0, 0);
	redMat.specularColor = new BABYLON.Color3(255, 0, 0);

	var greenMat = new BABYLON.StandardMaterial("green", scene);
	greenMat.diffuseColor = new BABYLON.Color3(0, 255, 0);
	greenMat.emissiveColor = new BABYLON.Color3(0, 255, 0);
	greenMat.specularColor = new BABYLON.Color3(0, 255, 0);

	var blueMat = new BABYLON.StandardMaterial("blue", scene);
	blueMat.diffuseColor = new BABYLON.Color3(0, 0, 255);
	blueMat.emissiveColor = new BABYLON.Color3(0, 0, 255);
	blueMat.specularColor = new BABYLON.Color3(0, 0, 255);

	// Shapes
	var plane1 =  BABYLON.Mesh.CreatePlane("plane1", 3, scene, true, BABYLON.Mesh.DOUBLESIDE);
	plane1.position.x = -3;
	plane1.position.z = 0;
	plane1.material = redMat;

	var plane2 =  BABYLON.Mesh.CreatePlane("plane2", 3, scene, true, BABYLON.Mesh.DOUBLESIDE);
	plane2.position.x = 3;
	plane2.position.z = -1.5;
	plane2.material = greenMat;

	var plane3 =  BABYLON.Mesh.CreatePlane("plane3", 3, scene, true, BABYLON.Mesh.DOUBLESIDE);
	plane3.position.x = 3;
	plane3.position.z = 1.5;
	plane3.material = blueMat;

	var ground = BABYLON.Mesh.CreateGround("ground1", 10, 10, 2, scene);

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});


//debugger;
