import { Car } from "./Car.ts";
import { Engine } from "./Engine.ts";
import { FuelCapacity } from "./fuelcapacity.ts";

const myCar = new Car("Toyota", "Corolla", 2020, new Engine(150), new FuelCapacity(50));

console.log(myCar);