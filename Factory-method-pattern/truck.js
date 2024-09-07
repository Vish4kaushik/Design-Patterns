import Vehicle from './vehicle.js';

class Truck extends Vehicle {
    constructor() {
        super(); //calls the parent class constructor
        this.config = {
            name: 'Tata Prima',
            color: 'Grey',
            fuelType: 'Diesel',
            cylinders: 6 
        }
    }
    configuration() {
        console.log("Truck config...",this.config)
    }
    drive() {  //alter the parent class function
        console.log('truck driving.....');
    }
}

export default Truck;