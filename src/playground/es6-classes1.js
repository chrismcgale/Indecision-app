class Person {
    constructor(name = "Default", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
};

class Student extends Person {
    constructor(name, age, major) {
        // Calls parent constructor with these
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        //If defined returns true
        return !!this.major;
    }
    getDescription() {
        let descr = super.getDescription();

        if(this.hasMajor()) {
            descr += ` Their major is ${this.major}.`;
        }
        return descr;
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        // Calls parent constructor with these
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHome() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if(this.hasHome()) {
            greet += ` I'm visiting from ${this.homeLocation}`;
        }
        return greet;
    }

};

const me = new Student("Chris M", 21, "CS");
console.log(me.getGreeting());

const other = new Student();
console.log(other);