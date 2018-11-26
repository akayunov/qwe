export class Mouse {
// TODO do it sigleton
    lastMovementX: number;
    lastMovementY: number;
    constructor(test: string) {
        this.lastMovementX = 0;
        this.lastMovementY = 0;
        document.getElementsByTagName('body')[0].addEventListener('mousemove', this.mousemove.bind(this));
    }

    mousemove (event: MouseEvent){
        this.lastMovementX = event.movementX;
        this.lastMovementY = event.movementY;
        event.preventDefault();
    }
};
