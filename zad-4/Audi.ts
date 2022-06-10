import { Car } from "./Car";

export class Audi extends Car {
  id: number;
  constructor(id?: number) {
    super(id);
    this.id = id;
  }

  drive() {
    super.drive();
    console.log("metoda drive z klasy Audi");
  }

  render() {
    super.drive();
    console.log("metoda render z klasy Audi");
  }
}
