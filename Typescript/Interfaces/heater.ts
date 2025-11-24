import { Controllable } from "./controllable.ts";

export class Heater implements Controllable {
    start(): void {
        console.log("The heating is on");
    }
}