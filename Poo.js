class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }

    static speak() {
        console.log('Hi guys');
    }
}

const person = new Person('Kiara', 'Fastser', 19);
console.log(person);

console.log(person.getFullName());

Person.speak();

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made it noise!`);
    }
}

const animal = new Animal('Caramelo');

animal.speak();

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} meow!`)
    }
}

const cat = new Cat("Twig");

cat.speak();