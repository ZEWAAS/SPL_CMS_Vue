import { Engine } from "./Engine.ts";
import { FuelCapacity } from "./fuelcapacity.ts";
export class Car {
    // Kapselung
    // Objektvariablen, Instanzvariablen
    // Gedächnisvariablen
    // private brand: string;
    // private model: string;
    // private year: number = 2020;

    constructor(private brand: string, private model: string, private year: number = 2020, private engine: Engine, private fuelCapacity: FuelCapacity) {
        this.brand = brand;
        this.model = model;
        this.checkYear(year);
        this.engine = engine;
        this.fuelCapacity = fuelCapacity;
    }

    public getYear() {
        return this.year;
    }

    public setYear(year: number) {
        this.checkYear(year);
    }

    private checkYear(year: number) {
        if (year < 1886) {
            //throw new Error("Year cannot be earlier than 1886.");
            this.year = 1886;
        } else if (year > 2025) {
            //throw new Error("Year cannot be later than 2025.");
            this.year = 2025;
        } else {
            this.year = year;
        }
}
}