import { Car } from "./Car";

export class Audi extends Car {
  brand: number;
  constructor(brand: number) {
    super(brand);
    this.brand = brand;
  }
}
