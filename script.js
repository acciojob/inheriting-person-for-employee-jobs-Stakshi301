// Person Class
class Person {
  constructor(name, age) {
    this.name = name; // Name of the person
    this.age = age;   // Age of the person
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class extending Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Inherit name and age from Person class
    this.jobTitle = jobTitle; // Job title specific to Employee
  }

  // Method to greet with job title
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Example Test Cases

// Create a Person instance
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Create an Employee instance
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
