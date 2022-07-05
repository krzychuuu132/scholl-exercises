import { FilterPerson } from "./FilterPerson"


export abstract class Person extends FilterPerson{

  async fetchPeople(): Promise<Response> {
    console.log(super.filter())
    const data = await fetch('/')
      return data
  }

  abstract move():string

  abstract speak(): string

}
