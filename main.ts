import { Audi } from "./zad-1/Audi";
import { Car } from "./zad-1/Car";

import { Audi as Audi2 } from "./zad-2/Audi";
import { Car as Car2 } from "./zad-2/Car";

import { Car as Car3 } from "./zad-3/Car";

import { Car as Car4 } from "./zad-4/Car";
import { Audi as Audi4 } from "./zad-4/Audi";

import { Car as Car5 } from "./zad-5/Car";
import { Audi as Audi5 } from "./zad-5/Audi";

// Zad 1
const car = new Car();
const audi = new Audi("audi", 120000, "220");
console.log(audi.parentIdField);
console.log(car.id, "car id");
console.log(audi.brand, "marka");

// Zad 2
const car2 = new Car2(12);
const audi2 = new Audi2(50);
console.log(audi2);

// Zad 3
const car3 = new Car3();
car3.render();

// Zad 4
const car4 = new Car4();
car4.drive();
car4.render();

const audi4 = new Audi4();
audi4.drive();
audi4.render();

// Zad 4
const car5 = new Car5(150000);
console.log(car5.brand);

const audi5 = new Audi5(190000);
console.log(audi5.brand);
