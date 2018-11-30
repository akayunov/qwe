import * as BABYLON from "babylonjs";

export class World {
    onClickSet: boolean;
    private _scene: BABYLON.Scene;
    camera: BABYLON.FreeCamera;

    constructor (scene: BABYLON.Scene, camera: BABYLON.FreeCamera) {
        this._scene = scene;
        this.camera = camera;
        let ground = BABYLON.MeshBuilder.CreateGround('ground',
                                    {width: 60, height: 60, subdivisions: 2}, scene);
        ground.checkCollisions = true;

        let box1 = BABYLON.MeshBuilder.CreateBox("myBox", {height: 1, width: 1, depth: 1}, scene);
        box1.position = new BABYLON.Vector3(1, 1 , 3);
//        box1.checkCollisions = true;
        let box2 = BABYLON.MeshBuilder.CreateBox("myBox", {height: 1, width: 1, depth: 1}, scene);
        box2.position = new BABYLON.Vector3(3, 1 , 3);
//        box2.checkCollisions = true;
        let box3 = BABYLON.MeshBuilder.CreateBox("myBox", {height: 1, width: 1, depth: 1}, scene);
        box3.position = new BABYLON.Vector3(5, 1 , 3);
//        box3.checkCollisions = true;
        console.log(box1.position.x);
        scene.registerAfterRender(
            () => {
                this.setOnClick();
                let cam_direction = camera.getTarget().subtract(camera.position);
//                console.log('sum: ' , camera.position.x + cam_direction.x * 3 );
                 box1.position = camera.position.add(cam_direction.scale(3));
//                console.log('box before: ', box1.position);
                BABYLON.Animation.CreateAndStartAnimation('boxscale', box1, 'position', 60, 120, box1.position, camera.position.add(cam_direction.scale(3)));
                }
        );
    };
    setOnClick () : void {
        if (this.onClickSet){}
        else{
            document.getElementById('renderCanvas').addEventListener('click',
                () => {
    //                    console.log('in click');
                    let boxX = BABYLON.MeshBuilder.CreateBox("myBoxX", {height: 1, width: 1, depth: 1}, this._scene);
                    let cam_direction = this.camera.getTarget().subtract(this.camera.position);
                    boxX.position = this.camera.position.add(cam_direction.scale(3));
                }
            );
            this.onClickSet = true;
        }
    }
}
