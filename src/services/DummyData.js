const SimulatedEngine = {
    vehicleSpeed: 0,
    wheelRadius: 0.33965,
    gearboxRatio: 4.171,
    driveRatio: 3.460,
    pi: 3.14,
    engineSpeed: 0,
    setVehilceSpeed: function (speed) { 
        this.vehicleSpeed = speed;
        this.engineSpeed = (30 * this.vehicleSpeed * this.gearboxRatio * this.driveRatio) / (3.6 * this.pi * this.wheelRadius);
    }
}

export default SimulatedEngine;