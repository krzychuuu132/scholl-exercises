export class Car {
  id: number;
  constructor(id: number) {
    this.id = id;
  }

  get idValue() {
    return this.id;
  }
}
