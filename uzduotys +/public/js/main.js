"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const water_vehicle_js_1 = require("./water-vehicle.js");
const land_vehicle_js_1 = require("./land-vehicle.js");
const air_vehicle_js_1 = require("./air-vehicle.js");
const vehicles = [
    new water_vehicle_js_1.default({
        maxDepth: 50,
    }, {
        brand: 'Sailor',
        model: 'Ocean 3000',
        year: 2011,
    }),
    new water_vehicle_js_1.default({
        maxDepth: 70,
    }, {
        brand: 'LandScraper',
        model: 'Fagotti',
        year: 202,
    }),
    new land_vehicle_js_1.default({
        tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
    }, {
        brand: 'Toyota',
        model: 'Corola',
        year: 2005,
    }),
    new land_vehicle_js_1.default({
        tires: ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
    }, {
        brand: 'Nisan',
        model: 'Qashqai',
        year: 2007,
    }),
    new air_vehicle_js_1.default({
        maxAltitude: 7000,
    }, {
        brand: 'Jeti',
        model: 'Nitro',
        year: 2015,
    }),
    new air_vehicle_js_1.default({
        maxAltitude: 5000,
    }, {
        brand: 'Falcon',
        model: 'Bamasi',
        year: 2012,
    }),
];
vehicles.forEach(v => console.log(v.toString()));
//# sourceMappingURL=main.js.map