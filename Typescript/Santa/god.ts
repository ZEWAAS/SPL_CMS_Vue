import { notify } from "./notify.ts";

export class God implements notify {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    notify(): void {
        console.log(`Dear ${this.name}, Santa has a gift for you!`);
    }
}