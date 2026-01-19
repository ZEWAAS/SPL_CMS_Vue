// MyGame - Example implementation of Game interface
import { Circle } from "./actors/Circle.js";
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { SinusMovement } from "./movements/SinusMovement.js";
import { RightMovement } from "./movements/RightMovement.js";
class MyGame extends Game {
    constructor() {
        super();
        // Always code against interfaces
        this.actors = [];
    }
    addActor(actor) {
        this.actors.push(actor);
    }
    init() {
        console.log("Game started!");
        const r1 = new Rectangle(80, 90, new LeftMovement(400, 100));
        const r2 = new Rectangle(100, 100, new RightMovement(100, 400));
        const r3 = new Rectangle(100, 100, new SinusMovement(100, 100));
        const c1 = new Circle(50, 50, new RightMovement(50, 300));
        this.addActor(r1);
        this.addActor(r2);
        this.addActor(r3);
        this.addActor(c1);
    }
    update(deltaTime) {
        console.log("Inside update", deltaTime);
        for (const actor of this.actors) {
            actor.update(deltaTime);
        }
    }
    render(ctx) {
        console.log("in rendeers");
        // DRY. dont repeat yourself
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
