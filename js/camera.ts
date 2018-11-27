import * as BABYLON from "babylonjs";

export class Camera extends BABYLON.FreeCamera{
    camera: BABYLON.FreeCamera;

    constructor(name: string, position: BABYLON.Vector3, scene: BABYLON.Scene, canvas: HTMLCanvasElement) {
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        super(name, position, scene);
        // Target the camera to scene origin.
        this.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas.
        this.attachControl(canvas, false);
        // attach gravity
//        this.applyGravity = true;
        // define player ellipsoid
        this.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        this.checkCollisions = true;

    }
};
