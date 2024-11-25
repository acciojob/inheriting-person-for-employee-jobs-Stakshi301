class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Exposing for testing
window.Person = Person;
window.Employee = Employee;

// Create instances for testing
const person = new Person('Alice', 25);
const employee = new Employee('Bob', 30, 'Manager');

// Call greet for Person and jobGreet for Employee in sequence with delays
setTimeout(() => {
  person.greet(); // Expected output: "Hello, my name is Alice, I am 25 years old."
}, 1000);

setTimeout(() => {
  employee.jobGreet(); // Expected output: "Hello, my name is Bob, I am 30 years old, and my job title is Manager."
}, 3000);
