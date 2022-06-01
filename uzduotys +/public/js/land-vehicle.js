"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = require("./vehicle.js");
class LandVehicle extends vehicle_js_1.default {
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
        };
        this.tires = tires;
    }
}
exports.default = LandVehicle;
//# sourceMappingURL=land-vehicle.js.map