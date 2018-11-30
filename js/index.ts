import * as BABYLON from "babylonjs";
import * as Camera from './camera';
import * as World from './world';


class Game {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: Camera.Camera;
    private _light: BABYLON.Light;

    constructor(canvasElement : string) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
        this._canvas.onclick = (event) => {this._canvas.requestPointerLock();};
        this._engine = new BABYLON.Engine(this._canvas, true);
    }

    createScene() : void {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
//        this._scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
        this._scene.collisionsEnabled = true;

        this._camera = new Camera.Camera('camera1', new BABYLON.Vector3(0, 5,-10), this._scene, this._canvas);

        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);

        new World.World(this._scene, this._camera);
    }

    doRender() : void {
        // Run the render loop.
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // The canvas/window resize event handler.
        window.addEventListener('resize', () => {
            this._engine.resize();
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Create the game using the 'renderCanvas'.
    let game = new Game('renderCanvas');

    // Create the scene.
    game.createScene();

    // Start render loop.
    game.doRender();
});


//debugger;
