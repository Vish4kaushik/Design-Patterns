import Vehicle from './vehicle.js';

class Bike extends Vehicle {

    constructor() {
        super(); //calls the parent class constructor
        this.config = {
            name: 'Jawa 350',
            color: 'White',
            fuelType: 'Petrol',
            cylinders: 1 
        }
    }

    configuration() {
        console.log('Bike config...',this.config);
    }
}

export default Bike;