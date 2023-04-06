class vehicle {
    taken: boolean;
    speed: number;
    pricePerMinute: number;
    id: number;
    distanceTravelled: number;

    constructor(distanceTravelled: number, taken: boolean, speed: number, pricePerMinute: number, id: number) {
        this.taken = taken;
        this.speed = speed;
        this.pricePerMinute = pricePerMinute;
        this.id = id;
        this.distanceTravelled = distanceTravelled;
    }

    //Getter

    getDistanceTraveled(): number {
        return this.distanceTravelled;
    }

    getTaken(): boolean {
        return this.taken;
    }

    getSpeed(): number {
        return this.speed;
    }

    getPricePerMinute(): number {
        return this.pricePerMinute;
    }

    getId(): number {
        return this.id;
    }

    //Setter


    setDistanceTravelled(newDistance: number) {
        this.distanceTravelled = newDistance;
    }
    setTaken(newTaken: boolean) {
        this.taken = newTaken;
    }

    setSpeed(newSpeed: number) {
        this.speed = newSpeed;
    }

    setPricePerMin(newPricePerMin: number) {
        this.pricePerMinute = newPricePerMin;
    }

    setId(newId: number) {
        this.id = newId;
    }

    updateDistance(distance: number) {
        this.distanceTravelled = this.distanceTravelled + distance;
    }
}

let audi = new vehicle(150, true, 50, 3, 123);
console.log("alt:", audi);

audi.setSpeed(60);
console.log("neu:", audi);

console.log(audi.getDistanceTraveled());

audi.updateDistance(150)

console.log(audi.getDistanceTraveled());


export { }
