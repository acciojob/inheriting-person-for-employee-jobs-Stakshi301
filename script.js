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

// Attach classes to the global window object
window.Person = Person;
window.Employee = Employee;

// Call greet and jobGreet after small delays to ensure Cypress captures them
setTimeout(() => {
  const person = new window.Person('Alice', 25);
  person.greet(); // Should log: Hello, my name is Alice, I am 25 years old.
}, 100);

setTimeout(() => {
  const employee = new window.Employee('Bob', 30, 'Manager');
  employee.jobGreet(); // Should log: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
}, 1000);
