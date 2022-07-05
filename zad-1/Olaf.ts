import { Person } from "./Person";

export class Olaf extends Person {
    move(): string {
        console.log('move Olaf')
        return ''
    }
    speak(): string {
        console.log('speak Olaf')
        return ''
    }
}