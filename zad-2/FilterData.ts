interface ObjProperties {
  id: number;
  name: string;
}

export class FilterData<T extends ObjProperties> {
  private array: Array<T> = [];
  constructor(array: Array<T>) {
    this.array = array;
  }
  add(el: T): Array<T> {
    this.array.push(el);
    return this.array;
  }

  delete(id: number): Array<T> {
    const filteredArray = this.array.filter((item) => item.id !== id);
    return filteredArray;
  }

  search(name: string): Array<T> {
    const filteredArray = this.array.filter((item) => item.name.includes(name));
    return filteredArray;
  }
}
