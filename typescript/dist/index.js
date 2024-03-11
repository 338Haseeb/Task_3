"use strict";
// let num:number = 5
// console.log(num)
class person {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    register() {
        return `${this.name} is  registered`;
    }
}
const brad = new person(20, 'brad');
const newPerson = new person(10, 'person');
console.log(brad, newPerson, newPerson.register());
// subclass
class employee extends person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new employee(1, 'haseeb', 'developer');
console.log(emp1, emp1.register());
// generics
function get(items) {
    return new Array().concat(items);
}
let numarray = get([1, 2, 3, 4, 5, 5]);
let stringdata = get(["name", "dob", 20]);
numarray.push(6);
stringdata.push("age");
console.log(stringdata);
