"use strict";
var HeightUnits;
(function (HeightUnits) {
    HeightUnits["centemeters"] = "cm";
    HeightUnits["metres"] = "m";
    HeightUnits["inches"] = "in";
})(HeightUnits || (HeightUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["kg"] = "kg";
    WeightUnits["lbs"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
class Person {
    constructor({ name, surname, age, height, heightUnits, weight, weightUnits, }) {
        this.name = name;
        this.surname = surname;
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnits);
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setAge(age) {
        if (age < 1 || age > 150) {
            console.error(`age value '${age}' for method Person.setAge in incorrect.\n\t Value must be in range [1; 150].`);
            return;
        }
        if (age % 1 !== 0) {
            console.error(`age value '${age}' for method Person.setAge in incorrect.\n\t Value must be an integer.`);
            return;
        }
        this.age = age;
    }
    setHeight(height, units) {
        switch (units) {
            case HeightUnits.centemeters:
                this.height = height;
                break;
            case HeightUnits.metres:
                this.height = height * 100;
                break;
            case HeightUnits.inches:
                this.height = height * 2.54;
                break;
            default: this.height = height;
        }
    }
    setWeight(weight, units) {
        switch (units) {
            case WeightUnits.kg:
                this.weight = weight;
                break;
            case WeightUnits.lbs:
                this.weight = weight / 2.20462262;
                break;
            default: this.weight = weight;
        }
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        if (this.height === undefined)
            return 0;
        let value;
        switch (Person.heightUnits) {
            case HeightUnits.centemeters:
                value = this.height;
                break;
            case HeightUnits.metres:
                value = this.height / 100;
                break;
            case HeightUnits.inches:
                value = this.height / 2.54;
                break;
            default: value = this.height;
        }
        return Math.round(value * 100) / 100;
    }
    getWeight() {
        if (this.weight === undefined)
            return 0;
        let value;
        switch (Person.weightUnits) {
            case WeightUnits.kg:
                value = this.weight;
                break;
            case WeightUnits.lbs:
                value = this.weight * 2.20462262;
                break;
            default: value = this.weight;
        }
        return Math.round(value * 10) / 10;
    }
    getFullname() {
        return `${this.name} ${this.surname}`;
    }
    toString() {
        let formattedPerson = `${this.name} ${this.surname}\n`;
        formattedPerson += `\theight: ${this.getHeight()} ${Person.heightUnits}\n`;
        formattedPerson += `\tweight: ${this.getWeight()}   ${Person.weightUnits}\n`;
        return formattedPerson;
    }
}
Person.heightUnits = HeightUnits.centemeters;
Person.weightUnits = WeightUnits.kg;
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const person = new Person({
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 20,
        height: 180,
        weight: 80,
    });
    const newName = 'Onutė';
    const newSurname = 'Ona';
    console.log('Pradinis žmogaus pilnas vardas:\n\t', person.getFullname());
    console.log('Keičiamas vardas ir pavardė:', { newName, newSurname });
    person.setName(newName);
    person.setSurname(newSurname);
    console.log('Pakeistas žmogaus pilnas vardas:\n\t', person.getFullname());
}
console.groupEnd();
console.log('');
console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const personWrongAge = new Person({
        name: 'Petras',
        surname: 'Petrutis',
        age: 2000,
        height: 180,
        weight: 80,
    });
    const person = new Person({
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 20,
        height: 180,
        weight: 80,
    });
    console.log('Person with wrong age param:\n\t', personWrongAge);
    console.log('Person with correctly set age:\n\t', person);
    const wrongAge1 = 4.6;
    const wrongAge2 = -56;
    const wrongAge3 = 999;
    const rightAge = 19;
    console.log('setting age:', wrongAge1);
    person.setAge(wrongAge1);
    console.log('person age:', person.getAge());
    console.log('setting age:', wrongAge2);
    person.setAge(wrongAge2);
    console.log('person age:', person.getAge());
    console.log('setting age:', wrongAge3);
    person.setAge(wrongAge3);
    console.log('person age:', person.getAge());
    console.log('setting age:', rightAge);
    person.setAge(rightAge);
    console.log('person age:', person.getAge());
}
console.groupEnd();
console.log('');
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const personProps1 = {
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 20,
        height: 180,
        weight: 80,
    };
    const personProps2 = {
        name: 'Bronius',
        surname: 'Bronaitis',
        age: 20,
        height: 70,
        weight: 80,
        heightUnits: HeightUnits.inches,
    };
    const personProps3 = {
        name: 'Amerikas',
        surname: 'Magelanas',
        age: 20,
        height: 1.75,
        weight: 78,
        heightUnits: HeightUnits.metres,
    };
    const person1 = new Person(personProps1);
    const person2 = new Person(personProps2);
    const person3 = new Person(personProps3);
    console.log('Sukurtas Person objektas be nurodytų matavimo vienetų:', '\n\tprops:', personProps1, '\n\tperson:', person1);
    console.log('Sukurtas Person su ūgio matavimo vienetais - coliais:', '\n\tprops:', personProps2, '\n\tperson:', person2);
    console.log('Sukurtas Person su ūgio matavimo vienetais - metrais', '\n\tprops:', personProps3, '\n\tperson:', person3);
    console.log('\n---\n');
    const newHeightProps1 = [1.55, HeightUnits.metres];
    const newHeightProps2 = [65, HeightUnits.inches];
    const newHeightProps3 = [165, HeightUnits.centimeters];
    console.log('Keisime šio žmogaus ūgį:', person1);
    console.log('Nustatomas ūgis:', newHeightProps1);
    person1.setHeight(...newHeightProps1);
    console.log('Žmogaus ūgis centimetrais:', person1.getHeight());
    console.log('Nustatomas ūgis:', newHeightProps2);
    person1.setHeight(...newHeightProps2);
    console.log('Žmogaus ūgis centimetrais:', person1.getHeight());
    console.log('Nustatomas ūgis:', newHeightProps3);
    person1.setHeight(...newHeightProps3);
    console.log('Žmogaus ūgis centimetrais:', person1.getHeight());
}
console.groupEnd();
console.log('');
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
    console.log('Person klasės statinės savybės:');
    console.dir({ ...Person });
    console.log('Keičiami matavimo vienetai į:', HeightUnits.INCHES);
    Person.heightUnits = HeightUnits.inches;
    console.log('Person klasės statinės savybės:');
    console.dir({ ...Person });
    console.log('Keičiami matavimo vienetai į:', HeightUnits.METRES);
    Person.heightUnits = HeightUnits.metres;
    console.log('Person klasės statinės savybės:');
    console.dir({ ...Person });
}
console.groupEnd();
console.log('');
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
    const person = new Person({
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 20,
        height: 180,
        weight: 80,
    });
    console.log('Sukurtas objektas:', person);
    console.log('\n--\n');
    Person.heightUnits = HeightUnits.centimeters;
    console.log('Person klasės ūgio matavimo vienetai:', Person.heightUnits);
    console.log('žmogaus ūgis', person.getHeight());
    Person.heightUnits = HeightUnits.inches;
    console.log('Person klasės ūgio matavimo vienetai:', Person.heightUnits);
    console.log('žmogaus ūgis', person.getHeight());
    Person.heightUnits = HeightUnits.metres;
    console.log('Person klasės ūgio matavimo vienetai:', Person.heightUnits);
    console.log('žmogaus ūgis', person.getHeight());
}
console.groupEnd();
console.log('');
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    const person = new Person({
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 20,
        height: 180,
        weight: 80,
    });
    console.log('Sukurtas objektas:', person);
    console.log('\n--\n');
    Person.weightUnits = WeightUnits.kg;
    console.log('Person klasės svorio matavimo vienetai:', Person.weightUnits);
    console.log('žmogaus ūgis', person.getWeight());
    Person.weightUnits = WeightUnits.lbs;
    console.log('Person klasės svorio matavimo vienetai:', Person.weightUnits);
    console.log('žmogaus ūgis', person.getWeight());
}
console.groupEnd();
console.log('');
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
{
    const person1 = new Person({
        name: 'Petras',
        surname: 'Petrutis',
        age: 80,
        height: 166,
        weight: 64,
    });
    const person2 = new Person({
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 20,
        height: 180,
        weight: 80,
    });
    Person.heightUnits = HeightUnits.metres;
    Person.weightUnits = WeightUnits.kg;
    console.log('European Standard');
    console.log(person1.toString());
    console.log(person2.toString());
    Person.heightUnits = HeightUnits.inches;
    Person.weightUnits = WeightUnits.lbs;
    console.log('American Standard');
    console.log(person1.toString());
    console.log(person2.toString());
}
//# sourceMappingURL=main.js.map