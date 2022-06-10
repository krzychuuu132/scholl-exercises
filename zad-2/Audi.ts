import { Car } from "./Car";

export class Audi extends Car {
  id: number;
  constructor(id: number) {
    super(id);
    this.id = id;
  }

  get parentIdField() {
    return super.idValue;
  }
}
