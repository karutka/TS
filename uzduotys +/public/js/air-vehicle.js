"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = require("./vehicle.js");
class AirVehicle extends vehicle_js_1.default {
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
        };
        this.maxAltitude = maxAltitude;
    }
}
exports.default = AirVehicle;
//# sourceMappingURL=air-vehicle.js.map