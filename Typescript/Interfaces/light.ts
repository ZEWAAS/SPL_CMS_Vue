import { Controllable } from "./controllable.ts";

export class Light implements Controllable {
    start(): void {
        console.log("The Light is on");
    }
}