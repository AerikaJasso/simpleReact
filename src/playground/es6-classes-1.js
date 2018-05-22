class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }

}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(!!this.homeLocation) {
      return greeting += ` Im visiting from ${this.homeLocation}.`;
    } else {
      return greeting;
    }
  }
}

const me = new Student('Scarry Terry', 26, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getDescription());

const other = new Student();
console.log(other.hasMajor());

const traveler = new Traveler('The Greek Freak', 23, 'Athens');
const traveler2 = new Traveler('Kyle Kuzma', 23);
console.log(traveler);
console.log(traveler.getGreeting());
console.log(traveler2.getGreeting());