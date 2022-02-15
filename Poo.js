class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }

    speak() {
        console.log('Hi guys');
    }
}

const person = new Person('Kiara', 'Fastser', 19);
console.log(person);

console.log(person.getFullName());
person.speak();