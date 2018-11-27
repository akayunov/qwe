import * as BABYLON from "babylonjs";

export class GameScene {
    constructor (scene: BABYLON.Scene) {
        // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
        let sphere = BABYLON.MeshBuilder.CreateSphere('sphere',
                                    {segments: 16, diameter: 2}, scene);

        // Move the sphere upward 1/2 of its height.
        sphere.position.y = 10;

        // Create a built-in "ground" shape.
        let ground = BABYLON.MeshBuilder.CreateGround('ground',
                                    {width: 6, height: 6, subdivisions: 2}, scene);
        ground.checkCollisions = true;
        sphere.checkCollisions = true;
    }
}
