class Vehicle {
    constructor(vehicleType) {
        this.vehicle = this._registerVehicle(vehicleType);
        this.occupiedSpot = null;
    }

    _registerVehicle(vehicleType){
        switch(vehicleType) {
            case 'motorcycle':
                return {
                    type: 'motorcycle',
                    spotType: ['m', 'c', 'l'],
                    size: 1
                }
            case 'car':
                return {
                    type: 'car',
                    spotType: ['c'],
                    size: 1
                } 
            case 'bus':
                return {
                    type: 'bus',
                    spotType: ['l'],
                    size: 5
                }
        }  
    }
}

class ParkingLot {
    constructor(structure) {
        this.structure = structure;
        this._currentLevel = Object.keys(this.structure)[0];
        this._maxLevel = Object.keys(this.structure).length;
        this._currentRow = 0;
        this._maxRow = this.structure[this._currentLevel].length;
        this._currentSpot = 0; 
        this._maxSpots = this.structure[this._currentLevel][this._currentRow].length;
    }

    parkVehicle(vehicleType) {
        const vehicle = new Vehicle(vehicleType);
        const spot = this._decideSpot(vehicle.vehicle); 
        vehicle.occupiedSpot = spot;
        return vehicle;
    }

    _decideSpot(vehicle) {
        let spotLocation = '';

        //multiple spot
        if(vehicle.size > 1) {
            
        }

        // single spot
        if(vehicle.size === 1) {
            for(let i=0; i< this.structure[this._currentLevel][this._currentRow].length; i++) {
                let spot = this.structure[this._currentLevel][this._currentRow][i];
                this._currentSpot++;
                if(vehicle.spotType.includes(spot)) {
                    this.structure[this._currentLevel][this._currentRow][i] = this.structure[this._currentLevel][this._currentRow][i] + '%';
                    spotLocation = this._currentLevel + ' - ' + this._currentRow + ' - ' + i;
                    this._currentSpot = 0;
                    this._currentRow = 0;
                    this._currentLevel = 0;
                    return spotLocation;
                }
            }
            if(this._currentSpot === this._maxSpots) {
                if(this._currentRow === this._maxRow) {
                    if(this._currentLevel === this._maxLevel) console.log('No space available');
                    else {
                        this._currentLevel++;
                        this._currentRow = 0;
                        this._currentSpot = 0;
                        return this._decideSpot(vehicle);
                    }
                } else {
                    this._currentSpot = 0;
                    this._currentRow++;
                    return this._decideSpot(vehicle);
                }
            } else {
                this._currentSpot = 0;
                this._currentRow++;
                return this._decideSpot(vehicle);
            }
        }
    }
}


const structure = {
    '0' :[
        ['m','m','m','m','m'],
        ['l','l','l','l','l'],
        ['m','c','m','c','l'],
        ['c','c','c','l','m']
    ],
    '1' :[
        ['m','m','m','c','c'],
        ['l','l','l','l','l'],
        ['m','c','m','c','l'],
        ['c','c','c','l','m']
    ],
    '2' :[
        ['m','m','m','c','c'],
        ['l','l','l','l','l'],
        ['m','c','m','c','l'],
        ['c','c','c','l','m']
    ]
};
const myParkingLot = new ParkingLot(structure);
console.log(myParkingLot.parkVehicle('motorcycle'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('motorcycle'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('car'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('motorcycle'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('motorcycle'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('motorcycle'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('motorcycle'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('car'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('car'));
console.log(JSON.stringify(myParkingLot));
console.log(myParkingLot.parkVehicle('car'));
console.log(JSON.stringify(myParkingLot));

