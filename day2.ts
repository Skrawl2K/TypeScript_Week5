//!------------- Erstelle alle Klassen --------------
//Klassenaufbau:

// 1. Eigenschaften
// 2. Werte der Eigenschaften durch Constructur
// 3. Methoden der Klasse

class vehicle {
    //In einer Klasse werden zu Beginn die EIgenschaften der zukünftigen Objekte definiert
    tanken: boolean;
    speed: number;
    pricePerMinute: number;
    id: number;
    distanceTravelled: number;
    taken: boolean;


    // Danach wird die Constructur-Funktion erstellt. Diese Funktion weist den Eigsnchaften die Werte zu beim Aufruf
    // vom Constructur mit "new"
    constructor(tanken: boolean, speed: number, pricePerMinute: number, id: number, distanceTravelled: number, taken: boolean) {
        this.tanken = tanken;
        this.speed = speed;
        this.pricePerMinute = pricePerMinute;
        this.id = id;
        this.distanceTravelled = distanceTravelled;
        this.taken = taken
    }

    //Getter und Setter Methoden sorgen dafür dass man nur indirekt auf die Eigenschaften und Methoden
    // zugreifen kann
    //Getter
    getTanken(): boolean {
        return this.tanken;
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
    getDistanceTravelled(): number {
        return this.distanceTravelled;
    }
    getTaken(): boolean {
        return this.taken;
    }
    //Setter

    setTanken(newTanken: boolean) {
        this.tanken = newTanken;
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

    setDistanceTravelled(newDistanceTravelled: number) {
        this.distanceTravelled = newDistanceTravelled;
    }

    setTaken(newTaken: boolean) {
        this.taken = newTaken;
    }
}

//!--------- Drei neue Klassen die "Vehicle" als Grundlage nehmen-------------

class car extends vehicle {
    fuelPercentage: number;
    kilometersLeft: number;
    brand: string;
    //Construktor erwartet diese Werte...
    constructor(tanken, speed, pricePerMinute, id, distanceTravelled, taken) {
        //...die wir aus unserer Vehicle Klasse geerbt haben
        super(tanken, speed, pricePerMinute, id, distanceTravelled, taken);
    }

    getFuelPercentage(): number {
        return this.fuelPercentage;
    }
}

class bike extends vehicle {
    brand: string;
    frameNumber: number;
    //Construktor erwartet diese Werte...
    constructor(tanken, speed, pricePerMinute, id, distanceTravelled, taken, brand: string, frameNumber: number) {
        //...die wir aus unserer Vehicle Klasse geerbt haben
        super(tanken, speed, pricePerMinute, id, distanceTravelled, taken);
    }


    getFrameNumber(): number {
        return this.frameNumber;
    }
}

class scooter extends vehicle {
    batteriePercentage: number;
    kilometersLeft: number;
    brand: string;
    //Construktor erwartet diese Werte...
    constructor(tanken: boolean, speed: number, pricePerMinute: number, id: number, distanceTravelled: number, taken: boolean, batteriePercentage: number, kilometersLeft: number, brand: string) {
        //...die wir aus unserer Vehicle Klasse geerbt haben
        super(tanken, speed, pricePerMinute, id, distanceTravelled, taken);
        this.batteriePercentage = batteriePercentage;
        this.kilometersLeft = kilometersLeft;
        this.brand = brand;
    }

    getBatteriePercentage(): number {
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
const updateDistance = (kmTravveld: number, vehicle: vehicle): number => {
    return vehicle.getDistanceTravelled() + kmTravveld;
}


console.log("kmTravveld:", updateDistance(50, audi));

// Prüfen ob schon verwendet

const isAvailable = (vehicle: vehicle) => {
    if (vehicle.getTaken()) {
        console.log("Erste Aufgabe: Das Auto ist vergeben")
    } else {
        console.log("Erste Aufgabe: Das Auto ist nicht vergeben")
    }
}

isAvailable(audi)

//Taken bei allen 3
// Scooter: Batter > 10%
// Car: Fuel > 15%

const isAvailable2 = (vehicle: scooter | car | bike) => {
    if (vehicle.getTaken()) {
        console.log("Zweite Aufgabe: Das Fahrzeugmittel ist verfügbar")
    } else {
        console.log("Zweite Aufgabe: Das Fahrzeugmittel ist vergeben")
    }

    if (vehicle instanceof scooter) {
        if (vehicle.getBatteriePercentage() > 10) {
            console.log("Zweite Aufgabe: Der Scooter ist verfügbar")
        } else {
            console.log("Zweite Aufgabe: Der Scooter ist vergeben")
        }

    } else if (vehicle instanceof car) {
        if (vehicle.getFuelPercentage() > 15) {
            console.log("Zweite Aufgabe: Das Auto ist verfügbar")
        } else {
            console.log("Zweite Aufgabe: Das Auto ist vergeben")
        }
    }
}

isAvailable2(aScooter);
console.log("aScooter:", aScooter);



export { }


