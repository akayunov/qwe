export class Mouse {
// TODO do it sigleton
    constructor() {
        this.lastMovementX = 0;
        this.lastMovementY = 0;
        document.getElementsByTagName('body')[0].addEventListener('mousemove', this.mousemove.bind(this));
    }

    mousemove (event){
//        console.log('event.movementX: ' + event.movementX);
//        console.log('event.movementY: ' + event.movementY);
        this.lastMovementX = event.movementX;
        this.lastMovementY = event.movementY;
        event.preventDefault();
    }
};
