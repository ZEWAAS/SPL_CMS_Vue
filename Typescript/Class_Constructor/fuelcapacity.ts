export class FuelCapacity {
    constructor(private capacityInLiters: number) {
        this.setCapacity(capacityInLiters);
    }

    public setCapacity(capacityInLiters: number) {
        this.ckeckCapacity(this.capacityInLiters);
    }
    private ckeckCapacity(capacityInLiters: number) {
        if (capacityInLiters < 5) {
            this.capacityInLiters = 5;
        } else if (capacityInLiters > 500) {
            //throw new Error("Year cannot be later than 2025.");
            this.capacityInLiters = 500;
        } else {
            this.capacityInLiters = capacityInLiters;
        }
}
}