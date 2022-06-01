"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = require("./vehicle.js");
class WaterVehicle extends vehicle_js_1.default {
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
        };
        this.maxDepth = maxDepth;
    }
}
exports.default = WaterVehicle;
//# sourceMappingURL=water-vehicle.js.map