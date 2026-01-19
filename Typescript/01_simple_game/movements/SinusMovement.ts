import { Movement } from "./Movement";

export class SinusMovement implements Movement {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  update(deltaTime: number): void {
    this.x += deltaTime * 100;
    this.y = Math.sin(this.x / 50) * 50 + 100;
  }
  getPosition(): { x: number; y: number } {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
