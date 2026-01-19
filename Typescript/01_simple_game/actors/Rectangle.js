export class Rectangle {
    constructor(sizeX, sizeY, movement) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.movement = movement;
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.movement.getPosition().x, this.movement.getPosition().y, this.sizeX, this.sizeY);
    }
}
