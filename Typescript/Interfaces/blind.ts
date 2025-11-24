import { Controllable } from "./controllable.ts";

export class Blind implements Controllable {
    start(): void {
        console.log("Blind started");
    }
}