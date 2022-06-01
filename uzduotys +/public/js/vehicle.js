"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor({ brand, model, year }) {
        this.getString = () => {
            const { brand, model, year } = this;
            return `${brand} ${model} ${year}\n`;
        };
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
exports.default = Vehicle;
//# sourceMappingURL=vehicle.js.map