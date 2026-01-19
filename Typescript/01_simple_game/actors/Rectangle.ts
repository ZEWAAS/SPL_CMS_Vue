import { Actor } from "./Actor";
import { Movement } from "../movements/Movement.js";

export class Rectangle implements Actor {
  constructor(
    private sizeX: number,
    private sizeY: number,
    private movement: Movement,
  ) {}

  update(deltaTime: number) {
    this.movement.update(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.movement.getPosition().x, this.movement.getPosition().y, this.sizeX, this.sizeY);
  }
}
