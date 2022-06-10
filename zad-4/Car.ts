export class Car {
  id: number;
  constructor(id?: number) {
    this.id = id;
  }

  drive() {
    console.log("metoda drive z klasy Car");
  }

  render() {
    console.log("metoda render z klasy Car");
  }
}
