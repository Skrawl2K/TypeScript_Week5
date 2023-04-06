"use strict";
//!------------- Erstelle alle Klassen --------------
//Klassenaufbau:
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Eigenschaften
// 2. Werte der Eigenschaften durch Constructur
// 3. Methoden der Klasse
class vehicle {
    // Danach wird die Constructur-Funktion erstellt. Diese Funktion weist den Eigsnchaften die Werte zu beim Aufruf
    // vom Constructur mit "new"
    constructor(tanken, speed, pricePerMinute, id, distanceTravelled, taken) {
        this.tanken = tanken;
        this.speed = speed;
        this.pricePerMinute = pricePerMinute;
        this.id = id;
        this.distanceTravelled = distanceTravelled;
        this.taken = taken;
    }
    //Getter und Setter Methoden sorgen dafür dass man nur indirekt auf die Eigenschaften und Methoden
    // zugreifen kann
    //Getter
    getTanken() {
        return this.tanken;
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
    getDistanceTravelled() {
        return this.distanceTravelled;
    }
    getTaken() {
        return this.taken;
    }
    //Setter
    setTanken(newTanken) {
        this.tanken = newTanken;
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
    setDistanceTravelled(newDistanceTravelled) {
        this.distanceTravelled = newDistanceTravelled;
    }
    setTaken(newTaken) {
        this.taken = newTaken;
    }
}
//!--------- Drei neue Klassen die "Vehicle" als Grundlage nehmen-------------
class car extends vehicle {
    //Construktor erwartet diese Werte...
    constructor(tanken, speed, pricePerMinute, id, distanceTravelled, taken) {
        //...die wir aus unserer Vehicle Klasse geerbt haben
        super(tanken, speed, pricePerMinute, id, distanceTravelled, taken);
    }
    getFuelPercentage() {
        return this.fuelPercentage;
    }
}
class bike extends vehicle {
    //Construktor erwartet diese Werte...
    constructor(tanken, speed, pricePerMinute, id, distanceTravelled, taken, brand, frameNumber) {
        //...die wir aus unserer Vehicle Klasse geerbt haben
        super(tanken, speed, pricePerMinute, id, distanceTravelled, taken);
    }
    getFrameNumber() {
        return this.frameNumber;
    }
}
class scooter extends vehicle {
    //Construktor erwartet diese Werte...
    constructor(tanken, speed, pricePerMinute, id, distanceTravelled, taken, batteriePercentage, kilometersLeft, brand) {
        //...die wir aus unserer Vehicle Klasse geerbt haben
        super(tanken, speed, pricePerMinute, id, distanceTravelled, taken);
        this.batteriePercentage = batteriePercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }
    getBatteriePercentage() {
        return this.batteriePercentage;
    }
}
//Erstelle Objekte aus den Klassen
//Objekt erstellen mit Vehicle Klasse
let audi = new vehicle(true, 50, 3, 123, 15, true);
console.log("alt:", audi);
//Objekt erstellen mit Car Klasse
let seat = new car(true, 50, 3, 123, 15, true);
//Objekt erstellen mit Scooter Klasse
let aScooter = new scooter(true, 6, 3, 123, 15, true, 5, 5, "lime");
//Objekt erstellen mit Bike Klasse
let aBike = new bike(true, 50, 3, 123, 15, true, "mercedes", 15);
//!-------------- Aufrufe --------------
audi.setSpeed(60);
console.log("neu:", audi);
// Distanz berechnen und ausgeben
const updateDistance = (kmTravveld, vehicle) => {
    return vehicle.getDistanceTravelled() + kmTravveld;
};
console.log("kmTravveld:", updateDistance(50, audi));
// Prüfen ob schon verwendet
const isAvailable = (vehicle) => {
    if (vehicle.getTaken()) {
        console.log("Erste Aufgabe: Das Auto ist vergeben");
    }
    else {
        console.log("Erste Aufgabe: Das Auto ist nicht vergeben");
    }
};
isAvailable(audi);
//Taken bei allen 3
// Scooter: Batter > 10%
// Car: Fuel > 15%
const isAvailable2 = (vehicle) => {
    if (vehicle.getTaken()) {
        console.log("Zweite Aufgabe: Das Fahrzeugmittel ist verfügbar");
    }
    else {
        console.log("Zweite Aufgabe: Das Fahrzeugmittel ist vergeben");
    }
    if (vehicle instanceof scooter) {
        if (vehicle.getBatteriePercentage() > 10) {
            console.log("Zweite Aufgabe: Der Scooter ist verfügbar");
        }
        else {
            console.log("Zweite Aufgabe: Der Scooter ist vergeben");
        }
    }
    else if (vehicle instanceof car) {
        if (vehicle.getFuelPercentage() > 15) {
            console.log("Zweite Aufgabe: Das Auto ist verfügbar");
        }
        else {
            console.log("Zweite Aufgabe: Das Auto ist vergeben");
        }
    }
};
isAvailable2(aScooter);
console.log("aScooter:", aScooter);
//# sourceMappingURL=day2.js.map