import { Child } from "./child.ts";
import { God } from "./god.ts";
import { Chanceler } from "./chanceler.ts";
import { notify } from "./notify.ts";

class Santa{
    private Person: notify[] = [];

    addPerson(person: notify): void {
        this.Person.push(person);
    }

    sendNotify(index: number): void {
        this.Person[index].notify();
    }
}

const child1: Child = new Child("Alice");
const god1: God = new God("Zeus");
const chanceler1: Chanceler = new Chanceler("Christian Stocker");

const santa: Santa = new Santa();

santa.addPerson(child1);
santa.addPerson(god1);
santa.addPerson(chanceler1);

santa.sendNotify(0);
santa.sendNotify(1);
santa.sendNotify(2);
