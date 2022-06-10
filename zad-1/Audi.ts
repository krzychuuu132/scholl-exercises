import { Car } from "./Car";

export class Audi extends Car {
  constructor(brand: string, course: number, horses: string) {
    super();
    this.brand = brand;
    this.course = course;
    this.horses = horses;
  }

  get parentIdField() {
    return super.idValue;
  }
}
