'use strict';

// const sayHi = function () {
//     return `Hello, my name is ${this.name}`;
// }
//
// const person1 = {
//     name: 'Anton',
//     age: 19,
//     sayHi,
// }
//
// const person2 = {
//     name: 'Ivan',
//     age: 12,
//     sayHi,
// }
//
// person1.job = 'Developer';
// person2.job = 'School';


// person1.sayHi = sayHi;
// person2.sayHi = sayHi;

// console.log(person1.sayHi());
// console.log(person2.sayHi());

// console.log(sayHi())


// const person1 = {
//     name: 'Anton',
//     age: 19,
//     sayHi() {
//         return `Hello, my name is ${this.name}`
//     },
//     setJob(job) { // 'Developer'
//         this.job = job;
//         // person1.job = 'Developer'
//         return `Job is set to ${job}`
//     },
// }
//
// console.log(person1.sayHi());
// console.log(person1.setJob('Developer'));
// console.log(person1);

class Person {
    type = 'HUMAN'
    job = null;
    friends = [];
    #characteristics = '';

    #age = 0;

    constructor(name) {
        this.name = name;
    }

    applyForJob(jobTitle) {
        this.job = jobTitle;

        return `My name is ${this.name} job now is: ${this.job}`
    }

    addFriend(person) {
        if (person.type === 'HUMAN') {
            this.friends.push(person);
        }
    }

    addCharacteristics(characteristic) {
        this.#characteristics += `${characteristic}, `;
    }

    get age() {
        if (this.#age < 18) {
            return `This baby is ${this.#age} years old`
        }

        return `This old man is ${this.#age} years old`;
    }

    set age(ageParam) {
        if (ageParam < 0) {
            throw new Error('Age must be bigger or equal than zero');
        }

        return this.#age = ageParam;
    }
}

const person1 = new Person('Anton');
const person2 = new Person('Denis');

person1.applyForJob('Developer');

try {
    person1.age = -1;
} catch (e) {
    //
}

person1.addCharacteristics('Love cookies')

person2.addFriend(person1);

console.log(person1.age);