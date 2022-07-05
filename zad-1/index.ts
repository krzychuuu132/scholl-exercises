import { Filip } from "./Filip";
import { Krzysiek } from "./Krzysiek";
import { Olaf } from "./Olaf";

// Zad 1
const krzysiek =  new Krzysiek()
console.log(krzysiek.move(), krzysiek.speak())

const filip =  new Filip()
console.log(filip.move(), filip.speak())

const olaf =  new Olaf()
console.log(olaf.move(), olaf.speak())
