"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class vehicle {
    constructor(distanceTravelled, taken, speed, pricePerMinute, id) {
        this.taken = taken;
        this.speed = speed;
        this.pricePerMinute = pricePerMinute;
        this.id = id;
        this.distanceTravelled = distanceTravelled;
    }
    //Getter
    getDistanceTraveled() {
        return this.distanceTravelled;
    }
    getTaken() {
        return this.taken;
    }
    getSpeed() {
        return this.speed;
    }
    getPricePerMinute() {
        return this.pricePerMinute;
    }
    getId() {
        return this.id;
    }
    //Setter
    setDistanceTravelled(newDistance) {
        this.distanceTravelled = newDistance;
    }
    setTaken(newTaken) {
        this.taken = newTaken;
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    setPricePerMin(newPricePerMin) {
        this.pricePerMinute = newPricePerMin;
    }
    setId(newId) {
        this.id = newId;
    }
    updateDistance(distance) {
        this.distanceTravelled = this.distanceTravelled + distance;
    }
}
let audi = new vehicle(150, true, 50, 3, 123);
console.log("alt:", audi);
audi.setSpeed(60);
console.log("neu:", audi);
console.log(audi.getDistanceTraveled());
audi.updateDistance(150);
console.log(audi.getDistanceTraveled());
//# sourceMappingURL=day1.js.map