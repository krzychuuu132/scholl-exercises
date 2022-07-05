import { Person } from "./Person";

export class Filip extends Person {
    move(): string {
        console.log('move Filip')
        return ''
    }
    speak(): string {
        console.log('speak Filip')
        return ''
    }
}